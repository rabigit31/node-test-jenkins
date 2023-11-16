FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install 
EXPOSE 3020 
CMD ["npm","start"]