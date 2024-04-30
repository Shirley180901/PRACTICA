// types.ts

// Definición de entidades

// Entidad ID
export interface ID {
    id: number;
  }
  
  // Entidad Película
  export interface Pelicula extends ID {
    nombre: string;
    categoria: string;
    actores: string[];
  }
  
  // Entidad Entidad
  export interface Entidad extends ID {
    nombre: string;
  }
  
  // Definir una interfaz para la respuesta del servicio REST
  export interface PeliculaResponse {
    id: number;
    title: string;
    category: string;
    actors: string[];
  }
