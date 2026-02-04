// Conexión con el parámetro para saltar la advertencia de ngrok
const pb = new PocketBase("https://trifid-kerry-nonunitable.ngrok-free.dev");

document.addEventListener("DOMContentLoaded", async () => {

  const contenedor = document.getElementById("resultados");

  // ======================
  // INDEX - mostrar movies y series
  // ======================
  if (contenedor) {
    try {
      const movies = await pb.collection("movies").getFullList(); 
      const series = await pb.collection("series").getFullList();

      const todo = [...movies, ...series];

      todo.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        const imagenURL = `https://trifid-kerry-nonunitable.ngrok-free.dev/api/files/${item.collectionName}/${item.id}/${item.portada}?ngrok-skip-browser-warning=1`;

        card.innerHTML = `
          <img src="${imagenURL}">
          <h3>${item.titulo}</h3>
        `;

        card.addEventListener("click", () => {
          // Guardamos como "movie" para mantener la consistencia
          localStorage.setItem("movie", JSON.stringify(item));
          window.location.href = "detalle.html";
        });

        contenedor.appendChild(card);
      });
    } catch (error) {
      console.error("Error conectando con PocketBase:", error);
    }
  }

  // ======================
  // DETALLE
  // ======================
  const titulo = document.getElementById("titulo");
  const video = document.getElementById("video");

  if (titulo && video) {
    // Cambiado de "pelicula" a "movie" para que coincida con lo que guardamos arriba
const pb = new PocketBase("https://trifid-kerry-nonunitable.ngrok-free.dev");
    if (movieData) {
      titulo.textContent = movieData.titulo;
      video.src = movieData.video_url;
    }
  }
});


