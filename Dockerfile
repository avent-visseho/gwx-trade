# Étape 1 : build de l'app avec Node
FROM node:20-alpine as build-stage

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

# Étape 2 : serveur nginx pour servir les fichiers statiques
FROM nginx:alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
