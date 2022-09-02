#

FROM node:12 AS builder

RUN apt update
RUN apt install nasm

WORKDIR /app

COPY . /app

RUN npm install
EXPOSE 8001

CMD ["npm", "run", "develop"]