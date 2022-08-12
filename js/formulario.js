const formNombre = document.getElementById("form-nombre")
const formEmail = document.getElementById("form-email")
const formPass = document.getElementById("form-pass")

let formCuentaUsuario = []

const cuentaNomb = () =>{
    formNombre.addEventListener("input", () =>{
        formCuentaUsuario.push(formNombre)
    })
}



const guardarEnStorage = () =>{
    localStorage.setItem("nombre", "formNombre")

}
