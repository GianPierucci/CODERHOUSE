const formNombre = document.getElementById("form-nombre")
const formEmail = document.getElementById("form-email")
const formPass = document.getElementById("form-pass")
const botonLogin = document.getElementById("formulario-btn")

botonLogin.addEventListener("click", ()=>{
    localStorage.setItem("nombreUsuario", formNombre.value);
})