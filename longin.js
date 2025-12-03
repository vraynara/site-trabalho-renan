document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;
    const msg = document.getElementById("message");

    if (email === "" && senha === "") {
        msg.style.color = "green";
        msg.textContent = "Login realizado com sucesso!";
    } else {
        msg.style.color = "red";
        msg.textContent = "Email ou senha incorretos.";
    }
});
