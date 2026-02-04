// 1. Conexión con el salto de advertencia de ngrok incluido
const pb = new PocketBase("https://trifid-kerry-nonunitable.ngrok-free.dev");

// Agregamos el header globalmente para todas las peticiones de PocketBase
pb.beforeSend = function (url, options) {
    options.headers = Object.assign({}, options.headers, {
        'ngrok-skip-browser-warning': 'true',
    });
    return { url, options };
};

document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("resultados");

  if (contenedor) {
    try {
      // 2. Nombres de colecciones con MAYÚSCULA como en tu foto
      const movies = await pb.collection("Movies").getFullList(); 
      const series = await pb.collection("Series").getFullList();

      const todo = [...movies, ...series];

      // Limpiamos el contenedor por si hay datos viejos
      contenedor.innerHTML = "";

      todo.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        // 3. Usamos 'video_file' que es donde está la imagen en tu base de datos
        const imagenURL = `${pb.baseUrl}/api/files/${item.collectionName}/${item.id}/${item.video_file}`;

        card.innerHTML = `
          <img src="${imagenURL}" alt="${item.name}">
          <h3>${item.name}</h3> `;

        card.addEventListener("click", () => {
          // Guardamos como "movie" para que el detalle lo encuentre
          localStorage.setItem("movie", JSON.stringify(item));
          window.location.href = "detalle.html";
        });

        contenedor.appendChild(card);
      });
    } catch (error) {
      console.error("Error cargando datos de PocketBase:", error);
      contenedor.innerHTML = "<p>Error al conectar con la base de datos. Verifica que ngrok esté activo.</p>";
    }
  }
});