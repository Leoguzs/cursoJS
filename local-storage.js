const $mainButton = document.getElementById("mainButton");
const $buttons = document.getElementById("buttons");
const $btnPrimary = document.querySelector(".btn-primary");
const $bg = document.querySelector("#bg");

//funcion IIFE
(() => {
  $mainButton.addEventListener("click", addButtons); //Agregamos nuestra funcion
  $buttons.addEventListener("click", delegation);

  //color
  const color = localStorage.getItem("bgColor");
  console.log(color);
  if (color === null) {
    $bg.className = "bg-dark";
  } else {
    $bg.className = color;
  }
})();

function addButtons(e) {
  e.preventDefault();
  $buttons.innerHTML = `
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-danger">Danger</button>
    <button class="btn btn-success">success</button>
    <button class="btn btn-warning">Warning</button>
    `;
}

function delegation(e) {
  e.preventDefault();
  /*   console.log(e.target.classList[1]) */
  const buttonColor = e.target.classList[1]; //toma la clase en especifico del boton que estoy presionando

  switch (buttonColor) {
    case "btn-primary":
      $bg.className = "bg-primary";
      localStorage.setItem("bgColor", "bg-primary");
      break;
    case "btn-secondary":
      $bg.className = "bg-secondary";
      localStorage.setItem("bgColor", "bg-secondary");
      break;
    case "btn-warning":
      $bg.className = "bg-warning";
      localStorage.setItem("bgColor", "bg-warning");
      break;
    case "btn-danger":
      $bg.className = "btn-danger";
      localStorage.setItem("bgColor", "bg-danger");
      break;
    case "btn-success":
      $bg.className = "btn-success";
      localStorage.setItem("bgColor", "bg-success");
      break;
  }
}

//Local Storage: guarda cadenas de texto, clave => valor
//SET: Guardar   ambos están dentro de funciones
//GET: Obtener

const userName = "Leonardo Guzman";
localStorage.setItem("userName", userName);

const fullNameLocalStorage = localStorage.getItem("userName"); //le estoy pasando el key solamente
console.log(fullNameLocalStorage);

localStorage.removeItem("userName");

const persona = {
  nombre: "leonardo",
  apellido: "Guzman",
};
localStorage.setItem("persona", JSON.stringify(persona));

console.log(JSON.parse(localStorage.getItem("persona")));
