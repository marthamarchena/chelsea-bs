// import {productos} from "./productos.js"
// import { carritoindex } from "./carritoindex.js"

// const mostrarproductos = (producto) => {
//     const contenerdorProductos = document.getElementById("productocontenedor")

//     producto.forEach(producto => {
//         const div = document.createElement("div")
//         div.classList.add ("card")
//         div.innerHTML += `<div class="row justify-content-center">
//                             <div id="cards" class="card bg-black" style="width: 15rem;">
//                             <img src="${producto.img}" class="card-img-top" alt="...">
//                             <div class="card-body">
//                                 <h5 class="card-title">${producto.nombre}</h5>
//                                 <p>${producto.descripcion}</p>
//                                 <p><strong>$${producto.precio}</strong></p>
//                                 <button type="button" class="btn btn-light" id=boton${producto.id}>Agregar</button>
//                             </div>
//                             </div>
//                         `
//         contenerdorProductos.appendChild(div)

//         const boton = document.getElementById(`boton ${producto.id}`)

//         boton.addEventListener(`click`, ()=> {
//             carritoindex(producto.id);
//             alert (`Se agregó ${producto.nombre} a tu carrito de compras`)
//         })
//     })
// }

// mostrarproductos(productos)