############################################################################################
# This defines our starting point
FROM node:12.18.3

#RUN mkdir /usr/src/app
#WORKDIR /usr/src/app
#
#RUN npm install -g @angular/cli

# set working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli

COPY . /app

COPY . /usr/src/app
CMD ng serve --host 0.0.0.0 --port 4200
# docker-compose build angular-service
# docker-compose run angular-service
#docker-compose up;

#Run
#docker-compose build angular-service
#Run
#docker-compose up;
