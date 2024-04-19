FROM node:20.12.2

WORKDIR /usr/src/app

COPY ./ ./

RUN npm i

EXPOSE 3000

CMD ["npm", "dev"]