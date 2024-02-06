
let usuario = prompt ("Bienvenido ingrese su usuario!!!");
let contraseña = parseInt(prompt("Ingrese su contraseña"))

alert ("Hola " + usuario + " bienvenido a tu calculadora de fuente de alimentacion para tu PC \n \n¿Comenzamos?");

let marca = prompt("Comenzaremos eligiendo la marca de la PC \n\n 1- AMD \n 2- Intel");

switch (marca) {
    case "1":
    alert ("Seleccionaste AMD");
        break;
    case "2":
    alert ("Seleccionaste Intel");
        break;
}

if (marca == "1") {
    
    let mother = prompt("Seguiremos con la placa madre \n\n 1- Motherboard Msi H410m-b Pro (60watts) \n 2- Motherboard Asus Prime A520m-a (49watts) \n 3- Motherboard Asus Prime B460m-a R2.0 (55watss)");
    
     switch (mother) {
         case "1":
         alert ("Seleccionaste Motherboard Msi H410m-b Pro");
          mother= parseInt ("60")
             break;
         case "2":
         alert ("Seleccionaste Motherboard Asus Prime A520m-a");
         mother = parseInt ("49")
             break;
         case "3":
         alert ("Seleccionaste Motherboard Asus Prime B460m-a R2.01");
         mother = parseInt ("55")
             break;
     }

    let procesador = prompt ("Seguiremos con el procesador \n\n 1- Ryzen 5 5600g (15watts) \n 2- Ryzen 7 5800 (18watts) \n 3- Ryzen 3 4100 (10watss)");
    
    switch (procesador) {
        case "1":
        alert ("Seleccionaste Ryzen 5 5600g");
         procesador= parseInt ("15")
            break;
        case "2":
        alert ("Seleccionaste Ryzen 7 5800");
        procesador = parseInt ("18")
            break;
        case "3":
        alert ("Seleccionaste Ryzen 3 4100");
        procesador = parseInt ("10")
            break;
    }

    let grafica = prompt ("Seguiremos con la placa grafica \n\n 1- Rx 580 8gb (25watts) \n 2- Rx 6900xt 16gb (40watts) \n 3- Rx 5700xt 6gb (33watss)")

    switch (grafica) {
        case "1":
        alert ("Seleccionaste Rx 580 8gb");
         grafica= parseInt ("25")
            break;
        case "2":
        alert ("Seleccionaste Rx 6900xt 16gb");
        grafica = parseInt ("40")
            break;
        case "3":
        alert ("Seleccionaste Rx 5700xt 6gb");
        grafica = parseInt ("33")
            break;
    }

    function watss (mother,procesador,grafica){ 
        let resultadoWatss = mother + procesador + grafica;
        return resultadoWatss;
    }

    let Consumo = watss (mother,procesador,grafica);

    alert ("El consumo final de la pc es: " + Consumo + "watss");
    
} else {
    let mother = prompt("Seguiremos con la placa madre \n\n 1- Motherboard Msi H510m Plus V3 (55watts) \n 2- Motherboard Asus Prime H610m-k (45watts) \n 3- Motherboard Azrock z390 Phantom Gaming (50watss)");
    
    switch (mother) {
        case "1":
        alert ("Seleccionaste Msi H510m Plus V3");
         mother= parseInt ("55")
            break;
        case "2":
        alert ("Seleccionaste Asus Prime H610m-k");
        mother = parseInt ("45")
            break;
        case "3":
        alert ("Seleccionaste Motherboard Azrock z390 Phantom Gaming");
        mother = parseInt ("50")
            break;
    }

   let procesador = prompt ("Seguiremos con el procesador \n\n 1- Intel Core i5-10400 (12watts) \n 2- Intel Core i3-10100F (9watts) \n 3- Intel Core i7-10700 (16watss)");
   
   switch (procesador) {
       case "1":
       alert ("Seleccionaste Intel Core i5-10400");
        procesador= parseInt ("12")
           break;
       case "2":
       alert ("Seleccionaste Intel Core i3-10100F");
       procesador = parseInt ("9")
           break;
       case "3":
       alert ("Seleccionaste Intel Core i7-10700");
       procesador = parseInt ("16")
           break;
   }

   let grafica = prompt ("Seguiremos con la placa grafica \n\n 1- RTX 2060 SUPER 8gb (30watts) \n 2- GTX 1650 4gb(20watts) \n 3- RTX 3060 12GB (40watss)")

   switch (grafica) {
       case "1":
       alert ("Seleccionaste RTX 2060 SUPER 8gb");
        grafica= parseInt ("30")
           break;
       case "2":
       alert ("Seleccionaste GTX 1650 4gb");
       grafica = parseInt ("20")
           break;
       case "3":
       alert ("Seleccionaste RTX 3060 12GB");
       grafica = parseInt ("40")
           break;
   }

   function watss (mother,procesador,grafica){ 
       let resultadoWatss = mother + procesador + grafica;
       return resultadoWatss;
   }

   let Consumo = watss (mother,procesador,grafica);

   alert ("El consumo final de la pc es: " + Consumo + "watss");
}
        

