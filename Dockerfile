FROM node:alpine

WORKDIR /usr/scr/app
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8085

CMD ["npm", "start"]