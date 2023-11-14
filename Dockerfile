FROM node: 12.2.0-apline
WORKDIR /app
COPY . /app
RUN npm install 
EXPOSE 3020 
CMD node app.js