
function usuario(usuarioIngreso, contraseñaIngreso) {
  this.usuarioIngreso = usuarioIngreso;
  this.contraseñaIngreso = contraseñaIngreso;
  this.componentesCompu = [];

  this.SumaWhatts = () => {
    return this.componentesCompu.reduce((total, componente) => total + componente, 0);
  };
}

let usuarioIngreso;
let contraseñaIngreso;

usuarioIngreso = prompt("Bienvenido, ingrese su usuario:");
contraseñaIngreso = prompt("Ingrese su contraseña:");

const Usuario1 = new usuario(usuarioIngreso, contraseñaIngreso);

while (
  usuarioIngreso !== Usuario1.usuarioIngreso ||
  contraseñaIngreso !== Usuario1.contraseñaIngreso
) {
  alert("Usuario o Contraseña Incorrectos");
  usuarioIngreso = prompt("Bienvenido, ingrese su usuario:");
  contraseñaIngreso = prompt("Ingrese su contraseña:");
}

alert(
  "Hola " +
    Usuario1.usuarioIngreso +
    " bienvenido a tu calculadora de fuente de alimentacion para tu PC \n \n¿Comenzamos?"
);

let marca = prompt(
  "Comenzaremos eligiendo la marca de la PC \n\n 1- AMD \n 2- Intel"
);

switch (marca) {
  case "1":
    alert("Seleccionaste AMD");
    break;
  case "2":
    alert("Seleccionaste Intel");
    break;
}

if (marca == "1") {
  let mother = prompt(
    "Seguiremos con la placa madre \n\n 1- Motherboard Msi H410m-b Pro (60watts) \n 2- Motherboard Asus Prime A520m-a (49watts) \n 3- Motherboard Asus Prime B460m-a R2.0 (55watss)"
  );

  switch (mother) {
    case "1":
      alert("Seleccionaste Motherboard Msi H410m-b Pro");
      mother = parseInt("60");
      break;
    case "2":
      alert("Seleccionaste Motherboard Asus Prime A520m-a");
      mother = parseInt("49");
      break;
    case "3":
      alert("Seleccionaste Motherboard Asus Prime B460m-a R2.01");
      mother = parseInt("55");
      break;
  }

  let procesador = prompt(
    "Seguiremos con el procesador \n\n 1- Ryzen 5 5600g (15watts) \n 2- Ryzen 7 5800 (18watts) \n 3- Ryzen 3 4100 (10watss)"
  );

  switch (procesador) {
    case "1":
      alert("Seleccionaste Ryzen 5 5600g");
      procesador = parseInt("15");
      break;
    case "2":
      alert("Seleccionaste Ryzen 7 5800");
      procesador = parseInt("18");
      break;
    case "3":
      alert("Seleccionaste Ryzen 3 4100");
      procesador = parseInt("10");
      break;
  }

  let grafica = prompt(
    "Seguiremos con la placa grafica \n\n 1- Rx 580 8gb (51watts) \n 2- Rx 6900xt 16gb (60watts) \n 3- Rx 5700xt 6gb (45watss)"
  );

  switch (grafica) {
    case "1":
      alert("Seleccionaste Rx 580 8gb");
      grafica = parseInt("51");
      break;
    case "2":
      alert("Seleccionaste Rx 6900xt 16gb");
      grafica = parseInt("60");
      break;
    case "3":
      alert("Seleccionaste Rx 5700xt 6gb");
      grafica = parseInt("45");
      break;
  }

  Usuario1.componentesCompu = [mother, procesador, grafica];
} else {
  let mother = prompt(
    "Seguiremos con la placa madre \n\n 1- Motherboard Msi H510m Plus V3 (55watts) \n 2- Motherboard Asus Prime H610m-k (45watts) \n 3- Motherboard Azrock z390 Phantom Gaming (50watss)"
  );

  switch (mother) {
    case "1":
      alert("Seleccionaste Msi H510m Plus V3");
      mother = parseInt("55");
      break;
    case "2":
      alert("Seleccionaste Asus Prime H610m-k");
      mother = parseInt("45");
      break;
    case "3":
      alert("Seleccionaste Motherboard Azrock z390 Phantom Gaming");
      mother = parseInt("50");
      break;
  }

  let procesador = prompt(
    "Seguiremos con el procesador \n\n 1- Intel Core i5-10400 (12watts) \n 2- Intel Core i3-10100F (9watts) \n 3- Intel Core i7-10700 (16watss)"
  );

  switch (procesador) {
    case "1":
      alert("Seleccionaste Intel Core i5-10400");
      procesador = parseInt("12");
      break;
    case "2":
      alert("Seleccionaste Intel Core i3-10100F");
      procesador = parseInt("9");
      break;
    case "3":
      alert("Seleccionaste Intel Core i7-10700");
      procesador = parseInt("16");
      break;
  }

  let grafica = prompt(
    "Seguiremos con la placa grafica \n\n 1- RTX 2060 SUPER 8gb (50watts) \n 2- GTX 1650 4gb(45watts) \n 3- RTX 3060 12GB (60watss)"
  );

  switch (grafica) {
    case "1":
      alert("Seleccionaste RTX 2060 SUPER 8gb");
      grafica = parseInt("50");
      break;
    case "2":
      alert("Seleccionaste GTX 1650 4gb");
      grafica = parseInt("45");
      break;
    case "3":
      alert("Seleccionaste RTX 3060 12GB");
      grafica = parseInt("60");
      break;
  }

  Usuario1.componentesCompu = [mother, procesador, grafica];
}

let totalWatts = Usuario1.SumaWhatts();

alert("El consumo final de la pc es: " + totalWatts + " watss");

let componentesAltosConsumo = Usuario1.componentesCompu.filter(componente => componente > 50);
let cantidadComponentesAltosConsumo = componentesAltosConsumo.length;

alert("¡¡¡ALERTA!!!\n" + "Cantidad de componentes que consumen más de 50 vatios: " + cantidadComponentesAltosConsumo +  "\n\nPara estas ocasion se recomienda conseguir una fuente de alimentacion con los whatss necesario y ademas que tenga una certificacion de 80 plus white en adelante");






