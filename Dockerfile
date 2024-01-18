FROM node:21-alpine

ENV DB_URI=$MONGO_URI \
    DISCORD=$DISCORD_URL \
    TWITTER=$TWITTER_URL \
    GITHUB=$GITHUB_URL \
    YOUTUBE=$YOUTUBE_URL

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 3000

RUN npm install

CMD ["npm", "start"]