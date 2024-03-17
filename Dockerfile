# Utiliza una imagen base ligera con un servidor web
FROM nginx:1.25.4-alpine3.18

# Copia todos los archivos de la página web al directorio de trabajo del contenedor
COPY . /usr/share/nginx/html/

# Expone el puerto 80 para que el servidor web de Nginx pueda ser accesible
EXPOSE 80

# Comando para iniciar el servidor web al ejecutar el contenedor
CMD ["nginx", "-g", "daemon off;"]
