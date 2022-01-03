console.log('a')
setTimeout(() => {  //Callback, el primer parametro de setTimeOut es otra función 
    console.log('b')
},0);
console.log('c') //a, c, b

//ejemplo
setTimeout(() => {
    console.log('d')
}, 0);

//Callback








//Sincronismo: las tareas se ejecutan en orden, de principio a fin
//de arriba a abajo

//Asincronismo: JS tiene una pila de ejecución (callStack), en donde va poniendo las 
//llamadas a las funciones segun el orden de ejecucion de nuestro programa
//js ejecuta las funciones conforme son llamadas pero sabe que unas pueden tardar más 
//que otras

//calback es una funcion que JS ejecutará cuando llegue la respuesta del servidor, cuando 
//llega, se apila en la cola de tareas (peticionaes a servidor, int. visuales)

//Hasta que la pila de ejecución se vacíe, JS va a buscar las tareas
// El event loop se encarga de agendar estos callbacks para que se ejecuten uno después 
//del otro

// setTimeout(() => console.log('Hello World'), 5000);


// //Para crear promesas usamos el constructor Promise el cual espera una función como 
// //argumento (se ejecuta de inmediato) que a su vez recibe una función usada para resolver 
// //la promesa.

// function foo() {
//     return new Promise((resolve) => {
//       // Async operations...
//       resolve(value);
//     })
//   }
  
// //Podemos obtener el resultado de una promesa usando el método then que registra una 
// //función callback para ser llamada cuando la promesa se resuelve y produce un valor.

// function foo() {
//     return new Promise((resolve) => {
//       resolve('Hello World')
//     })
//   }
  
//   foo()
//    .then((value) => console.log(value)) // Hello World
  
  