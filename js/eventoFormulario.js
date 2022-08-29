const boton = document.querySelector(`#formulario`);
boton.addEventListener(`click`, enviar);

function enviar (e){
    e.preventDefault();
    const valor = document.querySelector(`#nombre`).value;
    const valor1 = document.querySelector(`#telefono`).value;
    const valor2 = document.querySelector(`#email`).value;

    if (valor === ""){
        Swal.fire ({
            text: `Olvidaste Completar tu nombre`,
            icon: `error`,
            confirmButtonText: `Confirmar`,
        })
    }else {
        Swal.fire ({
            title: `${valor}`,
            text: `Gracias por Escribirnos. Pronto recibirás una respuesta`,
            icon: `success`,
            confirmButtonText: `Confirmar`,
        })
    }

    if (valor1 === ""){
        Swal.fire ({
            text: `Olvidaste Completar tu Número`,
            icon: `error`,
            confirmButtonText: `Confirmar`,
        })
    }

    if (valor2 === ""){
        Swal.fire ({
            text: `Olvidaste Completar tu Email`,
            icon: `error`,
            confirmButtonText: `Confirmar`,
        })
    }
    
}

