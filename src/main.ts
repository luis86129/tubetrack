import './style.css';
import { canciones } from './canciones';
import type { Cancion } from './tipos';


const titulo = 'TubeTrack - TypeScript';
const descripcion = 'Explora y busca tus canciones favoritas';
let cantidad = canciones.length;


const appDiv: HTMLElement = document.getElementById("app") as HTMLElement;

if (appDiv) {
    appDiv.innerHTML = `
    <header>
        <h1>🎵 ${titulo}</h1>
        <p>${descripcion}</p>
        <h4>${cantidad} canciones en la lista de canciones </h4>
    </header>
    <main>
        <section class="buscador">
            <label for="buscar">Buscar canción</label>

            <input
            type="text"
            id="buscar"
            placeholder="Escribe una canción, artista o género..."
            />
        </section>

        <section>
            <h2>Lista de canciones</h2>

            <div id="lista-canciones"></div>
        </section>
    </main>`;

    let mostrarCanciones = (canciones: Cancion[]): void => {
        const listaDiv = document.getElementById('lista-canciones');
        if (listaDiv) {
          listaDiv.innerHTML = canciones
            .map(
              (cancion) => `
                    <article class="cancion">
                        <h3>${cancion.titulo}</h3>
                        <p class="artista">Artista: ${cancion.artista}</p>
                        <p class="anio">Año: ${cancion.anio}</p>
                        <p class="genero">Género: ${cancion.genero}</p>
                        <p class="duracion">Duración: ${cancion.duracion} segundos</p>
                    </article>`
            )
            .join('');
        }
      };

      mostrarCanciones(canciones);


}