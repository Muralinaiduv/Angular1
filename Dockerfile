FROM node:latest AS builder 
WORKDIR  /app
copy package.json .
RUN npm install
RUN npm run build --prod

COPY . .

EXPOSE 4200
FROM nginx:1.15.8-apline
copy --from=builder /app/dist/app /usr/share/nginx/html
