// sentimientos.js
function ComoTeSientes() {
  document.body.className = "";
  const root = document.getElementById("root");
  
  root.innerHTML = `
    <section class="c-sentimientos">
      <h2>¿Cómo te sientes hoy?</h2>
      <p>Selecciona tu estado de ánimo y te daré un consejo personalizado</p>
      
      <div class="emociones-grid">
        <div class="emocion-card" onclick="buscarConsejoPorSentimiento('happy')">
          <span class="emoji">😊</span>
          <p>Feliz</p>
        </div>
        
        <div class="emocion-card" onclick="buscarConsejoPorSentimiento('sad')">
          <span class="emoji">😢</span>
          <p>Triste</p>
        </div>
        
        <div class="emocion-card" onclick="buscarConsejoPorSentimiento('tired')">
          <span class="emoji">😴</span>
          <p>Cansado</p>
        </div>
        
        <div class="emocion-card" onclick="buscarConsejoPorSentimiento('love')">
          <span class="emoji">❤️</span>
          <p>Enamorado</p>
        </div>
      </div>
      
      <div id="resultado-sentimiento"></div>
    </section>
  `;
}

async function buscarConsejoPorSentimiento(sentimiento) {
  const resultado = document.getElementById("resultado-sentimiento");
  resultado.innerHTML = "<p class='cargando'>Buscando el consejo perfecto para ti...</p>";
  
  // Mapeo de sentimientos a palabras clave para buscar
  const palabrasClave = {
    'happy': 'happiness',
    'sad': 'comfort',
    'stressed': 'calm',
    'angry': 'peace',
    'tired': 'rest',
    'motivated': 'success',
    'confused': 'clarity',
    'love': 'love'
  };
  
  const palabra = palabrasClave[sentimiento] || 'life';
  
  try {
    const consejosFiltrados = await Conexion(palabra);
    
    if (consejosFiltrados.length > 0) {
      // Seleccionar un consejo aleatorio
      const consejoAleatorio = consejosFiltrados[Math.floor(Math.random() * consejosFiltrados.length)];
      
      resultado.innerHTML = `
        <div class="consejo-resultado">
          <h3>Consejo para ti:</h3>
          <div class="c-lista-consejo" onclick="Consejo('${consejoAleatorio.id}')">
            <p><b>#${consejoAleatorio.id}</b></p>
            <p>"${consejoAleatorio.advice}"</p>
          </div>
          <button onclick="buscarConsejoPorSentimiento('${sentimiento}')" class="btn-otro">
            🔄 Otro consejo
          </button>
        </div>
      `;
    } else {
      resultado.innerHTML = `
        <p class="no-resultado">No se encontraron consejos. Intenta con otro sentimiento.</p>
      `;
    }
  } catch (error) {
    resultado.innerHTML = `
      <p class="error">Hubo un error al buscar consejos. Intenta de nuevo.</p>
    `;
  }
}