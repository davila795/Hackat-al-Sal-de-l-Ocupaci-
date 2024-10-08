# Prueba Frontend Hackató Saló Ocupació.
## Demo -> https://react-rickymorty-hackat.netlify.app/
## Descripción

Aplicación creada usando React + Typescript y la API de Rick y Morty. Los estilos fueron creados con CSS puro y poniendo en práctica la metodología BEM.

## Características

### Componentes:

  1. Character List

    - Card

  2. Header

    - Search Bar

  3. Mobile Bar

### Custom Hooks

#### useCharacters
    Abstrae toda la lógica relacionada con los personajes y los estados que afecta; [characters, showMoreButton, loading].

#### useDebounce
    Hook usado para crear una version debouncing de la funcion pasada por parametro. Esto lo que hace es convertir la función a una más optima y eficiente, reduciendo la cantidad de veces
    que se ejecuta en un periodo de tiempo establecido. En este proyecto, es usado para no saturar a base de llamadas al servidor de la API, creando un delay minimo para no afectar la
    búsqueda a tiempo real.

### Utilities
  - ### fetchCharacters
    función que abstrae la lógica de hacer una petición GET a la api.

## Instalación

Instrucciones para instalar y configurar el proyecto.

```bash
# Tener instalado Node.

# Clonar el repositorio
git clone https://github.com/davila795/Hackat-al-Sal-de-l-Ocupaci-.git

# Navegar al directorio del proyecto
cd Hackat-al-Sal-de-l-Ocupaci-

# Instalar dependencias
npm install

# Comando para iniciar el proyecto
npm run dev
```
