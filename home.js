// home.js
function generarLista(arrayConsejos) {
  if (!arrayConsejos || arrayConsejos.length === 0) {
    return "<p>No se encontraron consejos.</p>";
  }
  
  let listaHTML = "";
  for (let i = 0; i < arrayConsejos.length; i++) {
    const id = arrayConsejos[i].id;
    const advice = arrayConsejos[i].advice;
    listaHTML += `
      <div class="c-lista-consejo consejo-${id}" onclick="Consejo('${id}')">
        <p><b>#${id}</b></p>
        <p>"${advice}"</p>
      </div>`;
  }
  return listaHTML;
}

function buscadorfuncion(valor) {
  if (valor.length >= 3) {
    FiltroConexion(valor);
  } else {
    FiltroConexion("life");
  }
}

function Home() {
  document.body.className = "";
  const root = document.getElementById("root");
  root.innerHTML = "";

  const buscador = document.createElement("input");
  buscador.classList.add("c-buscador");
  buscador.type = "text";
  buscador.placeholder = "Buscar consejo...";
  buscador.addEventListener("input", () => {
    buscadorfuncion(buscador.value);
  });

  const listaHTML = generarLista(consejos);
  const contenedorConsejos = document.createElement("section");
  contenedorConsejos.id = "la-lista";
  contenedorConsejos.innerHTML = listaHTML;

  root.appendChild(buscador);
  root.appendChild(contenedorConsejos);
}