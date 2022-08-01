const items = document.getElementById(`items`)
const templateCard = document.getElementById(`template-card`).content
const fragment = document.createDocumentFragment()
let carrito = {}

document.addEventListener(`DOMContentLoaded`, () => {
    fetchData()
})
items.addEventListener(`click`, e =>{
    addCarrito(e)
} )

const fetchData = async () => {
    try{
        const res = await fetch(`comidas.json`)
        const data = await res.json()
        // console.log(data)
        pintarCards(data)
    } catch (error){
        console.log(error)
    }
}

const pintarCards = data => {
    data.forEach (producto => {
        templateCard.querySelector(`h5`).textContent = producto.nombre
        templateCard.querySelector(`h6`).textContent = producto.descripcion
        templateCard.querySelector(`p`).textContent = producto.precio
        // templateCard.querySelector(`img`).setAttibute("src", producto.img)
        templateCard.querySelector(`.btn-light`).dataset.id = producto.id

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
}

const addCarrito = e => {
    // console.log(e.target)
    // console.log(e.target.classList.contains(`btn-light`));
    if (e.target.classList.contains(`btn-light`)) {
        setCarrito(e.target.parentElement); 
    }
    e.stopPropagation ()
}

const setCarrito = objeto => {
    // console.log(objeto);
    const producto = {
        id: objeto.querySelector(`.btn-light`).dataset.id,
        nombre: objeto.querySelector(`h5`).textContent,
        precio: objeto.querySelector(`p`).textContent,
        cantidad: 1
    }

    if (carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = {...producto}

    console.log(producto);
}