# Étape 1 : Compiler et construire le code source Angular
FROM node:lts-slim

RUN npm install -g @angular/cli

# Définir le répertoire de travail
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./

USER node

# Installer toutes les dépendances
RUN npm install

COPY --chown=node:node . .

#Uniquement en DEV
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "2000"]



