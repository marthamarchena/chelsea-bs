const cards = document.getElementById(`cards`)
const items = document.getElementById (`items`)
const footer = document.getElementById(`footer`)
const templateCard = document.getElementById(`template-card`).content
const templateFooter = document.getElementById(`template-footer`).content
const templateCarrito = document.getElementById(`template-carrito`).content
const fragment = document.createDocumentFragment()
let carrito = {}

document.addEventListener(`DOMContentLoaded`, () => {
    fetchData()
    if (localStorage.getItem(`carrito`)){
        carrito = JSON.parse(localStorage.getItem(`carrito`))
        pintarCarrito()
    }
})

cards.addEventListener(`click`, e =>{
    addCarrito(e)
})

items.addEventListener(`click`, e => {
    btnAccion(e)
})

const fetchData = async () => {
    try{
        const res = await fetch(`comidas.json`)
        const data = await res.json()
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
    cards.appendChild(fragment)
}

const addCarrito = e => {
    // console.log(e.target)
    // console.log(e.target.classList.contains(`btn-light`));
    if (e.target.classList.contains(`btn-light`)) {
        setCarrito(e.target.parentElement); 
    }
    e.stopPropagation()
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
    pintarCarrito()
}

const pintarCarrito = () => {
    // console.log(carrito);
    items.innerHTML = ``
    object.values(carrito).forEach(producto =>{
        templateCarrito.querySelector(`th`).textContent = producto.id
        templateCarrito.querySelectorAll(`td`)[0].textContent = producto.nombre
        templateCarrito.querySelectorAll(`td`)[1].textContent = producto.cantidad
        templateCarrito.querySelector(`.btn-info`).dataset.id = producto.id
        templateCarrito.querySelector(`.btn-danger`).dataset.id = producto.id
        templateCarrito.querySelector(`span`).textContent = producto.cantidad * producto.precio

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    } )
    items.appendChild(fragment)

    pintarFooter()

    localStorage.setItem(`carrito`, JSON.stringify(carrito))
}

const pintarFooter = () =>{
    footer.innerHTML = ``
    if (object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" class="text-white" colspan="5">Carrito vacío - comience a comprar!</th>
        `
        return
    }

    const nCantidad = object.values(carrito).reduce((acc, {cantidad})=> acc + cantidad, 0)
    const nPrecio = object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad + precio, 0)

    templateFooter.querySelectorAll(`td`)[0].textContent = nCantidad
    templateFooter.querySelectorAll(`span`).textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const btnVaciar = document.getElementById(`vaciar-carrito`)
    btnVaciar.addEventListener(`click`, () => {
        carrito = {}
        pintarCarrito()
    })
}

const btnAccion = e => {
    // console.log(e.target);
    // Acción de Aumentar
    if (e.target.classList.contains(`btn-info`)){
        // console.log(carrito[e.target.dataset.id]);
        // carrito[e.target.dataset.id] 
        const producto = carrito[e.target.dataset.id] 
        producto.cantidad++
        carrito[e.target.dataset.id] = {...producto}
        pintarCarrito()
    }

    if (e.target.classList.contains(`btn-danger`)){
        const producto = carrito[e.target.dataset.id] 
        producto.cantidad--
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        }
        pintarCarrito()
    }


    e.stopPropagation()
}