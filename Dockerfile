# =====================
# STAGE 1: Frontend
# =====================
FROM node:20-alpine AS frontend
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY resources resources
COPY vite.config.js tsconfig.json ./
RUN npm run build


# =====================
# STAGE 2: Composer
# =====================
FROM composer:2 AS vendor
WORKDIR /app
COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader --no-interaction


# =====================
# STAGE 3: App (PHP + NGINX)
# =====================
FROM php:8.3-fpm-alpine

RUN apk add --no-cache nginx bash \
    && docker-php-ext-install pdo_mysql

WORKDIR /var/www/html

# Copy Laravel source
COPY . .

# Copy dependencies
COPY --from=vendor /app/vendor vendor

# Copy Vite build
COPY --from=frontend /app/public/build public/build

COPY nginx/default.conf /etc/nginx/http.d/default.conf

RUN chown -R www-data:www-data storage bootstrap/cache

EXPOSE 80
CMD ["sh", "-c", "php-fpm -D && nginx -g 'daemon off;'"]
