// consejo.js
var esFavorito = false;

function toggleFavorito(id, texto) {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  const existe = favoritos.some(item => item.id === id);

  if (existe) {
    favoritos = favoritos.filter(item => item.id !== id);
    esFavorito = false;
  } else {
    favoritos.push({ id, advice: texto });
    esFavorito = true;
  }

  localStorage.setItem("favoritos", JSON.stringify(favoritos));

  const boton = document.querySelector(`#corazon-${id}`);
  if (boton) boton.textContent = esFavorito ? "❤️" : "🤍";
}

async function Consejo(id) {
  const res = await fetch(`https://api.adviceslip.com/advice/${id}`);
  const data = await res.json();

  const root = document.getElementById("root");
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  esFavorito = favoritos.some(item => item.id === String(data.slip.id));

  const adviceText = data.slip.advice.replace(/'/g, "\\'").replace(/"/g, "&quot;");

  root.innerHTML = `
    <section class="c-detalle">
      <h2>Consejo #${data.slip.id}</h2>
      <p>"${data.slip.advice}"</p>
      <button onclick="toggleFavorito('${data.slip.id}', '${adviceText}')">
        <span id="corazon-${data.slip.id}">${esFavorito ? "❤️" : "🤍"}</span> Favorito
      </button>
      <button onclick="Home()">⬅ Volver</button>
    </section>
  `;
}