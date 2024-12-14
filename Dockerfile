# syntax=docker/dockerfile:1

# Use the specified Node.js version
ARG NODE_VERSION=20.8.0

# Base image
FROM node:${NODE_VERSION}-alpine as base

# Set the working directory
WORKDIR /usr/src/app

# Add necessary build tools for Alpine
RUN apk add --no-cache python3 make g++

# Dependencies stage
FROM base as deps

# Copy only essential files for installing dependencies
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Build stage
FROM deps as build

# Copy all source files
COPY . .

# Build the Next.js application
RUN npm run build

# Final production stage
FROM base as final

# Set environment for production
ENV NODE_ENV production

# Run the application as a non-root user
RUN chown -R node:node /usr/src/app
USER node

# Copy necessary files from previous stages
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/public ./public
COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/next.config.mjs ./next.config.mjs

# Expose the port
EXPOSE 3003

# Start the application
CMD ["next", "start", "-p", "3003"]
