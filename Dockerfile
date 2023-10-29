# Use the official Node.js 18 image as the base image
FROM node:18-alpine
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
EXPOSE 80

# Command to start your Node.js application
CMD ["npm", "start"]
