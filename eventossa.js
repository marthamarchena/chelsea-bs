

// Inicio de Sesion

// let usuario;
// let usuarioStorage = sessionStorage.getItem("usuario"); 

// const {value: bienvenida} = await Swal.fire ({
//     title: `Bienvenido a Chelsea Beer`,
//     inputLabel: 'Ingrese su Nombre',
//     input: 'text',
//     inputValue: inputValue,
//     inputValidator: (value) => {
//         if (!value) {
//           return 'Necesitamos que nos digas tu nombre!'
//         }
//     }
// })

// if (bienvenida) {
//     Swal.fire(`Bienvenido/a ${bienvenida}`)
//   }
  
//   sessionStorage.setItem("usuario", usuario);


// Selección de Zona
// (async () => {
//     const {value: zona} = await 
Swal.fire ({
        title: `Ubicación`,
        text: `En que zona te encuentras?`,
        icon: `question`,
        confirmButtonText: `Seleccionar`,
        footer: `<span> Si tu zona no se encuentra en el listado es porque no llegamos</span>`,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: false,
        input: `select`,
        inputPlaceholder: `Zona CABA`,
        inputValue: ``, 
        inputOptions: {
            agronomia: `Agronomía`,
            belgrano: `Belgrano`,
            chacarita: `Chacarita`,
            coghlan: `Coghlan`,
            colegiales: `Colegiales`,
            nunez: `Nuñez`,
            palermo: `Palermo`,
            chas: `Parque Chas`,
            saavedra: `Saavedra`,
            crespo: `Villa Crespo`,
            ortuzar: `Villa Ortúzar`,
            urquiza: `Villa Urquiza`,
        }
    })
// } )