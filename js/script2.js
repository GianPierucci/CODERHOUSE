

const stockProds = [
    { id: 1, img: "../imgs/cuchillo1.jpg", cantidad: 0, producto: "Cuchillo", tipo: "Cocina", marca: "Mundial", largo: "25cm", precio: 2000 },
    { id: 2, img: "../imgs/cuchillo1.jpg", cantidad: 0, producto: "Cuchillo", tipo: "Cocina", marca: "Mundial", largo: "30cm", precio: 2500 },
    { id: 3, img: "../imgs/cuchillo1.jpg", cantidad: 0, producto: "Cuchillo", tipo: "Cocina", marca: "Mundial", largo: "35cm", precio: 3000 },
    { id: 4, img: "../imgs/cuchillo1.jpg", cantidad: 0, producto: "Cuchillo", tipo: "Cocina", marca: "Mundial", largo: "40cm", precio: 3500 },
    { id: 5, img: "../imgs/tijera-mdentado.jpg", cantidad: 0, producto: "Tijera", tipo: "Hogar", marca: "Mundial", largo: "15cm", precio: 1500 },
    { id: 6, img: "../imgs/tijera-mdentado.jpg", cantidad: 0, producto: "Tijera", tipo: "Hogar", marca: "Mundial", largo: "15cm", precio: 1800 },
    { id: 7, img: "../imgs/tijera-mdentado.jpg", cantidad: 0, producto: "Tijera", tipo: "Hogar", marca: "Mundial", largo: "15cm", precio: 1500 },
    { id: 8, img: "../imgs/tijera-mdentado.jpg", cantidad: 0, producto: "Tijera", tipo: "Hogar", marca: "Mundial", largo: "15cm", precio: 1800 },
    { id: 9, img: "../imgs/chaira-mundial.jpg", cantidad: 0, producto: "Chaira", tipo: "Hogar", marca: "Mundial", largo: "20cm", precio: 1500 },
    { id: 10, img: "../imgs/chaira-mundial.jpg", cantidad: 0, producto: "Chaira", tipo: "Hogar", marca: "Mundial", largo: "20cm", precio: 1500 },
    { id: 11, img: "../imgs/chaira-mundial.jpg", cantidad: 0, producto: "Chaira", tipo: "Hogar", marca: "Mundial", largo: "20cm", precio: 1500 },
    { id: 12, img: "../imgs/chaira-mundial.jpg", cantidad: 0, producto: "Chaira", tipo: "Hogar", marca: "Mundial", largo: "20cm", precio: 1500 },
]


const mostrarProd = (productos) => {
    const divProds = document.getElementById("secc-prods")
    productos.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("caja-prods")
        div.innerHTML = `<img class="img-cuchillo" src="${producto.img}"
                        <div class="info-prods">
                            <h5 class="nomb-prod">${producto.producto}
                                ${producto.tipo}
                                ${producto.marca}</h5>
                            <p class="">${producto.largo}</p>
                            <div class="estrellas">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                            <div id="div-preciocomp">
                                <h5>$${producto.precio}</h5>
                                <button type="button" id="boton${producto.id}" class="btn btn-danger">Comprar</button>
                            </div>
                        </div>`
        divProds.appendChild(div);
        const boton = document.getElementById(`boton${producto.id}`)
        boton.addEventListener("click", () =>{
            carritoIndex(producto.id)
            /* alert(`"Se agrego ${producto.producto} al carrito de compras."`) */
        } )
    })

    
}
mostrarProd(stockProds)

let carrito = []

const carritoIndex = (productoId) =>{
    const cajaCarrito = document.getElementById("div-carrito");
    
    const agregarAlCarr = () =>{
        let producto = stockProds.find(producto => producto.id == productoId);
        carrito.push(producto)
        
        let div = document.createElement("div")
        div.classList.add("productosEnCarr")
        div.innerHTML= `<p class="prodsCrt-style">${producto.cantidad}</p>
                        <p class="prodsCrt-style">${producto.producto}
                            ${producto.tipo}
                            ${producto.marca}</p>
                        <p class="prodsCrt-style">${producto.precio}</p>
                        <button type="button" class="boton-sacar"><i class="fa-regular fa-trash-can"></i></button>
                        `
        cajaCarrito.appendChild(div)
    }
    agregarAlCarr()
}


