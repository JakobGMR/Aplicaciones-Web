let game=document.getElementById("game"); //Nombre del video juego
let dates=document.getElementById("dates") //Fechas de lanzamiento
let descripcion = document.getElementById("descripcion");  //Descripciíon del juego
let post = document.getElementById("post");

document.getElementById("form_modal").addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

document.getElementById("modal-close").addEventListener("click",e=>{
  modal_close();
});

let formValidation = () => {
  acceptData();
};

let games={};
let dates_games={};
let descripciones={};

let acceptData = () => {
  games["text"]= game.value;
  dates_games["text"]=dates.value;
  descripciones["text"] = descripcion.value;
  createPost();
  modal_close(); /* Aqui ponemos esto para que la ventana se cierre automaticamente*/ 
};

let createPost = () => {

  post.innerHTML += `
    <div class="juego">
      <p>${games.text}</p>
      <p>Fecha de lanzamiento: ${dates_games.text}</p>
      <p>${descripciones.text}</p>
      <span>
        <button onclick="editpost(this)" class="boton-editar">Modif</button>
        <button onclick="deletepost(this)" class="boton-borrar">Borrar</button>
      </span>
    </div>
  `;
  descripcion.value = "";
  game.value="";
};

// Eventos para editar y eliminar los comentarios
let editpost = (e) => {
  game.value = e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
  descripcion.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
  modal_open();/* función agregada*/ 
}

let deletepost = (e) => {
  e.parentElement.parentElement.remove();
}

let deleteAll =(e)=>{
  e.parentElement.remove();
}

/****************************** Modal *******************************+++*/

//Abrir modal
let modal_open=()=>{
  modal.show();
  /*
    Este es un metodo del modal, lo va abrir
    y lo va poner encima de todo el contenido
  */
};

let modal_close=()=>{
  modal.close(); //Con esto la ventana modal se va cerrar
};