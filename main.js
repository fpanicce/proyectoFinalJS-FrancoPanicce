/*Agrego el estilo de aparecer mas lento la seccion */
ScrollReveal().reveal('.dina', {delay: 50});
ScrollReveal().reveal('#nuestra-carta', {delay: 50});


//Form de contacto

const formulario = document.querySelector("#formulario")
const inputNombre = document.querySelector("#inputNombre")
const inputApellido = document.querySelector("#inputApellido")
const inputTelefono = document.querySelector("#inputTelefono")
const inputCantidad = document.querySelector("#inputCantPersonas")
const inputFecha = document.querySelector("#inputFecha")
const inputHorario = document.querySelector("#inputHorario")

const reservas = []
const ocupacionMax = 15
let disponibilidad = true


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

//Funcion para contar chequear capacidad
function sumarOcupacion(arrayPrueba, fechaCapacidad, horarioCapacidad){
    let ocupacion = 0
    for(let i = 0; i < arrayPrueba.length; i++){
        if(arrayPrueba[i].fecha == fechaCapacidad && arrayPrueba[i].horario == horarioCapacidad){
            ocupacion = ocupacion + arrayPrueba[i].cantidad
        }
    }
    if(ocupacion <= ocupacionMax){
        disponibilidad = true
    }else{
        disponibilidad = false
    }
    return disponibilidad
}





formulario.onsubmit = (event) =>{
    event.preventDefault()
    console.log(event)
    //Hago el push y el pop para que se ejecute la funcion sumarOcupacion y haga bien la validacion despues
    reservas.push(new Reservar(inputNombre.value, inputApellido.value, inputTelefono.value, Number(inputCantidad.value), inputFecha.value, inputHorario.value))
    sumarOcupacion(reservas, inputFecha.value, inputHorario.value)
    reservas.pop()
    //Check de Vacios y Capacidad
    if(inputNombre.value.length == 0 || inputNombre.value === `Por favor ingresa un nombre` ){
        inputNombre.value = `Por favor ingresa un nombre`
        inputNombre.style.color = "red"
    }else if(inputApellido.value.length == 0 || inputApellido.value === `Por favor ingresa un apellido`){
        inputApellido.value = `Por favor ingresa un apellido`
        inputApellido.style.color = "red"
    }else if(inputTelefono.value.length == 0 || inputTelefono.value === `Por favor ingresa un telefono`){
        inputTelefono.value = `Por favor ingresa un telefono`
        inputTelefono.style.color = "red"
    }else if(disponibilidad == true){
        reservas.push(new Reservar(inputNombre.value, inputApellido.value, inputTelefono.value, Number(inputCantidad.value), inputFecha.value, inputHorario.value))
        congrats.style.display = "block"
        congratsFail.style.display = "none"
    }else{
        congratsFail.style.display = "block"
        congrats.style.display = "none"
    }

    console.log(reservas)
}