FROM node:8.1.3
MAINTAINER Isaac Arismendi <arismendi6702@gmail.com>
EXPOSE 3000

WORKDIR /app
ADD . /app/
RUN npm install && npm run build  && npm run seed-test

CMD NODE_ENV=$ENV node ./dist/index.js