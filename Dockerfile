FROM node:20 AS base
FROM base AS dependencies

WORKDIR /usr/src/app
COPY package.json ./

RUN npm install

FROM node:20-alpine3.19 AS deploy
WORKDIR /usr/src/app

COPY . .

COPY --from=dependencies /usr/src/app/node_modules ./node_modules
COPY --from=dependencies /usr/src/app/package.json ./package.json

EXPOSE 8000

CMD [ "npm", "run", "dev"]
