// main.ts

import { ID, Pelicula, Entidad, PeliculaResponse } from "./TYPE"; // Importamos la interfaz ID
import { eliminarElementoPorId } from "./utils";

// Callback para mostrar el elemento eliminado por consola
function mostrarElementoEliminado(elemento: ID) {
  console.log("Elemento eliminado:");
  console.log(elemento);
}

// Arreglo de objetos de películas
const peliculas: Pelicula[] = [
  { id: 1, nombre: "Parasite", categoria: "Drama", actores: ["Song Kang-ho", "Lee Sun-kyun"] },
  { id: 2, nombre: "The Shape of Water", categoria: "Fantasia", actores: ["Sally Hawkins", "Michael Shannon"] },
  { id: 3, nombre: "Moonlight", categoria: "Drama", actores: ["Trevante Rhodes", "Naomie Harris"] }
];

// Arreglo de objetos de entidades
const entidades: Entidad[] = [
  { id: 1, nombre: "Empresa A" },
  { id: 2, nombre: "Empresa B" },
  { id: 3, nombre: "Empresa C" }
];

// Eliminar una película por ID (por ejemplo, ID 2)
const idAEliminar = 2;
console.log("Películas antes de eliminar:");
console.log(peliculas);
const peliculasDespuesEliminar = eliminarElementoPorId(peliculas, idAEliminar);
console.log("Películas después de eliminar:");
console.log(peliculasDespuesEliminar);

// Consulta a un servicio REST de películas (usando JSONPlaceholder como ejemplo)
const url = "https://jsonplaceholder.typicode.com/posts/1";
fetch(url)
  .then((response) => response.json())
  .then((data: PeliculaResponse) => {
    // Válidar si la respuesta cumple con la interfaz
    const pelicula: Pelicula = {
      id: data.id,
      nombre: data.title,
      categoria: data.category,
      actores: data.actors
    };
    console.log("Respuesta del servicio REST:");
    console.log(pelicula);
  })
  .catch((error) => console.error("Error al consultar el servicio REST:", error));

// Eliminar una entidad por ID (por ejemplo, ID 3)
const idEntidadAEliminar = 3;
console.log("Entidades antes de eliminar:");
console.log(entidades);
const entidadesDespuesEliminar = eliminarElementoPorId(entidades, idEntidadAEliminar);
console.log("Entidades después de eliminar:");
console.log(entidadesDespuesEliminar);
