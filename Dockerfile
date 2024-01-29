FROM nginx:stable-alpine
COPY dist/ app/
COPY ./nginx.conf /etc/nginx/nginx.conf