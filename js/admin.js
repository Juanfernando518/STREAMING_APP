document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formPelicula");

    if(form){
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const nombre = document.getElementById("nombre").value;
            const imagenFile = document.getElementById("imagen").files[0];
            const videoFile = document.getElementById("video").files[0];

            const imagenURL = URL.createObjectURL(imagenFile);
            const videoURL = URL.createObjectURL(videoFile);

            const nuevaPelicula = {
                id: Date.now(),
                nombre: nombre,
                imagen: imagenURL,
                video: videoURL
            };

            // Guardar en memoria (simula BD)
            let peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];
            peliculas.push(nuevaPelicula);
            localStorage.setItem("peliculas", JSON.stringify(peliculas));

            alert("Película guardada correctamente");
            form.reset();
        });
    }
    // Guardar series
const formSerie = document.getElementById("formSerie");

if(formSerie){
    formSerie.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombreSerie").value;
        const temporadas = document.getElementById("temporadas").value;
        const imagenFile = document.getElementById("imagenSerie").files[0];
        const videoFile = document.getElementById("videoSerie").files[0];

        const imagenURL = URL.createObjectURL(imagenFile);
        const videoURL = URL.createObjectURL(videoFile);

        const nuevaSerie = {
            id: Date.now(),
            nombre: nombre,
            temporadas: temporadas,
            imagen: imagenURL,
            video: videoURL
        };

        let series = JSON.parse(localStorage.getItem("series")) || [];
        series.push(nuevaSerie);
        localStorage.setItem("series", JSON.stringify(series));

        alert("Serie guardada correctamente");
        formSerie.reset();
    });
}
// Guardar actores
const formActor = document.getElementById("formActor");

if(formActor){
    formActor.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombreActor").value;
        const pais = document.getElementById("paisActor").value;
        const fecha = document.getElementById("fechaNacimiento").value;
        const genero = document.getElementById("generoActor").value;
        const fotoFile = document.getElementById("fotoActor").files[0];

        const fotoURL = fotoFile ? URL.createObjectURL(fotoFile) : "";

        const nuevoActor = {
            id: Date.now(),
            nombre,
            pais,
            fecha,
            genero,
            foto: fotoURL
        };

        let actores = JSON.parse(localStorage.getItem("actores")) || [];
        actores.push(nuevoActor);
        localStorage.setItem("actores", JSON.stringify(actores));

        alert("Actor guardado correctamente");
        formActor.reset();
    });
}
// Guardar géneros
const formGenero = document.getElementById("formGenero");

if(formGenero){
    formGenero.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombreGenero").value;

        const nuevoGenero = {
            id: Date.now(),
            nombre
        };

        let generos = JSON.parse(localStorage.getItem("generos")) || [];
        generos.push(nuevoGenero);
        localStorage.setItem("generos", JSON.stringify(generos));

        alert("Género guardado correctamente");
        formGenero.reset();
    });
}
// Guardar temporadas
const formTemporada = document.getElementById("formTemporada");

if(formTemporada){
    formTemporada.addEventListener("submit", (e) => {
        e.preventDefault();

        const serie = document.getElementById("nombreSerieTemp").value;
        const numeroTemporada = document.getElementById("numeroTemporada").value;
        const numeroCapitulos = document.getElementById("numeroCapitulos").value;

        const nuevaTemporada = {
            id: Date.now(),
            serie,
            numeroTemporada,
            numeroCapitulos
        };

        let temporadas = JSON.parse(localStorage.getItem("temporadas")) || [];
        temporadas.push(nuevaTemporada);
        localStorage.setItem("temporadas", JSON.stringify(temporadas));

        alert("Temporada guardada correctamente");
        formTemporada.reset();
    });
}



});
