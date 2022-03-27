FROM golang:1.17

RUN mkdir -p /var/www

WORKDIR /var/www

COPY . /var/www

RUN CGO_ENABLED=0 go build -o app

EXPOSE 8050
ENTRYPOINT ["/var/www/app"]
