FROM node: 12.2.0-apline
WORKDIR app
COPY . .
RUN npm install 
EXPOSE 3020 
CMD ["npm","start"]