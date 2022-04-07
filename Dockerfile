FROM node:16.14

WORKDIR /app

RUN apt-get update -qq && apt-get install -y build-essential

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
#RUN npm rebuild
#RUN npm rebuild libxmljs
COPY . .
RUN chmod +x wait-for-it.sh
CMD ["npm", "run", "devstart"]