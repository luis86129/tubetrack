import './style.css';

const titulo = 'TubeTrack - TypeScript';
const descripcion = 'Explora y busca tus canciones favoritas';
let cantidad = 0;

const appDiv: HTMLElement = document.getElementById('app');

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
}