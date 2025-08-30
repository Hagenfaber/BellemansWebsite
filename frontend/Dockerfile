# This is the newer version

FROM node:22-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

ARG VITE_STRAPI_URL
ENV VITE_STRAPI_URL ${VITE_STRAPI_URL}

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "serve" ]