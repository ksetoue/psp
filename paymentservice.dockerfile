FROM node:latest

# ARG DOCKER_ENV
ARG DB_HOST
ARG DB_NAME
ARG DB_PORT
ARG DB_USER
ARG DB_PASSWORD
ARG DB_NAME
ARG NODE_ENV

# Line below is related to this issue: https://github.com/phusion/baseimage-docker/issues/58
ENV DEBIAN_FRONTEND noninteractive

ENV NODE_ENV=$NODE_ENV
ENV DB_HOST=$DB_HOST
ENV DB_NAME: ${DB_NAME}
ENV DB_PORT=$DB_PORT
ENV DB_USER=$DB_USER
ENV DB_PASSWORD=$DB_PASSWORD

# installing dependencies

RUN apt-get update && apt-get install -y apt-utils curl apt-transport-https \
  && apt-get install -y --force-yes build-essential locales locales-all git netcat

# Set folder and copy files 
ENV APP_ROOT /app
WORKDIR $APP_ROOT
COPY package.json .

# install node dependencies - this way docker can cache npm dependencies, and improve the time it takes to rebuild 
RUN npm install -g nodemon
RUN npm install

COPY . .

RUN chmod +x dbconfig.sh
