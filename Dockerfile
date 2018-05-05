FROM php:7.0-apache

COPY ./config/php.ini /usr/local/etc/php
COPY ./config/apache2.conf /etc/apache2/apache2.conf
COPY ./config/000-default.conf /etc/apache2/sites-available/000-default.conf
COPY ./html/ /var/www/html

RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

EXPOSE 80