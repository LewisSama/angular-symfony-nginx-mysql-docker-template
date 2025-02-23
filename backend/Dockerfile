FROM php:8.2-fpm

# Étape 2 : Installation des dépendances système
RUN apt-get update && apt-get install -y \
    libpq-dev \
    libzip-dev \
    zip \
    unzip \
    git \
    curl \
    && docker-php-ext-install pdo pdo_mysql zip opcache

#prévoir clear cache

# Étape 3 : Installation de Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Étape 4 : Configuration de l’environnement de travail
WORKDIR /var/www/html

# Étape 5 : Copie des fichiers du projet
COPY . /var/www/html

RUN mkdir -p /var/www/html/var

# Étape 6 : Changement des permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 775 /var/www/html/var

COPY ./docker/php-fpm/php-fpm.conf /usr/local/etc/php-fpm.d/www.conf

# Étape 8 : Commande par défaut (PHP-FPM en mode daemon)
CMD ["php-fpm"]


