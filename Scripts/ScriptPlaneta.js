let selectedImages = {
  player1: '',
  player2: ''
};

let selectedPlanetName = {
  player1: '',
  player2: ''
};

let player1Selected = false;
let player2Selected = false;

function selectImage(player, character, planetName) {
  selectedImages[player] = character;
  selectedPlanetName[player] = planetName;
  if (player === "player1") {
    player1Selected = true;
  } else if (player === "player2") {
    player2Selected = true;
  }
  getInfo(character);
}

document.getElementById('Goku').innerHTML = `<img src="https://dragonball-api.com/planetas/Namek_U7.webp" alt="Goku">`;
document.getElementById('Bardock').innerHTML = `<img src="https://dragonball-api.com/planetas/Tierra_Dragon_Ball_Z.webp" alt="Goku">`;
document.getElementById('Freezer').innerHTML = `<img src="https://dragonball-api.com/planetas/PlanetYardrat.webp" alt="Goku">`;
document.getElementById('Majin').innerHTML = `<img src="https://dragonball-api.com/planetas/Planeta_Vegeta_en_Dragon_Ball_Super_Broly.webp" alt="Goku">`;
document.getElementById('Vegeta').innerHTML = `<img src="https://dragonball-api.com/planetas/Planeta_del_Kaio_del_Norte.webp" alt="Goku">`;

function getInfo(character) {
  fetch(`https://dragonball-api.com/api/planets/${character}`)
    .then(response => response.json())
    .then(data => {
      const { image, name, isDestroyed, description } = data;
      document.getElementById('imageContainer').innerHTML = `
        <div style="text-align: center;">
          <img src="${image}">
          <p style="text-align: center;">${name}</p>
          <p style="text-align: center;">Esta Destruido: ${isDestroyed}</p>
          <p style="text-align: center;">Descripcion: ${description}</p>
        </div>
      `;
    })
    .catch(error => {
      console.error('Error fetching character info:', error);
    });
}

function confirmSelection(player) {
  if (player === "player1") {
    if (!player1Selected) {
      alert("Por favor, selecciona una imagen para el Jugador 1 antes de confirmar.");
      return;
    }
    document.getElementById('player1').innerHTML = `
      <div class="player" id="player1">
        <h2>Planeta Seleccionado</h2>
        <p>Listo</p>
      </div>
    `;
    // Guardar el nombre del planeta en localStorage
    localStorage.setItem('selectedPlanetPlayer1', selectedPlanetName['player1']);
    window.location.href = 'Batalla.html';
  } else if (player === "player2") {
    if (!player2Selected) {
      alert("Por favor, selecciona una imagen para el Jugador 2 antes de confirmar.");
      return;
    }
    document.getElementById('player2').innerHTML = `
      <div class="player" id="player2">
        <h2>Jugador 2</h2>
        <p>Listo</p>        
      </div>
    `;
    localStorage.setItem('selectedPlanetPlayer2', selectedPlanetName['player2']);
  }
}
