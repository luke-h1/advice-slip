FROM golang:1.18

RUN mkdir -p /var/www

WORKDIR /var/www

COPY . /var/www

RUN CGO_ENABLED=0 go build -o app

EXPOSE 8000
ENTRYPOINT ["/var/www/app"]
