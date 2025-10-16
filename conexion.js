// conexion.js
var consejos = [];

async function Conexion(query = "life") {
  try {
    const res = await fetch(`https://api.adviceslip.com/advice/search/${query}`);
    const data = await res.json();
    if (data.slips) {
      return data.slips;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error al conectar con la API:", error);
    return [];
  }
}

async function General() {
  if (consejos.length === 0) {
    consejos = await Conexion("life");
  }
  Home();
}

async function FiltroConexion(query) {
  const lista = document.getElementById("la-lista");
  if (lista) {
    lista.innerHTML = "<p>Buscando...</p>";
    consejos = await Conexion(query);
    const listaHTML = generarLista(consejos);
    lista.innerHTML = listaHTML;
  }
}