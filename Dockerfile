FROM node:16.14-bullseye

WORKDIR /app

RUN apt-get update && apt-get install -y ncat

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install

COPY . .
CMD ["npm", "run", "devstart"]