FROM node:12-alpine

WORKDIR /backend

COPY ./backend/package.json .

RUN yarn

COPY ./backend .

EXPOSE 3333

CMD yarn migration:run && yarn start