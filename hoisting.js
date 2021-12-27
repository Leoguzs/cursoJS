//hoisting es elevacion
//la variable var se eleva hasta el principio
//si estuvieran dentro de la funcion, se elevarían hasta el principio de
//pero solo las declaraciones, las inicializaciones se quedan en donde estaban

//la declaracion se separa de la inicializacion
console.log(nombre); //undefined
var nombre = "Leonardo";

//aplica con funciones: si la llamamos así, entondes el resultado es 'hola, Leonardo'
saludar("Leonardo");

function saludar(nombre) {
  //la funcion se eleva del scope
  console.log("hola, " + nombre);
}
//solo con funciones normales

let firstName = "Leonardo";
console.log(firstName);

//hoisting: var, function, import se elevan

//temporal dead zone: una region de nuestro codigo dondd una variable no se puede acceder porque la ejecucion del programa todavia no paso por la línea de código donde es declarada
