# FROM node:16-alpine
# RUN mkdir -p /app
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm run build
# EXPOSE 80
# CMD ["npm", "start"]
FROM nginx:stable-alpine
COPY --from=build /build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]