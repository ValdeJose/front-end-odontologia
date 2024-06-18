# Usar una imagen base oficial de Node.js
FROM node:20

# Crear un directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Construir la aplicación
RUN ng build

# Exponer el puerto que la aplicación va a usar
EXPOSE 8080

# Definir la variable de entorno para el puerto
ENV PORT 8080



