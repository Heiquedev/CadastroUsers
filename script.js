document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("registroForm")) {
        document.getElementById("registroForm").addEventListener("submit", function (e) {
            e.preventDefault();
            let email = document.getElementById("registroEmail").value;
            let senha = document.getElementById("registroSenha").value;
            registro(email, senha);
        })
    }
}
    if (document.getElementById("loginForm")) {
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();
        let email = document.getElementById("loginEmail").value;
        let senha = document.getElementById("loginSenha").value;
        loginUsuario(email, senha);
    })
}

function registro(email, senha) {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(user => user.email === email)) {
        alert("Este email ja está cadastrado");
        return;
    }

    users.push({ email, senha });
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "login.html";
}
}