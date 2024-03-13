const componentesAgregados = JSON.parse(localStorage.getItem("componentes-agregados"));

const contenedorPcComponentes = document.querySelector("#PC-componentes");
const contenedorComponentesAcciones = document.querySelector("#componentes-acciones");
const contenedorComponentesAgregados = document.querySelector("#componentes-agregados");
const contenedorTotal = document.querySelector("#total");
const totalWhatss = document.querySelector("#totalWhatss");

if (componentesAgregados) {
  contenedorPcComponentes.classList.remove("disabled");
  contenedorComponentesAcciones.classList.remove("disabled");
  contenedorComponentesAgregados.classList.add("disabled");

  contenedorPcComponentes.innerHTML = "";

  componentesAgregados.forEach((componente) => {
    const div = document.createElement("div");
    div.classList.add("componentes-agregados");
    div.innerHTML = `
      <div class="card w-50 mx-auto border border-black h-100">
        <img src="${componente.imagen}" class="card-img-top border" alt="${componente.titulo}">
        <div class="card-body">
          <h3 class="card-title text-center fw-semibold text-uppercase">${componente.titulo}</h3>
          <p class="card-text text-center fs-5">${componente.whats} whatss</p>
        </div>
      </div>`;

    contenedorPcComponentes.appendChild(div);
  });

} else {
  contenedorComponentesVacio.classList.remove("disabled");
  contenedorPcComponentes.classList.add("disabled");
  contenedorComponentesAcciones.classList.add("disabled");
  contenedorComponentesAgregados.classList.add("disabled");
  actualizarTotal();
}


function actualizarTotal() {
    const totalWhatssCalculado = componentesAgregados.reduce(
      (acc, componente) => acc + componente.whats * componente.cantidad,
      0
    );
    totalWhatss.innerHTML = `${totalWhatssCalculado} wts`;
  }
  
