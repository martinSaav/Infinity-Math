const nombre = document.querySelector("#nombre");
const telefono = document.querySelector("#telefono");
const email = document.querySelector("#email");
const consulta = document.querySelector("#consulta");
const form = document.querySelector("form");

form.addEventListener("submit", e => {
    e.preventDefault();
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if(nombre.value.length < 6){
        alert("El nombre debe tener minimo 6 caracteres");
    }
    if(!regexEmail.test(email.value)){
        alert("Ingrese un mail valido");
    }
    if(telefono.value.length > 12){
        alert("Ingrese un numero telefonico valido");
    }
    if(consulta.value.length < 5){
        alert("La consulta debe tener mas de 5 caracteres");
    }
})