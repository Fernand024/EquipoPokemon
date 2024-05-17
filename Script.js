let selectedImages = {
  player1: '',
  player2: ''
};

let player1Selected = false;
let player2Selected = false;

function selectImage(player, image) {
  selectedImages[player] = image;
  if (player === "player1") {
    player1Selected = true;
  } else if (player === "player2") {
    player2Selected = true;
  }
  document.getElementById('imageContainer').innerHTML = `<img src="${image}" alt="Imagen seleccionada por ${player}">`;
}

function selectImage2(player, image) {
  selectedImages[player] = image;
  if (player === "player1") {
    player1Selected = true;
  } else if (player === "player2") {
    player2Selected = true;
  }
  document.getElementById('imageContainer2').innerHTML = `<img src="${image}" alt="Imagen seleccionada por ${player}">`;
}

function confirmSelection(player) {
  if (player === "player1") {
    if (!player1Selected) {
      alert("Por favor, selecciona una imagen para el Jugador 1 antes de confirmar.");
      return;
    }
    // Eliminar imágenes y botones del jugador 1
    document.getElementById('player1').innerHTML = `
      <div class="player" id="player1">
          <h2>Jugador 1</h2>
          <p>Listo</p>
      </div>
    `;
    document.getElementById('imageContainer').innerHTML = '';
    // Reiniciar selección de imagen del jugador 1
    selectedImages['player1'] = '';
  } else if (player === "player2") {
    if (!player2Selected) {
      alert("Por favor, selecciona una imagen para el Jugador 2 antes de confirmar.");
      return;
    }
    // Eliminar imágenes y botones del jugador 2
    document.getElementById('player2').innerHTML = `
      <div class="player" id="player2">
          <h2>Jugador 2</h2>
          <p>Listo</p>
      </div>
    `;
    document.getElementById('imageContainer2').innerHTML = '';
    // Reiniciar selección de imagen del jugador 2
    selectedImages['player2'] = '';
  }
}
