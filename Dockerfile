FROM node:12-alpine

WORKDIR /usr/src/app

COPY ./confiax-backend/package.json .

RUN yarn

COPY ./confiax-backend .

EXPOSE 3333

CMD yarn migration:run && yarn start:dev