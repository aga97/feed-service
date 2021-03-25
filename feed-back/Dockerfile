FROM node:12.21-alpine AS builder

RUN mkdir -p /app
WORKDIR /app

COPY package*.json /app
RUN npm install

COPY . /app
RUN npm run build

FROM node:12.21-alpine
COPY --from=builder /app ./

CMD ["npm", "run", "start"]
