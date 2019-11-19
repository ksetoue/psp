#!/bin/bash

./node_modules/.bin/sequelize-cli db:migrate
./node_modules/.bin/sequelize-cli db:seed:all
