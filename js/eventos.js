// Botón Agregar al Carrito
      function respuesta (){
         alert(`Tu producto fue agregado al carrito`);
      } ;

const boton1 = document.getElementById("btn1");
boton1.addEventListener("click", respuesta);
// Problema 1. Solo se ejecuta en el primer botón y no en el resto

 
// Formulario de Conctacto

 const form = document.querySelector("#formulario");

 function validarFormulario(e){
    e.preventDefault();

    const {email, nombre, telefono, fecha, hora, cantidad, comentarios} = e.target 

    console.log(
      email.value,
      nombre.value,
      telefono.value,
      fecha.value,
      hora,value,
      cantidad.value,
      comentarios.value,
    );

    if (nombre.value.length === 0) alert("El nombre no es valido")
};

form.addEventListener("submit", validarFormulario);

// Problema 2: Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
// (Esto muestra en consola) Desconozco cual es el problema, hice muchas pruebas
