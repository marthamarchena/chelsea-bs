// MercadoPago
const productos = [
    {id: 1, img: "./imagenes/arepa3.jpg", nombre: "Arepa Pelua", descripcion: "Carne en hebras y queso Tybo rallado", precio: 420},
    {id: 2, img: "./imagenes/arepa.jpg", nombre: "Arepa Reina", descripcion: "Pollo en hebras, palta y salsa tartara", precio: 560},
    {id: 3, img: "./imagenes/arepa3.jpg", nombre: "Arepa Rumbera", descripcion: "Cerdo y queso venezolano a la plancha", precio: 560},
    {id: 4, img: "./imagenes/arepa2.jpg", nombre: "Arepa Domino", descripcion: "Carne en hebras y queso Tybo rallado", precio: 420},
    {id: 5, img: "./imagenes/arepa.jpg", nombre: "Arepa Catira", descripcion: "Pollo en hebras con queso Tybo rallado", precio: 500},
    {id: 6, img: "./imagenes/arepa3.jpg", nombre: "Arepa Burguer", descripcion: "Carne de Hamburguesa (200gr), lechuga, tomate y cebolla con papas fritas", precio: 690},
    {id: 7, img: "./imagenes/burger.jpg", nombre: "Hamburguesa Extrema Chelsea", descripcion: "Carne de Hamburguesa (400gr), panceta, queso, huevo frito, lechuga, tomate, cebolla, mayonesa, ketchup y savora", precio: 1200},
    {id: 8, img: "./imagenes/burger1.jpg", nombre: "Hamburguesa Clásica", descripcion: "Carne de Hamburguesa (200gr), lechuga, tomate, cebolla, mayonesa, ketchup y savor", precio: 650},
    {id: 9, img: "./imagenes/burger1.jpg", nombre: "Hamburguesa Gringa", descripcion: "Carne de Hamburguesa (200gr), doble cheddar, panceta, barbacoa, lechuga, tomate y cebolla", precio: 810},
    {id: 10, img: "./imagenes/burger1.jpg", nombre: "Hamburguesa Porteña", descripcion: "Carne de Hamburguesa (200gr), queso tybo, chori, chimi, rucula y tomate", precio: 690},
    {id: 11, img: "./imagenes/burger1.jpg", nombre: "Hamburguesa Gringa", descripcion: "Carne de Hamburguesa (200gr), queso tybo, chori, chimi, rucula y tomate", precio: 690},
    {id: 12, img: "./imagenes/burger1.jpg", nombre: "Hamburguesa Tana", descripcion: "Carne de Hamburguesa (200gr), doble cheddar, panceta, barbacoa, lechuga, tomate y cebolla", precio: 730},
    {id: 13, img: "./imagenes/sandwichs.jpg", nombre: "Pepito Mixto Gratinado", descripcion: "Sandwich gratinado con pollo y carne cortada a cuchillo con lechuga, tomate, cebolla y aderezos", precio: 880},
    {id: 14, img: "./imagenes/shawarma.jpg", nombre: "Falafel al Plato", descripcion: "Croquetas de falafel, tabule, hummus y pan pita", precio: 500},
    {id: 15, img: "./imagenes/shawarma.jpg", nombre: "Shawarma al Plato", descripcion: "Carne con aderezo arabe, tabule, hummus y pan pita", precio: 550},
    {id: 16, img: "./imagenes/ensalada.jpg", nombre: "Ensalada Cesar de Pollo", descripcion: "Ensalada con suprema de pollo, croutons, queso sardo, lechuga y aderezo cesar", precio: 550}
]

const botonMp = document.getElementById("botonPagar")
botonMp.addEventListener(`click`, e => pagar ())

const pagar = async () => {

    const productosToMap = productos.map (Element => {
        let nuevoElemento = {
            title: Element.nombre,
            description: Element.descripcion,
            picture_url: Element.img,
            category_id: Element.id,
            quantity: Element.cantidad,
            currency_id: "AR$",
            unit_price: Element.precio,
        }
        return nuevoElemento
    } )

    let response = await fetch("https://api.mercadopago.com/checkout/preferences", {
        method: "POST",
        headers: {
            Authorization: "Bearer TEST-6969477653720927-082623-9666c346969831e796e3bf954b9aad50-237752168"
        },
        body: JSON.stringify({
            items: productosToMap
        })
    })

    let data1 = await response.json()

    // window.open(data1.init_point, "_black")

    console.log(data1);

}


// curl -X POST \
//       'https://api.mercadopago.com/checkout/preferences' \
//       -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
//       -H 'Content-Type: application/json' \ 
//       -d '{
//   "items": [
//     {
//       "title": "Dummy Title",
//       "description": "Dummy description",
//       "picture_url": "http://www.myapp.com/myimage.jpg",
//       "category_id": "car_electronics",
//       "quantity": 1,
//       "currency_id": "U$",
//       "unit_price": 10
//     }
//   ],
//   "payer": {
//     "phone": {},
//     "identification": {},
//     "address": {}
//   },
//   "payment_methods": {
//     "excluded_payment_methods": [
//       {}
//     ],
//     "excluded_payment_types": [
//       {}
//     ]
//   },
//   "shipments": {
//     "free_methods": [
//       {}
//     ],
//     "receiver_address": {}
//   },
//   "back_urls": {},
//   "differential_pricing": {},
//   "tracks": [
//     {
//       "type": "google_ad"
//     }
//   ],
//   "metadata": {}
// }'