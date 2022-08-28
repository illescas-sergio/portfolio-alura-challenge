//Haz tú validación en javascript acá
const inputs = document.querySelectorAll("[data-tipo]");

function validar(input){
    const campo = input.dataset.tipo;
    if(input.validity.patternMismatch){
        alert("El email ingresado no tiene un formato valido")
    }
    
    if(!input.value){
        alert(mensajes[campo])
    }
}

const mensajes = {
    nombre: "Ingrese su nombre",
    email: "Ingrese su email",
    asunto: "Indique el asunto",
    Mensaje: "Escriba un mensaje",
}

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        validar(evento.target);
    })
})


const boton = document.querySelector("[data-submit]");

boton.addEventListener('click', (e) => {
    e.preventDefault();
    let campoVacio = true;
    inputs.forEach(input => {
        
        if(input.value === ""){
            campoVacio = true;
            return
        } else {
            campoVacio = false;
        }

    })
    if(!campoVacio){
        alert("El mensaje ha sido enviado");
    } else {
        alert("Debe completar todos los campos para poder enviar");
    }
    
})

