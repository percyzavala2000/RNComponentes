# RN Componentes

Demostración de los componentes de React Native utilizando la arquitectura Domain-Driven Design (DDD) y react-navigation.

## Descripción

Esta aplicación es una demostración de los diferentes componentes de React Native, como botones, formularios, listas, modales y otros. Se ha desarrollado utilizando la arquitectura Domain-Driven Design (DDD) para separar la lógica de negocio de la capa de presentación, facilitando la escalabilidad y mantenibilidad del código.

Además, se utiliza el paquete react-navigation para gestionar la navegación entre pantallas, permitiendo una experiencia fluida para el usuario.

## Características

* Demostración de los componentes de React Native
* Implementación de la arquitectura Domain-Driven Design (DDD)
* Uso de `react-navigation` para gestionar la navegación entre pantallas
* Código modular y escalable
* Compatible con Android e iOS

## Requisitos previos
* Antes de comenzar, asegúrese de tener instalados los siguientes requisitos:
* Node.js (versión recomendada LTS)
* Expo CLI (opcional, si deseas ejecutarlo con Expo)
* React Native CLI
* Android Studio y Xcode (para emuladores y compilación nativa)
* Dispositivo físico o emulador configurado

## Instalación

1. Clona el repositorio utilizando ` `     
2. Instala las dependencias utilizando `npm install` o `yarn install`
3. Ejecuta la aplicación utilizando `npx react-native run-android` o `npx react-native run-ios`

## Estructura del proyecto

* `src`: Carpeta principal de la aplicación
  + `config`: Carpeta de configuración de la aplicación
    + `apater`: Carpeta de adaptadores de la aplicación
    + `theme`: Carpeta de servicios de la aplicación
  + `assets`: Carpeta de recursos de la aplicación
  + `presentacion`: Carpeta de presentación de la aplicación
	  + `components`: Carpeta de componentes de React Native
       + `iu`: Carpeta de interfaces de usuario de la aplicación
	  + `icons`: Carpeta de iconos de la aplicación
    + `hooks`: Carpeta de hooks personalizados
	  + `navigation`: Carpeta de navegación entre pantallas
	  + `screens`: Carpeta de pantallas de la aplicación
       + `iu`: Carpeta de interfaces de usuario de la aplicación
       + `alerts`: Carpeta de alertas de la aplicación
       + `animations`: Carpeta de animaciones de la aplicación
       + `home`: Carpeta de la pantalla de inicio de la aplicación
       + `input`: Carpeta de la pantalla de entrada de la aplicación
       + `swiches`: Carpeta de la pantalla de interruptores de la aplicación
       + `theme`: Carpeta de la pantalla de temas de la aplicación
+ `App`: Componente principal de la aplicación
  

## Contribuciones

Las contribuciones son bienvenidas. Para contribuir, sigue los siguientes pasos:

1. Haz un fork del repositorio
2. Crea una rama para tu contribución
3. Haz tus cambios y envía un pull request

## Licencia

Este proyecto está licenciado bajo la licencia MIT.

## Agradecimientos

* A la comunidad de React Native por su apoyo y recursos.
* A los contribuyentes de este proyecto por su tiempo y esfuerzo.