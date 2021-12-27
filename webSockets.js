//protocolos de comunicacion http/https así el front hace peticiones al back-end: se crea una conexión TCP entre estos dos

// una vez que la respuesta es recibida, la conexión se cierra

//cada vez que se hace una petición, una conexión se establece
//el protocolo https es unidireccional (peticion y respueta)

//WEBSOCKETS y por qué son diferentes al protocolo HTTP?

//WebSocket is a computer communications protocol, providing full-duplex communication channels over a single TCP connection. The WebSocket protocol was standardized by the IETF as RFC 6455 in 2011, and the WebSocket API in Web IDL is being standardized by the W3C.

//hay una comunicación bidireccional entre websockets y se crean con un wss://  o ws://
//bidireccional, el que envia y el que recibe, ambos pueden mandar informacion
//eso se logra porque los web sockets no cierran la conexion
//el cliente establece conexion con el servidor y esta no se cierra, a menos que el cliente o servidor quiera cerrarla

//se usan en real time applications: chats
//apps de juegos

//los usaremos cuando querramos actualizaciones en tiempo real
