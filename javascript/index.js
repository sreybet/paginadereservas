const grillaTurnos = document.querySelector("div#grilla")

const retornoTabla = (turnos) => {
    return `<div class="row align-items-start lineaTurnos">
                <div class="col">
                   <p class="col__dias"> ${turnos.dia} </p>
                </div>
                <div class="col">
                   <p class="col__dias"> ${turnos.horario} </p>
                </div>
                <div class="col">
                    <button type="button" class="btn btn-primary btn-outline-light botonReserva" id="${turnos.codigo}">✔</button>
                </div>
            </div>    
            `
}

const retornoMsjTurnos = () => {
    return `<div class="row align-items-start lineaTurnos"><p>Por el momento no tenemos turnos disponbiles.<br>Disculpe las molestias.<p></div>
    `
}

const cargarTurnos = (turnos) => {
    grillaTurnos.innerHTML = ""
    turnos.forEach((turnos)=>{grillaTurnos.innerHTML += retornoTabla(turnos)})
    reservarTurno()
}

const cajaFiltro = document.querySelector("input.filtro__caja#cajaFiltro")
const botonFiltrar = document.querySelector("input.filtro__boton#botonFiltro")

const filtrarTurnos = () =>{
    let resultado = turnos.filter((turno) => turno.dia.toLowerCase().includes(cajaFiltro.value.trim()))
    resultado.length > 0 && cargarTurnos(resultado)       
}

cajaFiltro.addEventListener("search", filtrarTurnos)
botonFiltrar.addEventListener("click", filtrarTurnos)



const reservarTurno = ()=>{
    const botonesReserva = document.querySelectorAll("button.btn.btn-primary.btn-outline-light.botonReserva")
    for(let botonReserva of botonesReserva){
        botonReserva.addEventListener("click", ()=>{
            let resultadoReserva = turnos.find((turno)=> turno.codigo === parseInt(botonReserva.id))
            reservas.push(resultadoReserva)
            guardarReserva()
        })
    }
}

const verReservas = document.querySelector("button.botones#verReservas")

verReservas.addEventListener("click", ()=> {location.href = "reservas.html" })

const obtenerTurnos = () => {
    fetch(URL)
    .then((response)=> response.json())
    .then((data)=> turnos.push(...data))
    .then(()=>cargarTurnos(turnos))
    .catch((error)=> grillaTurnos.innerHTML += retornoMsjTurnos())
    
}

obtenerTurnos()