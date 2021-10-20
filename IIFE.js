//Ejemplo con una funcion normal
function suscribete () {
    console.log(`Suscribete`)
}

suscribete();

//Ejemplo con una funcion autoinvocativa

(function suscribirse () {
    console.log('Hola')
})();           //envuelta en parentesis de principio a fin y con '()'. Se ejecuta inmediatamente


//se puede con una funcion de flecha
(() => {                                //no hace falta nombre
    console.log(`Buenos días`)
})();

//un ejemplo más complejo
/* (()=>{
    let nombre = prompt('Ingresa tu nombre')
    alert(`Buenos días, ${nombre}`)
})(); */


///DOM

const titulo = document.getElementById('cambio')
const valor = document.getElementById('valor')
const btn = document.getElementById('btn')



btn.addEventListener('click', (e)=>{
    titulo.textContent = valor.value
    e.preventDefault
})
