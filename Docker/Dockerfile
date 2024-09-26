FROM node:alpine as builder

WORKDIR /api

COPY package*.json package*.json

RUN npm install

COPY . .

RUN npm run build

FROM node:alpine as runner

COPY --from=builder dist/ .

CMD [ "npm","start" ]