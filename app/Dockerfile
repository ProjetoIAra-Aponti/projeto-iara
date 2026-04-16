FROM node:22-alpine AS build
WORKDIR /app

# Copia os packages para instalar as dependências de uma vez
COPY app/package*.json ./
RUN npm install

# Copia TODO o conteúdo da pasta app para dentro de /app no container
COPY app/ .

# --- O PULO DO GATO ---
# Verifique se o arquivo .json está na raiz ou em src/config. 
# Se ele estiver FORA da pasta app, você precisa de um COPY extra:
# COPY chaveJsonFirebaseFirestore.json ./src/config/ 

RUN npm run build

# Se este Dockerfile for para o BACKEND, pare aqui e use:
# EXPOSE 3000
# CMD ["npm", "run", "start"]

# Se for para o FRONTEND com Nginx (como está no seu):
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]