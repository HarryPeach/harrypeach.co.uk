FROM php:7.0-apache

COPY ./config/php.ini /usr/local/etc/php
COPY ./public_html/ /var/www/html

EXPOSE 80
