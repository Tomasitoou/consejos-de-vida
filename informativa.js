// informativa.js
function Informativa() {
    document.body.className = "";
    document.getElementById("root").innerHTML = `
        <section class="info">
            <h1><a href="https://api.adviceslip.com/" target="_blank">Advice Slip API</a></h1>
            <h2>Proyecto: Consejos de Vida</h2>
            <img src="consejo.png" alt="Advice Icon" width="128">
            <p>Aplicación que utiliza la Advice Slip API para mostrar consejos sobre la vida.</p>
            <p>Desarrollado por: Tomas</p>
            <button onclick="Home()" style="margin-top: 20px;">Volver al inicio</button>
        </section>
    `;
}