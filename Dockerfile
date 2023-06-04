from node:18.12.1

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
CMD node server.js

