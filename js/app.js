document.addEventListener("DOMContentLoaded", () => {
    const lista = document.getElementById("listaPeliculas");

    if(lista){
        peliculas.forEach(peli => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="${peli.imagen}" alt="">
                <h3>${peli.nombre}</h3>
            `;

            card.addEventListener("click", () => {
                localStorage.setItem("pelicula", JSON.stringify(peli));
                window.location.href = "detalle.html";
            });

            lista.appendChild(card);
        });
    }
    // Mostrar detalle
document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.getElementById("titulo");
    const video = document.getElementById("video");

    if(titulo && video){
// Cargar películas guardadas por el admin
let peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];

        if(peli){
            titulo.textContent = peli.nombre;
            video.src = peli.video;
        }
    }
});
// Mostrar series
document.addEventListener("DOMContentLoaded", () => {
    const listaSeries = document.getElementById("listaSeries");

    if(listaSeries){
        const series = JSON.parse(localStorage.getItem("series")) || [];

        series.forEach(serie => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="${serie.imagen}">
                <h3>${serie.nombre}</h3>
            `;

            card.addEventListener("click", () => {
                localStorage.setItem("pelicula", JSON.stringify(serie));
                window.location.href = "detalle.html";
            });

            listaSeries.appendChild(card);
        });
    }
});


});
