// Inicializar PocketBase
const pb = new PocketBase('http://127.0.0.1:8090');

// Función ejemplo: obtener todas las películas
async function cargarPeliculasPB(){
    try{
        const peliculas = await pb.collection('peliculas').getFullList();
        return peliculas;
    } catch(err){
        console.error("Error al cargar películas:", err);
    }
}