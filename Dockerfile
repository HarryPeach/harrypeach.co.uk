FROM php:7.0-apache

COPY ./config/php.ini /usr/local/etc/php
COPY ./config/apache2.conf /etc/apache2/apache2.conf
COPY ./config/000-default.conf /etc/apache2/sites-available/000-default.conf
COPY ./public_html/ /var/www/html

EXPOSE 80