FROM node:8
WORKDIR /app
COPY . ./
RUN npm install
CMD ["npm", "run", "start"]
EXPOSE 3000