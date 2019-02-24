FROM node:alpine

WORKDIR /usr/app

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]69
