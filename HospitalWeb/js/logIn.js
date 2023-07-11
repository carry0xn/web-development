document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var loginMessage = document.getElementById("loginMessage");
    var welcomeMessage = document.getElementById("welcomeMessage");
  
    if (username === "mirtita" && password === "123") {
      loginMessage.textContent = "Inicio de sesión exitoso como paciente";
      window.location.href = "paciente.html?username=" + encodeURIComponent(username);
      welcomeMessage.textContent = "¡Bienvenido, " + username + "!";

    } else if (username === "house" && password === "123") {
      loginMessage.textContent = "Inicio de sesión exitoso como doctor";
      window.location.href = "doctor.html?username=" + encodeURIComponent(username);
      welcomeMessage.textContent = "¡Bienvenido, " + username + "!";

    } else {
      loginMessage.textContent = "Usuario incorrecto";
    }
    
  });
  