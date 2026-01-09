# =====================
# STAGE 1: Frontend build
# =====================
FROM node:20-alpine AS frontend

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY resources resources
COPY vite.config.js tsconfig.json ./
RUN npm run build


# =====================
# STAGE 2: PHP Production
# =====================
FROM php:8.3-fpm

RUN apt-get update && apt-get install -y \
    git zip unzip libpng-dev libonig-dev libxml2-dev libzip-dev \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Copy Laravel
COPY . .

# Copy hasil build Vite
COPY --from=frontend /app/public/build public/build

RUN composer install --no-dev --optimize-autoloader \
    && chown -R www-data:www-data storage bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

EXPOSE 9000
CMD ["php-fpm"]
