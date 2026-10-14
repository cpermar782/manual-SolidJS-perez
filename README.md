# Manual de SolidJS - Carlos Pérez Martínez

Proyecto práctico de 2.º de Desarrollo de Aplicaciones Web (DAW) para aprender los conceptos básicos de SolidJS mediante una aplicación de lista de tareas.

## Descripción del proyecto

Este proyecto contiene un manual introductorio de SolidJS y una aplicación web sencilla para gestionar tareas pendientes.

La aplicación permite:

- Añadir nuevas tareas.
- Marcar tareas como completadas.
- Eliminar tareas.
- Consultar el número de tareas pendientes.

Las tareas se almacenan en memoria, por lo que no se conservan al recargar la página.

## Requisitos previos

Para ejecutar el proyecto necesitas tener instalado:

- **Node.js**, preferiblemente una versión LTS compatible.
- **npm**, que se instala normalmente junto con Node.js.
- Un navegador web actualizado, como Chrome, Firefox o Edge.

Puedes comprobar que Node.js y npm están instalados ejecutando estos comandos en una terminal:

```bash
node -v
npm -v
```

## Instalación y ejecución

Sigue estos pasos para ejecutar el proyecto en tu ordenador.

### 1. Descargar o clonar el repositorio

Clona el repositorio con Git:

```bash
git clone URL_DEL_REPOSITORIO
```

Sustituye `URL_DEL_REPOSITORIO` por la dirección real de tu repositorio.

Si ya tienes el proyecto descargado, puedes omitir este paso.

### 2. Acceder a la carpeta del proyecto

Abre una terminal y entra en la carpeta que contiene el proyecto y su archivo `package.json`.

Por ejemplo:

```bash
cd manual-SolidJS-perez
```

Si la carpeta tiene otro nombre en tu ordenador, utiliza el nombre correspondiente.

### 3. Instalar las dependencias

Ejecuta el siguiente comando para instalar las dependencias necesarias:

```bash
npm install
```

### 4. Iniciar el servidor de desarrollo

Ejecuta:

```bash
npm run dev
```

La terminal mostrará una dirección local para acceder a la aplicación. Normalmente será:

[http://localhost:5173]

Abre en el navegador la dirección exacta que aparezca en la terminal.

### 5. Detener la aplicación

Cuando quieras detener el servidor de desarrollo, vuelve a la terminal y pulsa `Ctrl + C`.

## Scripts disponibles

En la carpeta del proyecto puedes utilizar los siguientes comandos:

| Comando | Descripción |
|---|---|
| `npm install` | Instala las dependencias del proyecto. |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera la versión de producción en la carpeta `dist`. |
| `npm run preview` | Permite previsualizar la versión generada, si el script está configurado. |

## Tecnologías utilizadas

- **SolidJS:** librería para crear interfaces de usuario reactivas.
- **JavaScript y JSX:** para implementar la lógica y la interfaz.
- **Vite:** herramienta para ejecutar el servidor de desarrollo y generar la versión de producción.
- **CSS:** para definir los estilos de la aplicación.
- **npm:** para gestionar las dependencias.

## Autor

**Carlos Pérez Martínez**  
2.º DAW

## Recursos

- [Documentación oficial de SolidJS](https://docs.solidjs.com/)
- [Documentación de Vite](https://vite.dev/)
- [Página oficial de Node.js](https://nodejs.org/)
