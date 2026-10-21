export type Genero = 'rock' | 'pop' | 'salsa' | 'reggaeton' | 'bolero';

export interface Cancion {
    id: number;
    titulo: string;
    artista: string;
    anio: number;
    genero: Genero;
    duracion: number; // en segundos
    album?: string; // propiedad opcional
}