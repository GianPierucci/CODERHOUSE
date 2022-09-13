let btnRegistrarse = document.getElementById("boton-form")
let recordar = document.getElementById("btn-recordar")


function guardarDatosForm(storage) {

    let name = document.getElementById("form-nombre").value;
    let user = document.getElementById("form-email").value;
    let pass = document.getElementById("form-pass").value;

    const usuario = {
        "nombre": name,
        "user": user,
        "pass": pass
    }

    if(storage === "localStorage"){
        localStorage.setItem("user", JSON.stringify(usuario))
    }
    if(storage === "sessionStorage"){
        sessionStorage.setItem("user", JSON.stringify(usuario))
    }
}


btnRegistrarse.addEventListener("click",(e)=>{
    e.preventDefault();
    if(recordar.checked){
        guardarDatosForm("localStorage")
        
    }
    else{
        guardarDatosForm("sessionStorage")
    }
})





