// Definir componentes a nivel global
let componentes;

// Tu código para cargar los componentes usando fetch
const contenedorComponentes = document.querySelector("#contenedorComponentes");
const contador = document.querySelector("#contador");


const botonAgregar = document.querySelectorAll(
  ".btn.colorBoton.d-flex.justify-content-center.colorHover.mx-auto"
);

// Función para cargar los componentes usando fetch
// Función para cargar los componentes usando fetch
// Función para cargar los componentes usando fetch
function cargarComponentes() {
  fetch('./db/db.json')
    .then(response => response.json())
    .then(db => {
      // Asignar datos a la variable global componentes
      componentes = db.componentes;
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
      actualizarBotones(); // Mover la llamada aquí
    })
    .catch(error => console.error('Error al cargar los componentes:', error));
}

cargarComponentes();

// Actualizar los botones después de cargar los componentes
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
