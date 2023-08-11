function mensajeElimnar(){
    Swal.fire({
        icon: 'warning',
        iconColor: 'red',
        title: '¿Quiere eliminar su reserva?',
        text: 'Una vez eliminada, tiene que volver a reservarla',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI',
        cancelButtonText: 'NO',
        confirmButtonColor: 'green',
        color: 'white',
        background:'rgb(47, 136, 209)',
      }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('Reserva')  
            Swal.fire({
                icon:'error',
                iconColor: 'red',
                title:'¡Eliminada!',
                text: 'Su reserva fue eliminada',
                color: 'white',
                background:'rgb(47, 136, 209)',
                background:'rgb(47, 136, 209)',
                confirmButtonText: "OK",
                confirmButtonColor: 'green',
                allowOutsideClick: false,
                allowEscapeKey: false, 
                }).then((result)=>{
                    if(result.isConfirmed){location.reload()}
            })
        }
        
      })
      
}

function mensajeConfirmar(){
    Swal.fire({
        icon: 'question',
        iconColor: 'white',
        title: '¿Quiere confirmar su reserva?',
        text: 'Recuerde que una vez confirmada la reserva solo lo puede cancelar con 24hs de antelación',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar reserva',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: 'green',
        color: 'white',
        background:'rgb(47, 136, 209)',
        
      }).then((result) => {
        if (result.isConfirmed) {
            localStorage.setItem('ReservaConfirmada', JSON.stringify(reservas)) 
            localStorage.removeItem('Reserva')
            Swal.fire({
                icon:'success',
                title:'¡Confirmada!',
                text: 'Su reserva fue reservada con exito',
                color: 'white',
                background:'rgb(47, 136, 209)',
                confirmButtonText: "OK",
                confirmButtonColor: 'green',
                allowOutsideClick: false,
                allowEscapeKey: false,  
                }).then((result)=>{
                    if(result.isConfirmed){location.reload()}
            })
        }
        
      })
      
}