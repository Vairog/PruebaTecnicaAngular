# Usa una imagen de Node.js como base
FROM node:14

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todos los archivos de la aplicación al directorio de trabajo
COPY . .

# Compila la aplicación Angular
RUN npm run build

# Expone el puerto 80 en el contenedor
EXPOSE 80

# Inicia la aplicación cuando se inicia el contenedor
CMD ["npm", "start"]