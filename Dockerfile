FROM node:16-alpine as base

FROM base as deps

RUN mkdir /app
WORKDIR /app

ADD package.json package-lock.json ./
RUN --mount=type=secret,id=npmrc,mode=0644,dst=/app/.npmrc npm ci --production=false && \
    npm cache clear --force

# Setup production node_modules
FROM base as production-deps

RUN mkdir /app
WORKDIR /app


ADD package.json package-lock.json ./
RUN --mount=type=secret,id=npmrc,mode=0644,dst=/app/.npmrc npm prune --production && \
    npm cache clear --force

# Build the app
FROM base as build

ENV NODE_ENV=production

RUN mkdir /app
WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules

ADD . .

# Build production image
FROM base

ENV NODE_ENV=production
ENV PORT=80

RUN mkdir /app
WORKDIR /app


COPY --from=production-deps /app/node_modules /app/node_modules

COPY --from=build /app/build /app/build
COPY --from=build /app/public /app/public
ADD . .

EXPOSE 80

CMD ["npm", "run", "start"]