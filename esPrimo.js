let num = 4;

if (num % 2 == 0) {
  console.log(`el número ${num} nos es primo`);
} else {
  console.log("el numero es primo");
}

///////palindromo/////

let palabra = "amor a roma";
let palindromo = true;

let esPalindromo = (palabra) => {
  for (let i = 0, j = palabra.length - 1; i <= j; i++, j--) {
    palabra = palabra.toLowerCase();

    if (palabra[i] != palabra[j]) {
      palindromo = false;
      break;
    }
  }
  if (palindromo) {
    console.log("Es palindromo");
  } else {
    console.log("No es palindromo");
  }
};

esPalindromo(palabra);
