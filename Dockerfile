# Use the official Node.js 18 image as the base image
FROM node:16-alpine
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm run build
COPY . .
EXPOSE 80

# Command to start your Node.js application
CMD ["npm", "start"]
