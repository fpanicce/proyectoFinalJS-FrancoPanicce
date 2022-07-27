/*Agrego el estilo de aparecer mas lento la seccion */
ScrollReveal().reveal('.dina', {delay: 50});
ScrollReveal().reveal('#nuestra-carta', {delay: 50});


/*
//Hace tu reserva
let diaReserva = prompt("Ingresa el día que queres reservar (dd/mm)")
let cantidadReserva = Number(prompt("Ingresa la cantidad de personas"))
const capacidadMaxima = 15
let ocupacion = []
let variableCheck = true

let consistenciaFecha = (diaReserva) =>{
    if(diaReserva.length != 5){
        alert("Por favor asegurate de seleccionar una fecha con el formato dd/mm")
        variableCheck = false
    }
}

let checkCantidad = (cantidadReserva, capacidadMaxima) => {
    if(cantidadReserva >= capacidadMaxima){
        alert("Disculpa, pero no hacemos reservas para tanta gente")
        variableCheck = false
    }
}

let reservar = (diaReserva, cantidadReserva) => {
    if(variableCheck == true){
        ocupacion.push({dia: diaReserva, cantidad: cantidadReserva})
        alert(`Tu reserva para el día ${diaReserva} fue realizada con exito`)
    }
}

console.log(diaReserva.length)


consistenciaFecha(diaReserva)
console.log(variableCheck)
checkCantidad(cantidadReserva, capacidadMaxima)
reservar(diaReserva, cantidadReserva)

console.log(ocupacion)

*/

//Form de contacto

const formulario = document.querySelector("#formulario")
const inputNombre = document.querySelector("#inputNombre")
const inputApellido = document.querySelector("#inputApellido")
const inputTelefono = document.querySelector("#inputTelefono")
const inputCantidad = document.querySelector("#inputCantPersonas")
const inputFecha = document.querySelector("#inputFecha")
const inputHorario = document.querySelector("#inputHorario")

const reservas = []

class Reservar {
    constructor(nombre, apellido, telefono, cantidad, fecha, horario){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.cantidad = cantidad;
        this.fecha = fecha;
        this.horario = horario;
    }
}

console.log(reservas)

formulario.onsubmit = (event) =>{
    event.preventDefault()
    console.log(event)
    reservas.push(new Reservar(inputNombre.value, inputApellido.value, inputTelefono.value, inputCantidad.value, inputFecha.value, inputHorario.value))
    console.log(reservas)
}

/*
this.apellido = apellido;
        this.telefono = telefono;
        this.cantidad = cantidad;
        this.fecha = fecha;
        this.horario = horario;

constructor(nombre, apellido, telefono, cantidad, fecha, horario)

*/