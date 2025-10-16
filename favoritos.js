// favoritos.js
function Favoritos() {
  document.body.className = "";
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  const root = document.getElementById("root");

  if (favoritos.length === 0) {
    root.innerHTML = "<p style='text-align: center; padding: 40px;'>No hay consejos favoritos.</p>";
  } else {
    const listaHTML = favoritos.map(item => `
      <div class="c-lista-consejo consejo-${item.id}" onclick="Consejo('${item.id}')">
        <p><b>#${item.id}</b></p>
        <p>"${item.advice}"</p>
      </div>
    `).join("");
    root.innerHTML = listaHTML;
  }
}