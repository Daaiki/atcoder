FROM node:16.15-alpine
ENV APP_ROOT /home/app

WORKDIR $APP_ROOT

COPY ./package.json $APP_ROOT
COPY ./yarn.lock $APP_ROOT

RUN yarn set version 3.2.3
RUN yarn install

COPY . $APP_ROOT
