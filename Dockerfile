FROM node:20
WORKDIR /app
COPY . .
RUN npm install && cd frontend && npm install
EXPOSE 3000
CMD ["npm", "run", "start", "--prefix", "frontend"]
