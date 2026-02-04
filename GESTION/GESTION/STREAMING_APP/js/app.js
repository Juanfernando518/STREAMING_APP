const pb = new PocketBase("http://127.0.0.1:8090");

document.addEventListener("DOMContentLoaded", async () => {

  const contenedor = document.getElementById("resultados");

  // ======================
  // INDEX - mostrar peliculas y series
  // ======================
  if (contenedor) {
    const peliculas = await pb.collection("peliculas").getFullList();
    const series = await pb.collection("series").getFullList();

    const todo = [...peliculas, ...series];

    todo.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";

      const imagenURL = `http://127.0.0.1:8090/api/files/${item.collectionName}/${item.id}/${item.portada}`;

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

});
