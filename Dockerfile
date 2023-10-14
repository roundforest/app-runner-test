FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

ENV NODE_ENV=production

RUN --mount=type=secret,id=npmrc,mode=0644,dst=/app/.npmrc npm ci --production && \
    npm cache clear --force

#Copy server side code
COPY /build /app/build
#Copy client side code
COPY /public /app/public

ENV PORT=80
EXPOSE 80

CMD ["npm", "run", "start"]