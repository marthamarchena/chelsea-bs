
// Selección de Zona
(async () => {
    const {value: zona} = await Swal.fire ({
        title: `Ubicación`,
        text: `En que zona te encuentras?`,
        icon: `question`,
        confirmButtonText: `Seleccionar`,
        footer: `<span> Si tu zona no se encuentra en el listado es porque no llegamos a ese lugar</span>`,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: false,
        input: `select`,
        inputPlaceholder: `Zona de CABA`,
        inputValue: ``, 
        inputOptions: {
            agronomia: `Agronomía`,
            belgrano: `Belgrano`,
            chacarita: `Chacarita`,
            coghlan: `Coghlan`,
            colegiales: `Colegiales`,
            nunez: `Nuñez`,
            parqueChas: `Parque Chas`,
            saavedra: `Saavedra`,
            villaOrtuzar: `Villa Ortúzar`,
            villaUrquiza: `Villa Urquiza`,
        }
    });

        if (zona) {
            Swal.fire ({
                title: `Seleccionaste ${zona}`,
            });
        }else {
            (zona === `Zona de CABA`)
               Swal.fire ({
                title: `Debes Seleccionar una Zona`,
            }); 
        }
}) ()

