let btnRegistrarse = document.getElementById("boton-form")
let emailLogin = document.getElementById("form-email")
let nombreLogin = document.getElementById("form-nombre")
let passLogin = document.getElementById("form-pass")
let recordar = document.getElementById("btn-recordar")


let usuariosDB = []

function guardarDatosForm(usuarioS, storage) {

    const usuario = {
        "name": usuarioS.nombre,
        "user": usuarioS.mail,
        "pass": usuarioS.contraseña
    }

    storage.setItem("usuario", JSON.stringify(usuario));
}

function recuperarDatosUs(storage) {
    return JSON.parse( storage.getItem("usuario") )
}

function validarUsuario (usuarsDB, user, pass){
    let encontrado = usuarsDB.find((usuario)=> user.mail == user)

    if (typeof encontrado === "undefined"){
        return false;}
    else{
        if (encontrado.pass != pass){
            return false;}
        else{
            return encontrado;
        }
    }
}


btnRegistrarse.addEventListener("click", (e)=>{
    e.preventDefault();
    if(!emailLogin.value || !passLogin.value){
        alert("campos requeridos")
    }else{
        let data = validarUsuario(usuariosDB, emailLogin, passLogin)

        if(!data){
            alert("usuario no encontrado")
        }else{
            if(recordar.checked){
                guardarDatosForm(data, localStorage)
            }else{
                guardarDatosForm(data, sessionStorage)
            }
        }
        alert("te logueaste con exito")
    }
})
