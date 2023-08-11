let precioTurno = 2000
let descuento = 0.2
const turnos = []

const URL = "./json/turnos.json"

const guardarReserva = ()=> { reservas.length > 0 && localStorage.setItem("Reserva", JSON.stringify(reservas))}

class Reserva {
    constructor(carritoDeReservas){
        this.reservas = carritoDeReservas
    }
    obtenerReservas(){
        if(this.reservas.length <= 3){
            return this.reservas.reduce((acc, turno)=> acc + turno.valor * precioTurno, 0)
        }else{
            return this.reservas.reduce((acc, turno)=> acc +(turno.valor * precioTurno)-(turno.valor * (precioTurno * descuento))  , 0)
            
        }
    }
    obtenerReservasDescuento(){
        if(this.reservas.length > 3){
            return this.reservas.reduce((acc, turno)=> acc + (turno.valor * precioTurno) * descuento, 0)
        }else{
            return ` -  ` 
        }
    }
}

const sumaDeReservas = (reservas)=>{ const reservado  = new Reserva(reservas)
    return `
    <div class="lineaTurnos" >
        <p class="totalReservaP">Descuento: $ ${reservado.obtenerReservasDescuento()}</p>
        <p class="totalReservaP">Total de la reserva: $ ${reservado.obtenerReservas().toFixed()}</p>
    </div>
    `  
}




const reservas = JSON.parse(localStorage.getItem("Reserva")) || []

