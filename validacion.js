//Haz tú validación en javascript acá

const formulario = document.querySelector(".formcontato__form");

const inputs = document.querySelectorAll("[data-tipo]");

const nombre = document.querySelector("[data-tipo=nombre]");
const email = document.querySelector("[data-tipo=email]");
const asunto = document.querySelector("[data-tipo=asunto]");
const mensaje = document.querySelector("[data-tipo=mensaje]");

const boton = document.querySelector("[data-submit]");

nombre.addEventListener('blur', () => {
    if(nombre.validity.valueMissing){
        nombre.setCustomValidity("Por favor, ingrese su nombre");
    } else {
        nombre.setCustomValidity("");
    }
    nombre.reportValidity();
});

email.addEventListener('blur', () => {
    if(email.validity.patternMismatch){
        email.setCustomValidity("Debe ingresar un e-mail valido");
    } else if(email.validity.valueMissing){
            email.setCustomValidity("Escriba su e-mail asi nos ponemos en contacto con Ud.");
    } else {
        email.setCustomValidity("");    
    }
    email.reportValidity();    
});

asunto.addEventListener('blur', () => {
    if(asunto.validity.valueMissing){
        asunto.setCustomValidity("No olvide indicar el asunto");
    } else {
        asunto.setCustomValidity("");    
    }
    asunto.reportValidity();
});

mensaje.addEventListener('blur', () => {
    if(mensaje.validity.valueMissing){
        mensaje.setCustomValidity("Por favor, ingrese un mensaje");
    } else {
        mensaje.setCustomValidity("");    
    }
    mensaje.reportValidity();
});

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    if(!nombre.validity.valueMissing || !email.validity.patternMismatch || !email.validity.valueMissing || !asunto.validity.valueMissing){

        alert("Mensaje enviado. Lo contactaremos a la brevedad");
        inputs.value = "";
        window.location = "index.html";
    } else {
        formulario.setCustomValidity("Debe completar el formulario antes de enviar!");
    }
    formulario.reportValidity()
});

window.addEventListener("load", () => {
    formulario.addEventListener('change', () => {
    
        if(!nombre.validity.valueMissing && !email.validity.patternMismatch && !email.validity.valueMissing && !asunto.validity.valueMissing && !mensaje.validity.valueMissing){
            boton.disabled = false;
            boton.classList.remove("botao-disabled");
        } else {
            boton.disabled = true;
            boton.classList.add("botao-disabled");
        }
    });
});