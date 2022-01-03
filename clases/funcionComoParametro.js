class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.edad = edad,
            this.saludo = (v) => {
                console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
           if (v){
               v(nombre, edad)
           }
            }
        this.soyGrande = () => {
            return this.edad > 20
        }
    }
}

let leonardo = new Persona('Leonardo', 'Guzmán', 24)

//Hacer que una clase herede de otra (Desarrollador va a heredar de Persona)
class Desarrollador extends Persona {
  constructor(nombre, apellido, edad, puesto, carrera){
    super(nombre, apellido, edad)

      this.puesto = puesto,
      this.carrera = carrera

    }
}
let dewey = new Desarrollador ('dui', 'hickle', 23, 'barrendero', 'sociologo')

function responderSaludo() {
console.log(`Mucho gusto ${nombre}`)
}
dewey.saludo()
leonardo.saludo(responderSaludo)