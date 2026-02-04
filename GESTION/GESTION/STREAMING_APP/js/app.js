// Conexión actualizada a la URL de ngrok de tu amigo
const pb = new PocketBase("https://trifid-kerry-nonunitable.ngrok-free.dev");

document.addEventListener("DOMContentLoaded", async () => {

  const contenedor = document.getElementById("resultados");

  // ======================
  // INDEX - mostrar peliculas y series
  // ======================
  if (contenedor) {
    try {
      const peliculas = await pb.collection("peliculas").getFullList();
      const series = await pb.collection("series").getFullList();

      const todo = [...peliculas, ...series];

      todo.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        // También actualizamos la URL de las imágenes para que usen ngrok
        const imagenURL = `https://trifid-kerry-nonunitable.ngrok-free.dev/api/files/${item.collectionName}/${item.id}/${item.portada}`;

        card.innerHTML = `
          <img src="${imagenURL}">
          <h3>${item.titulo}</h3>
        `;

        card.addEventListener("click", () => {
          localStorage.setItem("pelicula", JSON.stringify(item));
          window.location.href = "detalle.html";
        });

        contenedor.appendChild(card);
      });
    } catch (error) {
      console.error("Error conectando con PocketBase a través de ngrok:", error);
    }
  }

  // ======================
  // DETALLE
  // ======================
  const titulo = document.getElementById("titulo");
  const video = document.getElementById("video");

  if (titulo && video) {
    const peli = JSON.parse(localStorage.getItem("pelicula"));

    if (peli) {
      titulo.textContent = peli.titulo;
      video.src = peli.video_url;
    }
  }
});;

