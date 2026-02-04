const pb = new PocketBase("https://trifid-kerry-nonunitable.ngrok-free.dev");

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const authData = await pb.collection("users").authWithPassword(email, password);
    alert("Login correcto");
    window.location.href = "home.html";
  } catch (error) {
    alert("Error en login");
  }
}

