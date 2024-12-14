# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.8.0


FROM node:${NODE_VERSION}-alpine as base

WORKDIR /usr/src/app

# Install dependencies 
FROM base as deps


COPY package*.json ./  
COPY tsconfig.json ./  


RUN npm install

FROM deps as build

COPY . .

RUN npm run build

FROM base as final

ENV NODE_ENV production

RUN npm install --production && npm install sharp

USER root
RUN mkdir -p .next/cache && chmod -R 777 .next/cache

USER node

COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/public ./public
COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/next.config.mjs ./next.config.mjs

EXPOSE 3003

CMD ["npm", "run", "start", "--", "-p", "3003"]
