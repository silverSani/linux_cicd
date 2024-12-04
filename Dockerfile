FROM node:22.11.0-alpine
WORKDIR /Linux
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]