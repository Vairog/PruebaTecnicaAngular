FROM node:10-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package. json /app/

RUN pm install

COPY . /app

RUN pm run build - -prod


#Segundo etapa

FROM nginx:1.17.1-alpine

COPY --from=build-step /app/dist/PruebaTecnica /usr/share/nginx/html