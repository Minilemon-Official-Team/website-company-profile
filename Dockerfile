# syntax=docker/dockerfile:1


ARG NODE_VERSION=20.8.0

FROM node:${NODE_VERSION}-alpine as base

# Set the working directory inside the container.
WORKDIR /usr/src/app

# Install dependencies 
FROM base as deps

# Copy only the package.json, package-lock.json, and tsconfig.json for cache purposes.
COPY package*.json ./  
COPY tsconfig.json ./  

# Install both production and development dependencies, 
# as TypeScript requires some devDependencies to build.
RUN npm install


FROM deps as build


COPY . .

RUN npm run build



# Create a minimal production image to run the built Next.js app.
FROM base as final

# Set environment variables for production.
ENV NODE_ENV production

RUN npm install --production && npm install sharp

USER root

RUN mkdir -p .next/cache && chmod -R 777 .next/cache

# Run the application as a non-root user for security.
USER node

# Copy only the necessary files from the previous stages.
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/public ./public
COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/next.config.mjs ./next.config.mjs

# Expose the default Next.js port.
EXPOSE 3003

# Start the app,
CMD ["npm", "run", "start", "--", "-p", "3003"]