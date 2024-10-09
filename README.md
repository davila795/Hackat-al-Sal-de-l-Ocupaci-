# Prueba Frontend Hackató Saló Ocupació.
## Demo -> https://react-rickymorty-hackat.netlify.app/
## Descripción

Aplicación creada usando React + Typescript y la API de Rick y Morty. Los estilos fueron creados con CSS puro y poniendo en práctica la metodología BEM.

## Características

### Componentes:

  1. #### Character List
     - Card

  3. #### Header
     - Search Bar

  3. #### Mobile Bar

### Custom Hooks

- #### useCharacters
  Abstrae toda la lógica relacionada con los personajes y a los estados que afecta; [characters, showMoreButton, loading].

- #### useDebounce
  Hook que crea una version debounced del estado name, usado para hacer la búsqueda a tiempo real. Hasta que no se establece un nuevo debouncedName, no se ejecutará la función fetch en
  useCharacters. Esto hace la aplicación más optima y eficiente usando un delay de 500ms, reduciendo así la cantidad de veces que se llama a la API.

### Utilities
  - #### fetchData
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
