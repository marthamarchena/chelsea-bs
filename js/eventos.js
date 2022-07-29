 let boton1 = document.getElementById("btn1");
 boton1.addEventListener(`click`, agregar);

 function agregar() {
    console.log(`Tu producto fue agregado al carrito`);
 }


 let formulario = document.getElementById("formulario");
 formulario.addEventListener("submit", validarFormulario);

 function validarFormulario(e){
    e.preventDefault();
    alert("Gracias por contactarnos, pronto te estaremos respondiendo");
 }