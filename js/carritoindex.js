import {productos} from "./comidas.js";

let carritoDeCompras = []

export const carritoindex = (productoId) =>{

    const contenedorCarrito = document.getElementById("carrito-contenedor")

    const renderProductosCarrito = () => {

    let productos = productos.fnd (producto => producto.id == productoId)
    carritoDeCompras.push(producto)

    productos.cantidad = 1;

    let div = documente.createElement(`div`)

    div.classList.add(`productoCarrito`)
    div.innerHTML = `<div class="row justify-content-center">
                    <div id="cards" class="card bg-black" style="width: 15rem;">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p>${producto.descripcion}</p>
                        <p><strong>$${producto.precio}</strong></p>
                        <button type="button" class="btn btn-light" id=boton${producto.id}>Agregar</button>
                    </div>
                    </div>
    `

    contenedorCarrito.appendChild(div)
}
    renderProductosCarrito()
    }

    


