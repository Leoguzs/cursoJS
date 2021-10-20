const nombres = ['Leonardo', 'Mateo', 'Luis', 'Isabel']

const [persona1, ...resto] = nombres;

console.log(persona1)
console.log(resto)

nombres.map(nombre => console.log(`Yo me llamo ${nombre}`))

const persona = {
    nombre: 'leonardo',
    apellido: 'Guzman',
    edad: 24
}
const persona2 = {
    nombre: 'Jose',
    apellido: 'Guzman',
}

let {edad} = persona
console.log(edad)


let personas = ({nombre, edad=33}) =>{
    console.log(`yo me llamo ${nombre} y tengo ${edad}`)
}

personas(persona)
personas(persona2)