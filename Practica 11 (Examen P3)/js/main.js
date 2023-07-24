import datos from '../data/data.json' assert { type: "json" };

const cuerpoTabla = document.querySelector("#cuerpo-tabla");
const myModal = new bootstrap.Modal(document.getElementById("modalGift"));

let idGiftUpdate = null;

window.mostrarModal = (id) => {
  console.log(id);
  idGiftUpdate = id;
  let index = datos.findIndex((item) => item.id == idGiftUpdate);

  document.querySelector("#giftModal").value = datos[index].gift;
  document.querySelector("#tipoModal").value = datos[index].tipo;
  document.querySelector("#tiempoModal").value = datos[index].tiempo;
  document.querySelector("#precioModal").value = datos[index].precio;
  document.querySelector("#imagenModal").value = datos[index].imagen;

  myModal.show();
};

const giftUpdate = (e) => {
  e.preventDefault();
  let index = datos.findIndex((item) => item.id == idGiftUpdate);
  datos[index].gift = document.querySelector("#giftModal").value;
  datos[index].tipo = document.querySelector("#tipoModal").value;
  datos[index].tiempo = document.querySelector("#tiempoModal").value;
  datos[index].precio = document.querySelector("#precioModal").value;
  datos[index].imagen = document.querySelector("#imagenModal").value;

  cargarTabla();
  myModal.hide();
};

const cargarTabla = () => {
  cuerpoTabla.innerHTML = "";
  datos.map((item) => {
    const fila = document.createElement("tr");

    const celdas = `<th>${item.gift}</th>
        <td>${item.tipo}</td>
        <td>${item.tiempo}</td>
        <td>$${item.precio}</td>
        <td>
        <div class="d-flex gap-2">
        <button class="btn btn-outline-warning" onclick="mostrarModal(${item.id})"><i class="fa fa-pencil" aria-hidden="true"></i></button>
        <button class="btn btn-outline-danger" onclick="borrarGift(${item.id})"><i class="fa fa-times" aria-hidden="true"></i></button>
        </div>
        </td>
        `;

    fila.innerHTML = celdas;
    cuerpoTabla.append(fila);
  });
};

const agregarGift = (e) => {
    e.preventDefault();
    
    let id = datos.at(-1).id + 1;
  let gift = document.querySelector("#gift").value;
  let tipo = document.querySelector("#tipo").value;
  let tiempo = document.querySelector("#tiempo").value;
  let precio = document.querySelector("#precio").value;
  let imagen = document.querySelector("#imagen").value;

  datos.push(new Gift(id, gift, tipo, tiempo, precio, imagen));
  document.querySelector("#formGift").reset();
  cargarTabla();
  };

// const agregarGift = (event) => {
//   event.preventDefault();

//   let id = datos.at(-1).id + 1;
//   let gift = document.querySelector("#gift").value;
//   let tipo = document.querySelector("#tipo").value;
//   let tiempo = document.querySelector("#tiempo").value;
//   let precio = document.querySelector("#precio").value;
//   let imagen = document.querySelector("#imagen").value;

//   datos.push(new Gift(id, gift, tipo, tiempo, precio, imagen));
//   document.querySelector("#formGift").reset();
//   cargarTabla();
// };

window.borrarGift = (id) => {
  let index = datos.findIndex((item) => item.id == id);

  let validar = confirm(
    `Está seguro/a que quiere eliminar la gift card ${datos[index].gift}?`
  );

  if (validar) {
    datos.splice(index, 1);
    cargarTabla();
  }
};

cargarTabla();

document.querySelector("#formGift").addEventListener("submit", agregarGift);
document.querySelector("#formModal").addEventListener("submit", giftUpdate);

class Gift {
    constructor(id, gift, tipo, tiempo, precio, imagen) {
      this.id = id;
      this.gift = gift;
      this.tipo = tipo;
      this.tiempo = tiempo;
      this.precio = precio;
      this.imagen = imagen;
    }
}