import type { Cancion } from './tipos';

export const filtrarCanciones = (canciones: Cancion[], busqueda: string): Cancion[] => {
    const busquedaMinuscula = busqueda.toLowerCase();
    return canciones.filter((cancion) =>
        cancion.titulo.toLowerCase().includes(busquedaMinuscula)
    );
};