function login() {
    let contraGuardada = prompt("Ingresa tu contraseña guardada")
    while (contraGuardada != true) {
        if (contraGuardada == contraseñaU) {
            alert("Ingresaste exitosamente, ya puedes comprar");
            break;
        }
        else {
            contraGuardada = prompt("Contraseña invalida, vuelve a intentarlo")
        }
    }
}

let inputBuscador = document.querySelector("#buscarProd")


const stockProds = [
    {id:1, producto: "cuchillo", tipo: "hogar", marca: "mundial", largo: "20cm", precio: 1500 },
    {id:2, producto: "cuchillo", tipo: "cocina", marca: "mundial", largo: "25cm", precio: 2000 },
    {id:3, producto: "cuchillo", tipo: "cocina", marca: "mundial", largo: "30cm", precio: 2500 },
    {id:4, producto: "cuchillo", tipo: "cocina", marca: "mundial", largo: "35cm", precio: 3000 },
    {id:5, producto: "cuchillo", tipo: "cocina", marca: "mundial", largo: "40cm", precio: 3500 },
    {id:6, producto: "tijera", tipo: "hogar", marca: "mundial", largo: "15cm", precio: 1800 },
    {id:7, producto: "chaira", tipo: "hogar", marca: "mundial", largo: "20cm", precio: 1500 },]


let carrito = []
const agregarProd = (prodId) => {
    const item = stockProds.find((prod) => prod.id === prodId)
    carrito.push(item); 
} ;

const mostrarPrecio = stockProds.map(producto => producto.precio)

inputBuscador.addEventListener("click", () =>{
    let resultadoBusq = inputBuscador.value;
    stockProds.filter((producto)=>producto.producto==resultadoBusq)
});


let cuenta = prompt("Deseas crear una cuenta? \n1. Crear una cuenta \n2. Proseguir sin una cuenta (No podras comprar)")
let ingresar = false;

let nombreU = prompt("Ingresa tu nombre")
let apellidoU = prompt("Ingresa tu apellido")
alert("Bienvenido " + nombreU + " " + apellidoU)
let contraseñaU = prompt("Crea una contraseña")
console.log("tu contraseña es " + contraseñaU);

function contraseñaUs(){
    let contraseñaUs = prompt("Crea una contraseña")
    return
}

switch (cuenta) {
    case "1":
        
        ingresar = true
        break;

    case "2":
        alert("Elegiste seguir sin una cuenta propia")
        break;
    default:
        alert("Opcion invalida")
        break
}



let tijera = 1800
let cuchillo = 3000
let chaira = 1500

const calculcarInts = x => x * 0.15
const sumar = (a, b) => a + b
const restar = (a, b) => a - b
const dividir = (a, b) => a / b




if (ingresar) {
    let opciones = prompt("1. Agregar un producto al carrito de compras \n2. Consultar precios \n3. Navegar en la pagina")
    while (opciones != "3") {
        switch (opciones) {
            case "1":
                login();
                let elegirProd = prompt("Que producto elegis comprar? \n1. Tijera \n2. Cuchillo \n3. Chaira \nX. Volver")
                while (elegirProd != "X" && elegirProd != "x") {
                    switch (elegirProd) {
                        case "1":               //tijera
                            let comprar = prompt("Deseas usar: \n1. Tarjeta de credito \n2. Tarjeta de debito \nX. Volver")
                            switch (comprar) {
                                case "1":
                                    let cuotasCredito = prompt("Aceptamos el pago hasta 3 cuotas con una suma del 15% de interes. En cuantas lo queres hacer: \n1 \n2 \n3 \nX.Volver")
                                    switch (cuotasCredito) {
                                        case "1":
                                            let totalcuota1 = dividir(sumar(tijera, calculcarInts(tijera)), 1)
                                            alert("La tijera te queda en un valor total de: " + totalcuota1 + " por cuota.")
                                            let saldo = parseFloat(prompt("Ingresa tu saldo"))
                                            if (saldo > totalcuota1) {
                                                agregarProd(6);
                                                console.log(carrito);
                                                alert("La tijera se agrego a tu carrito de compras.")
                                                break;
                                            }
                                            else {
                                                alert("Dinero insuficiente")
                                                break;
                                            }
                                        case "2":
                                            let totalcuota2 = dividir(sumar(tijera, calculcarInts(tijera)), 2)
                                            alert("La tijera te queda en un valor total de: " + totalcuota2 + " por cuota.")
                                            let saldo2 = parseFloat(prompt("Ingresa tu saldo"))
                                            if (saldo2 > totalcuota2) {
                                                agregarProd(6);
                                                console.log(carrito);
                                                alert("La tijera se agrego a tu carrito de compras.")
                                                break;
                                            }
                                            else {
                                                alert("Dinero insuficiente")
                                                break;
                                            }
                                        case "3":
                                            let totalcuota3 = dividir(sumar(tijera, calculcarInts(tijera)), 3)
                                            alert("La tijera te queda en un valor total de: " + totalcuota3 + " por cuota.")
                                            let saldo3 = parseFloat(prompt("Ingresa tu saldo"))
                                            if (saldo3 > totalcuota3) {
                                                agregarProd(6);
                                                console.log(carrito);
                                                alert("La tijera se agrego a tu carrito de compras.")
                                                break;
                                            }
                                            else {
                                                alert("Dinero insuficiente")
                                                break;
                                            }
                                    }
                                    break;
                                case "2":
                                    let saldo = parseFloat(prompt("Ingresa tu saldo"))
                                    if (saldo > tijera) {
                                        agregarProd(6);
                                                console.log(carrito);
                                                alert("La tijera se agrego a tu carrito de compras.")
                                        break;
                                    }
                                    else {
                                        alert("Dinero insuficiente")
                                        break;
                                    }
                            }
                            break;

                        case "2":               //cuchillo
                            let comprar2 = prompt("Deseas usar: \n1. Tarjeta de credito \n2. Tarjeta de debito \nX. Volver")
                            switch (comprar2) {
                                case "1":
                                    let cuotasCredito = prompt("Aceptamos el pago hasta 3 cuotas con una suma del 15% de interes. En cuantas lo queres hacer: \n1 \n2 \n3 \nX.Volver")
                                    switch (cuotasCredito) {
                                        case "1":
                                            let totalcuota1 = dividir(sumar(cuchillo, calculcarInts(cuchillo)), 1)
                                            alert("El cuchillo te queda en un valor total de: " + totalcuota1 + " por cuota.")
                                            let saldo = parseFloat(prompt("Ingresa tu saldo"))
                                            if (saldo > totalcuota1) {
                                                alert("Compra realizada con exito.")
                                                break;
                                            }
                                            else {
                                                alert("Dinero insuficiente")
                                                break;
                                            }
                                        case "2":
                                            let totalcuota2 = dividir(sumar(cuchillo, calculcarInts(cuchillo)), 2)
                                            alert("El cuchillo te queda en un valor total de: " + totalcuota2 + " por cuota.")
                                            let saldo2 = parseFloat(prompt("Ingresa tu saldo"))
                                            if (saldo2 > totalcuota2) {
                                                alert("Compra realizada con exito.")
                                                break;
                                            }
                                            else {
                                                alert("Dinero insuficiente")
                                                break;
                                            }
                                        case "3":
                                            let totalcuota3 = dividir(sumar(cuchillo, calculcarInts(cuchillo)), 3)
                                            alert("El cuchillo te queda en un valor total de: " + totalcuota3 + " por cuota.")
                                            let saldo3 = parseFloat(prompt("Ingresa tu saldo"))
                                            if (saldo3 > totalcuota3) {
                                                alert("Compra realizada con exito.")
                                                break;
                                            }
                                            else {
                                                alert("Dinero insuficiente")
                                                break;
                                            }
                                    }
                                    break;
                                case "2":
                                    let saldo = parseFloat(prompt("Ingresa tu saldo"))
                                    if (saldo > cuchillo) {
                                        agregarProd(1);
                                        console.log(carrito);
                                        alert("La tijera se agrego a tu carrito de compras.")
                                        break;
                                    }
                                    else {
                                        alert("Dinero insuficiente")
                                        break;
                                    }
                            }
                            break;

                        case "3":           //chaira
                            let comprar3 = prompt("Deseas usar: \n1. Tarjeta de credito \n2. Tarjeta de debito \nX. Volver")
                            switch (comprar3) {
                                case "1":
                                    let cuotasCredito = prompt("Aceptamos el pago hasta 3 cuotas con una suma del 15% de interes. En cuantas lo queres hacer: \n1 \n2 \n3 \nX.Volver")
                                    switch (cuotasCredito) {
                                        case "1":
                                            let totalcuota1 = dividir(sumar(chaira, calculcarInts(chaira)), 1)
                                            alert("La chaira te queda en un valor total de: " + totalcuota1 + " por cuota.")
                                            let saldo = parseFloat(prompt("Ingresa tu saldo"))
                                            if (saldo > totalcuota1) {
                                                alert("Compra realizada con exito.")
                                                break;
                                            }
                                            else {
                                                alert("Dinero insuficiente")
                                                break;
                                            }
                                        case "2":
                                            let totalcuota2 = dividir(sumar(chaira, calculcarInts(chaira)), 2)
                                            alert("La chaira te queda en un valor total de: " + totalcuota2 + " por cuota.")
                                            let saldo2 = parseFloat(prompt("Ingresa tu saldo"))
                                            if (saldo2 > totalcuota2) {
                                                alert("Compra realizada con exito.")
                                                break;
                                            }
                                            else {
                                                alert("Dinero insuficiente")
                                                break;
                                            }
                                        case "3":
                                            let totalcuota3 = dividir(sumar(chaira, calculcarInts(chaira)), 3)
                                            alert("La chaira te queda en un valor total de: " + totalcuota3 + " por cuota.")
                                            let saldo3 = parseFloat(prompt("Ingresa tu saldo"))
                                            if (saldo3 > totalcuota3) {
                                                alert("Compra realizada con exito.")
                                                break;
                                            }
                                            else {
                                                alert("Dinero insuficiente")
                                                break;
                                            }
                                    }
                                case "2":
                                    let saldo = parseFloat(prompt("Ingresa tu saldo"))
                                    if (saldo > chaira) {
                                        alert("Compra realizada con exito.")
                                        break;
                                    }
                                    else {
                                        alert("Dinero insuficiente")
                                        break;
                                    }
                            }
                            break;
                    }
                    elegirProd = prompt("Que producto elegis comprar? \n1. Tijera \n2. Cuchillo \n3. Chaira \nX. Volver")
                }

            case "2":            //consulta
                let productos = prompt("1. Tijera \n2. Cuchillo \n3. Chaira \n4. Volver")
                while(productos != "4"){ 
                switch (productos) {

                    case "1":
                        alert("La tijera tiene un valor de " + tijera)
                        break;
                    case "2":
                        alert(mostrarPrecio)
                        break;
                    case "3":
                        alert("La chaira tiene un valor de " + chaira)
                        break;
                    }
                break;
                }
                

        }
        opciones = prompt("1. Agregar un producto al carrito de compras \n2. Consultar precios \n3. Navegar en la pagina")
    }
}

