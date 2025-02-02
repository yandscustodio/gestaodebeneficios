# Escolhendo a imagem base (para Node.js ou Python)
# Para Node.js (Express)
FROM node:18-alpine

# Diretório de trabalho no container
WORKDIR /app

# Copiar arquivos do backend para o container
COPY ./backend/package*.json ./
RUN npm install

COPY ./backend .

# Expor a porta da API
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]

# Para o Frontend (React)
FROM node:18-alpine AS frontend

WORKDIR /app

COPY ./frontend/package*.json ./
RUN npm install

COPY ./frontend .

RUN npm run build

# Usar um servidor NGINX para servir o frontend
FROM nginx:alpine
COPY --from=frontend /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
