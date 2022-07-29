// const modalContenedor = document.querySelector (`.modal-container`)
// const abrirCarrito = document.getElementById ("open")
// const cerrarCarrito = document.getElementById ("cerrar")
// const modalCarrito = document.querySelector(`.modal-carrito`)

// abrirCarrito.addEventListener( `click`, ()=>{
//     modalContenedor.classList.toggle (`modal-active`);
// })

// cerrarCarrito.addEventListener( `click`, ()=>{
//     modalContenedor.classList.remove (`modal-active`);
// })

// modalContenedor.addEventListener(`click`,()=>{
//     cerrarCarrito.click();
// })

// modalCarrito.addEventListener(`click`, (e)=> {
//     e.stopPropagation();
// })

  let boton1 = document.getElementById (`bnt1`);

  boton1.addEventListener(`click`, ()=> {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Agregado a tu pedido'
      })    
  })


  const swalWithBootstrapButtons = Swal.mixin({

    customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
      },
    
    buttonsStyling: false
    
    })
    
    swalWithBootstrapButtons.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    
    reverseButtons: true
    
    }).then((result) => {
    
    if (result.isConfirmed) {
    
        swalWithBootstrapButtons.fire(
    
    'Deleted!',
    
    'Your file has been deleted.',
    
    'success'
    
        )
    
      } elseif (
    
    _/* Read more about handling dismissals below */_
    
        result.dismiss === Swal.DismissReason.cancel
    
      ) {
    
        swalWithBootstrapButtons.fire(
    
    'Cancelled',
    
    'Your imaginary file is safe :)',
    
    'error'
    
        )
    
      }
    
    })
