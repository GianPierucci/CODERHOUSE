let carrito = []


const fetchData = async () => {
    try {
        const resp = await fetch("../js/data.json")
        const data = await resp.json();

        const divProds = document.getElementById("secc-prods")
        data.forEach(producto => {
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
            boton.addEventListener("click", () => {
                carritoIndex(producto.id)
                Toastify({
                    text: "El producto se agregó a tu carro de compras",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    style: {
                        background: "#dc3545",
                    },
                }).showToast();
            })
        })
        const carritoIndex = (productoId) => {
            const cajaCarrito = document.getElementById("div-carrito");

            const agregarAlCarr = () => {
                const producto = data.find(producto => producto.id === productoId);
                carrito.push(producto)
                const div = document.createElement("div")
                div.classList.add("productosEnCarr")
                div.innerHTML = `<p class="cantidadProds">${producto.cantidad}</p>
                        <p>${producto.producto}
                            ${producto.tipo}
                            ${producto.marca}</p>
                        <p class="precioProd">$${producto.precio}</p>
                        <button type="button" class="boton-sacar"><i class="fa-regular fa-trash-can"></i></button>
                        `
                cajaCarrito.appendChild(div)
                div.querySelector(".boton-sacar").addEventListener("click", eliminarProdCarr)
            }
            agregarAlCarr();
            const precioTotal = document.querySelector(".precioTotalProds")
            precioTotal.innerHTML = carrito.reduce((acc, producto) => acc + producto.precio, 0)
        }


        function eliminarProdCarr(e) {
            const btnClicked = e.target;

            Swal.fire({
                icon: "warning",
                title: 'Eliminar producto',
                text: "¿Estas seguro de eliminar el producto?",
                showCancelButton: true,
                confirmButtonText: 'Eliminar',
                cancelButtonText: "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    btnClicked.closest(".productosEnCarr").remove()
                    Toastify({
                        text: "Eliminaste el producto",
                        duration: 2500,
                        gravity: "bottom",
                        position: "right",
                        style: {
                            background: "#dc3545",
                        },
                    }).showToast();
                }
            })
        }
    } catch (error) {
        console.log(error)
    }
}
fetchData()











