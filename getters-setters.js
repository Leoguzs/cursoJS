const person = {
    nombre: 'Jesus',
    apellido: 'Gonzalez',
    get nombreCompleto(){
        return `${person.nombre} ${person.apellido}`
    } ,
    set nombreCompleto (valor){
        const partes = valor.split(' ') //con espacio para que reconozca las dos palabras
        this.nombre = partes[0]
        this.apellido = partes[1]
    }
}

// si queremos mostrar el nombre completo de la persona podemos hacer esto
console.log(`${person.nombre} ${person.apellido}`) //pero lo haríamos muchas veces

function fullName ({nombre,apellido}){            //también se puede fuera del objeto, destructurando
    console.log( `${nombre} ${apellido}`)
}
fullName(person)


//getters => acceder a las propiedades: le ponemos get a la función dentro del objeto

console.log(person.nombreCompleto)



//setter: cambiar las propiedades, mutarlas. necesita un parametro

person.nombreCompleto='Leonardo Guzman'
console.log(person.nombreCompleto)