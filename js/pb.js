// Inicializar PocketBase
const pb = new PocketBase("https://trifid-kerry-nonunitable.ngrok-free.dev");

// Función ejemplo: obtener todas las películas
async function cargarPeliculasPB(){
    try{
        const peliculas = await pb.collection('peliculas').getFullList();
        return peliculas;
    } catch(err){
        console.error("Error al cargar películas:", err);
    }

}
