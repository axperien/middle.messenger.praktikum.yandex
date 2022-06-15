FROM --platform=linux/amd64 node:16.13.1-alpine3.13 AS build

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY . ./

RUN npm run production

EXPOSE 3000

CMD npm run server