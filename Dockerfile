FROM node:16.14-bullseye

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install

COPY . .
#RUN chmod +x wait-for-it.sh
CMD ["npm", "run", "devstart"]