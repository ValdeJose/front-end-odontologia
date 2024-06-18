# Usar una imagen base oficial de Node.js
FROM node:20 as angular

# Crear un directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package.json .

# Instalar las dependencias
RUN npm install

# Instalar Angular CLI globalmente
RUN npm install -g @angular/cli

# Copiar el resto de la aplicación
COPY . .


RUN npm run build

# Exponer el puerto que la aplicación va a usar
EXPOSE 8080


# Comando para iniciar la aplicación
CMD ["npm", "start"]




