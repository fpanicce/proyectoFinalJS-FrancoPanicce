/*Agrego el estilo de aparecer mas lento la seccion */
ScrollReveal().reveal('.dina', {delay: 50});
ScrollReveal().reveal('#nuestra-carta', {delay: 50});

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


