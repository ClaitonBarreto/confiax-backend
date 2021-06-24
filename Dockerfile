FROM node:12-alpine

WORKDIR /confiax-backend

COPY ./confiax-backend/package.json .

RUN yarn

COPY ./confiax-backend .

EXPOSE 3333

CMD yarn migration:run && yarn start