FROM node:12.21-alpine AS build

RUN mkdir -p /app
WORKDIR /app

COPY package*.json /app
RUN npm install

COPY . /app
RUN npm run build

FROM nginx:1.18.0-alpine
COPY --from=build app/dist/feed /usr/share/nginx/html

#COPY default.conf /etc/nginx/conf .d/fefault.conf