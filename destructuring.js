//destructurar es tomar un un objeto o arreglo y convertirlo en elementos más pequeños o variables

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f']
const numbers = ['1','2','3','4','5','6']

// const a = alphabet[0]
// document.write(alphabet[3])

const [a, b, ...rest] = alphabet   //los tres puntos son el spreadOperator
console.log(a)
console.log(b)
console.log(rest)

let [uno, dos, tres,,,seis] = numbers //con la coma nos saltamos al elemento que no queremos
console.log(uno)
console.log(seis)

const alphabetNumber = [...alphabet, ...numbers]
console.log(alphabetNumber)


function sumAndMult (a,b){
    return [a+b, a*b, a/b]
}
const [sum, mult, div]= sumAndMult(4,9)
console.log(div)




/* Destructurando objetos */
console.log('Destructurando objetos--')

const person1 = {
    name: 'Alex',
    age: '24',
    address: {
        city: 'Somewhere',
        state: 'California'
    }
}

const person2 = {
    name: 'Maria',
    age: '26',
    favouriteFood: 'sugar',
    address: {
        city: 'Somewhere',
        state: 'Manhattan'
    }
}


const {name:nombre, ...resto} = person2;   //el nombre dentro de las llaves tiene que coincidir
console.log(nombre)              //pero podemos cambiar el nombre con  esto  ':'
console.log(resto)   

const person3 = {...person1, ...person2}  //person dos se va a sobreescribir en person1
console.log(person3)


////Haciéndolo con una función
console.log('----------')
let printUser = ({name, address:{state},favouriteFood='cangrejo'}) =>{
    console.log(`El nombre de esta persona es ${name}
    y vive en ${state}. Su comida favorita es ${favouriteFood}`)
}

printUser(person1)
printUser(person2)