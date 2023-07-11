const usuarios = [
  { username: "usuario1", password: "contraseña1" },
  { username: "usuario2", password: "contraseña2" },
  { username: "usuario3", password: "contraseña3" }
];

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username.trim() === "" || password.trim() === "") {
    document.getElementById("errorMessage").textContent = "Por favor, ingresa un nombre de usuario y contraseña válidos.";
    document.getElementById("errorMessage").style.display = "block";
    return;
  }

  const usuarioValido = usuarios.find(user => user.username === username && user.password === password);

  if (usuarioValido) {
    window.location.href = "bienvenida.html?user=" + encodeURIComponent(username);
  } else {
    document.getElementById("errorMessage").textContent = "Nombre de usuario o contraseña incorrectos.";
    document.getElementById("errorMessage").style.display = "block";
  }
});

function buscar() {
  const searchTerm = document.getElementById("searchInput").value;
  if (searchTerm.trim() !== "") {
    const searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(searchTerm);
    window.location.href = searchUrl;
  }
}

document.getElementById("luckyButton").addEventListener("click", function() {
  const searchTerm = document.getElementById("searchInput").value;
  if (searchTerm.trim() !== "") {
    const luckyUrl = "https://www.google.com/search?btnI=1&q=" + encodeURIComponent(searchTerm);
    window.location.href = luckyUrl;
  }
});
