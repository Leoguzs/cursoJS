//las clases en realidad son prototipos

function Persona (nombre, apellido, altura){
    this.nombre= nombre,
    this.apellido= apellido,
    this.altura=altura
    
}
Persona.prototype.saludar= function (){
    if (this.altura>1.60){
        console.log(`Hola, sou ${this.nombre} y soy alto, mido ${this.altura}`)
    } else {
        console.log(`Hola, sou ${this.nombre} y soy baje, mido ${this.altura}`)
    }
}

let leonardo = new Persona ('Leonardo', 'Guzmán', '1.67')
let mariana = new Persona('Mariana', 'ramirez', '1.52')


leonardo.saludar()

///meter ese saludo en una funcion
function Person (name, lastName){
    this.name= name,
    this.lastName= lastName,
    this.greeting=function(){
        console.log(`Hola me llamo ${name}`)
    }
    
}

let juan = new Person('Juan', 'Guzman')