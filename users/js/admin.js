
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Перевірка імя користувача та пароля
  if (username === "admin" && password === "adminpassword") {
    // Перенаправлення до адміністративної панелі
    window.location.href = "admin_panel/admin_panel.html";
  } else {
    alert("Incorrect username or password");
  }
}
