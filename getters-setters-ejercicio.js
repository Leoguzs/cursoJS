const carro = {
    marca: 'Dodge',
    modelo: 2008,
    propietario: 'Leonardo',
    apellidoPropieario: 'Guzman',
    get informacion(){
        return `el nombre del propietario es ${this.propietario} y su apellido es ${this.apellidoPropieario}`
    },
    set informacion(valor){   
        const nombreCompleto = valor.split(' ')
        this.propietario = nombreCompleto[0]
        this.apellidoPropieario = nombreCompleto [1]
    }
}


console.log(carro.informacion)   //con el get de arriba puedo tomar mi metodo como una propiedad

//set: el set nos permite cambiar info de nuesto metodo
carro.informacion = 'Federico Fernandez'
console.log(carro.informacion) 


console.log('------------------------')

const pokemon ={
    nombre: 'charmander',
    estado: 'atacando',
    get accion (){
        return `${this.nombre} esta ${this.estado}`
    },
    set accion (valor){
        const partes = valor.split(' ')
        this.nombre = partes[0]
        this.estado = partes[1]
    }
}

console.log(pokemon.accion)    //la puedo pasar como una propiedad


//con 'set', nosotros podemos ser capaces de darle nueva informacion al metodo
pokemon.accion = 'Charizard dormido'
console.log(pokemon.accion)

