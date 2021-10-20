const API_URL = 'https://randomuser.me/api/';
const $contenido = document.querySelector('.contenido')
const $btn = document.querySelector('.btn')

const traerApi = () =>{
    fetch(API_URL)
    .then(response =>response.json()).then(json=> {
        //accedemos a la informacion con mi const $contenido
        $contenido.innerHTML= `<img src="${json.results[0].picture.large}" width="100px" class="img-fluid rounded-circle" alt="">
        <p>Nombre: ${json.results[0].name.first}  ${json.results[0].name.last} </p>
        <p>Telefono: ${json.results[0].cell}</p>
        <p>Email: ${json.results[0].email} </p>
        `

     }) .catch(e=> console.log(e))
    }




$btn.addEventListener('click', () =>{
    traerApi()
})