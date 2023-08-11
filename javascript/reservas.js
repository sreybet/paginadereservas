const volverInicio = document.querySelector("button.botones#volverInicio")
volverInicio.addEventListener("click", ()=> {location.href = "index.html"})

const grillaReservas = document.querySelector("div#grillaReservas")

const mostrarReservas = (reservas) => {
    return `
    
    <div  class="row align-items-start lineaTurnos">
        <div class="col">
            ${reservas.dia} ${reservas.horario}
        </div>
        <div class="col">
            $ ${precioTurno}
        </div>
        <div class="col">
            <button class="btn quitar" id="${reservas.codigo}">❌</button>
        </div>
    </div>
    
    `

}

const retornoMsjReservas = () => {
    return `<div class="lineaTurnos"><p>No hay turnos reservados.<br>
                Si desea reservar,  <br>
                Seleccione los turnos en la pagina principal.<br>
                ¡Muchas gracias!<p></div>
    `
}


const quitarTurno = () => {
    const botonesQuitar = document.querySelectorAll("button.btn.quitar")
    for(let botonQuitar of botonesQuitar){
        botonQuitar.addEventListener("click",()=>{
            let resultadoQuitar = reservas.find((reserva)=> reserva.codigo === parseInt(botonQuitar.id))
            let indice = reservas.indexOf(resultadoQuitar)
            reservas.splice(indice, 1)
            retornoReservas(reservas)
            mostrarReservas(reservas)
        })
    }
}

const cuentaReservas = document.querySelector("div#cuentaReservas")
const botonEliminar = document.querySelector("button.botones#eliminarReservas")
const confirmarReservas = document.querySelector("button.botones#confirmarReservas")


const retornoReservas = (reservas)=> {
    grillaReservas.innerHTML = ""
    cuentaReservas.innerHTML = ""
    if(reservas.length > 0){
        reservas.forEach((reservas)=>{grillaReservas.innerHTML += mostrarReservas(reservas)})
        cuentaReservas.innerHTML += sumaDeReservas(reservas)
        botonEliminar.setAttribute("available", "true")
    }else{
        grillaReservas.innerHTML += retornoMsjReservas()
        botonEliminar.setAttribute("disabled", "true")
        confirmarReservas.setAttribute("disabled", "true")
        localStorage.removeItem('Reserva') 
        
    }
    quitarTurno()
    guardarReserva()
}

confirmarReservas.addEventListener("click",()=>{mensajeConfirmar()})
botonEliminar.addEventListener("click",()=>{ mensajeElimnar()})

retornoReservas(reservas)