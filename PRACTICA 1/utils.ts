// utils.ts

import { ID } from "./TYPE";

// Función para eliminar un elemento del arreglo por ID
export function eliminarElementoPorId<T extends ID>(
  arreglo: T[],
  id: number
): T[] {
  const indice = arreglo.findIndex((elemento) => elemento.id === id);
  if (indice !== -1) {
    arreglo.splice(indice, 1);
  }
  return arreglo;
}