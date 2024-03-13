const componentes = [
  {
    id: "mother-1",
    titulo: "ASUS PRIME A520",
    imagen: "./img/ASUS PRIME A520M-A.png",
    whats: 49,
  },

  {
    id: "mother-2",
    titulo: "ASUS PRIME B460M-A R2.01",
    imagen: "./img/ASUS PRIME B460M-A R2.01.jpg",
    whats: 55,
  },

  {
    id: "mother-3",
    titulo: "MSI H410M-B PRO",
    imagen: "./img/MSI H410M-B PRO.png",
    whats: 60,
  },

  {
    id: "mother-4",
    titulo: "ASUS Z790 WIFI",
    imagen: "./img/ASUS STRIX Z790 WIFI.png",
    whats: 25,
  },

  {
    id: "placa-1",
    titulo: "RTX 4090",
    imagen: "./img/RTX 4090.jpg",
    whats: 80,
  },

  {
    id: "placa-2",
    titulo: "RTX 2060",
    imagen: "./img/RTX 2060.png",
    whats: 50,
  },

  {
    id: "placa-3",
    titulo: "RX 6700XT",
    imagen: "./img/RX 6700XT.jpg",
    whats: 55,
  },

  {
    id: "placa-4",
    titulo: "RX 7900XT",
    imagen: "./img/RX 7900 XT.webp",
    whats: 45,
  },

  {
    id: "proce-1",
    titulo: "INTEL I5 12400F",
    imagen: "./img/INTEL I5 12400F.png",
    whats: 15,
  },

  {
    id: "proce-2",
    titulo: "INTEL I9 12900k",
    imagen: "./img/INTEL I9 12900k.jpg",
    whats: 20,
  },

  {
    id: "proce-3",
    titulo: "RYZEN 5 5600G",
    imagen: "./img/RYZEN 5 5600G.jpg",
    whats: 10,
  },

  {
    id: "proce-4",
    titulo: "RYZEN 7 3700X",
    imagen: "./img/RYZEN 7 3700X.webp",
    whats: 18,
  },
];

const contenedorComponentes = document.querySelector("#contenedorComponentes");

botonAgregar = document.querySelectorAll(
  ".btn.colorBoton.d-flex.justify-content-center.colorHover.mx-auto"
);

const contador = document.querySelector("#contador");

function cargarComponentes() {
  contenedorComponentes.innerHTML = "";

  const row = document.createElement("div");
  row.classList.add("row", "row-cols-1", "row-cols-md-4");

  componentes.forEach((componente) => {
    const div = document.createElement("div");
    div.classList.add("col");

    div.innerHTML = `
            <div class="card border border-black h-100">
                <img src="${componente.imagen}" class="card-img-top border" alt="${componente.titulo}">
                <div class="card-body">
                    <h3 class="card-title text-center fw-semibold text-uppercase">${componente.titulo}</h3>
                    <p class="card-text text-center fs-5">${componente.whats} whatss</p>
                    <div class="colorHover">
                        <button type="button" class="btn colorBoton d-flex justify-content-center colorHover mx-auto" id="${componente.id}">AGREGAR</button>
                    </div>
                </div>
            </div>`;

    row.appendChild(div);
  });

  contenedorComponentes.appendChild(row);
  actualizarBotones();
}

cargarComponentes();

function actualizarBotones() {
  botonesAgregar = document.querySelectorAll(
    ".btn.colorBoton.d-flex.justify-content-center.colorHover.mx-auto"
  );

  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarComponente);
  });
}

const componentesPC = [];

function agregarComponente(event) {
  const idBoton = event.target.id;
  const componenteSelecionado = componentes.find(
    (componentes) => componentes.id === idBoton
  );

  if (componentesPC.some((componentes) => componentes.id === idBoton)) {
    const index = componentesPC.findIndex(
      (componentes) => componentes.id === idBoton
    );
    componentesPC[index].cantidad++;
  } else {
    componenteSelecionado.cantidad = 1;
    componentesPC.push(componenteSelecionado);
  }

  actualizarContador();
  localStorage.setItem("componentes-agregados", JSON.stringify(componentesPC));
}

function actualizarContador() {
  let contadorActualizado = componentesPC.reduce(
    (acc, componentes) => acc + componentes.cantidad,
    0
  );
  contador.innerHTML = contadorActualizado;
}
