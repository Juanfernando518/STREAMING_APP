const pb = new PocketBase("https://trifid-kerry-nonunitable.ngrok-free.dev?ngrok-skip-browser-warning=1");

document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("resultados");

  if (contenedor) {
    try {
      // 'Movies' con M mayúscula como en tu foto
      const movies = await pb.collection("Movies").getFullList(); 
      const series = await pb.collection("Series").getFullList();

      const todo = [...movies, ...series];

      todo.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        // Usamos 'video_file' que es donde está la imagen en tu DB
        const imagenURL = `https://trifid-kerry-nonunitable.ngrok-free.dev/api/files/${item.collectionName}/${item.id}/${item.video_file}?ngrok-skip-browser-warning=1`;

        card.innerHTML = `
          <img src="${imagenURL}">
          <h3>${item.name}</h3> `;

        card.addEventListener("click", () => {
          localStorage.setItem("movie", JSON.stringify(item));
          window.location.href = "detalle.html";
        });

        contenedor.appendChild(card);
      });
    } catch (error) {
      console.error("Error conectando con PocketBase:", error);
    }
  }
});