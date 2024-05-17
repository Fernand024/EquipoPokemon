let selectedImages = {
  player1: '',
  player2: ''
};

let player1Selected = false;
let player2Selected = false;

let btn1Pressed = false;
let btn2Pressed = false;

function selectImage(player, character, image) {
  selectedImages[player] = image;
  if (player === "player1") {
    player1Selected = true;
    localStorage.setItem('player1Character', character); // Almacenar nombre del personaje de Player 1
    localStorage.setItem('player1Image', image); // Almacenar URL de la imagen de Player 1
  } else if (player === "player2") {
    player2Selected = true;
    localStorage.setItem('player2Character', character); // Almacenar nombre del personaje de Player 2
    localStorage.setItem('player2Image', image); // Almacenar URL de la imagen de Player 2
  }
  document.getElementById('imageContainer').innerHTML = `<img src="${image}" alt="${character}">`;
  getInfo(character);
}

function getInfo(character) {
  fetch(`https://dragonball-api.com/api/characters/${character}`)
    .then(response => response.json())
    .then(data => {
      const { name, race, ki, affiliation } = data;
      document.getElementById('imageContainer').innerHTML += `
        <p>${name}</p>
        <p>Raza: ${race}</p>
        <p>Ki: ${ki}</p>
        <p>Afiliación: ${affiliation}</p>
      `;
    })
    .catch(error => {
      console.error('Error fetching character info:', error);
    });
}

function getInfo2(character) {
  fetch(`https://dragonball-api.com/api/characters/${character}`)
    .then(response => response.json())
    .then(data => {
      const { name, race, ki, affiliation } = data;
      document.getElementById('imageContainer2').innerHTML += `
        <p>${name}</p>
        <p>Raza: ${race}</p>
        <p>Ki: ${ki}</p>
        <p>Afiliación: ${affiliation}</p>
      `;
    })
    .catch(error => {
      console.error('Error fetching character info:', error);
    });
}

function selectImage2(player, character, image) {
  selectedImages[player] = image;
  if (player === "player1") {
    player1Selected = true;
    localStorage.setItem('player1Character', character); // Almacenar nombre del personaje de Player 1
    localStorage.setItem('player1Image', image); // Almacenar URL de la imagen de Player 1
  } else if (player === "player2") {
    player2Selected = true;
    localStorage.setItem('player2Character', character); // Almacenar nombre del personaje de Player 2
    localStorage.setItem('player2Image', image); // Almacenar URL de la imagen de Player 2
  }
  document.getElementById('imageContainer2').innerHTML = `<img src="${image}" alt="Imagen seleccionada por ${player}">`;
  getInfo2(character);
}

function confirmSelection(player) {
  if (player === "player1") {
    if (!player1Selected) {
      alert("Por favor, selecciona una imagen para el Jugador 1 antes de confirmar.");
      return;
    }
    btn1Pressed = true;
    document.getElementById('player1').innerHTML = `
      <div class="player" id="player1">
        <h2>Jugador 1</h2>
        <p>Listo</p>
      </div>
    `;
    document.getElementById('imageContainer').innerHTML = '';
    checkPlayersReady();
  } else if (player === "player2") {
    if (!player2Selected) {
      alert("Por favor, selecciona una imagen para el Jugador 2 antes de confirmar.");
      return;
    }
    btn2Pressed = true;
    document.getElementById('player2').innerHTML = `
      <div class="player" id="player2">
        <h2>Jugador 2</h2>
        <p>Listo</p>
      </div>
    `;
    document.getElementById('imageContainer2').innerHTML = '';
    checkPlayersReady();
  }
}

function checkPlayersReady() {
  if (btn1Pressed && btn2Pressed) {
    window.location.href = 'SeleccionPlaneta.html';
  }
}
document.getElementById('Goku').innerHTML = `<img src="https://dragonball-api.com/characters/goku_normal.webp" alt="Goku">`;
document.getElementById('Bardock').innerHTML = `<img src="https://dragonball-api.com/characters/Bardock_Artwork.webp" alt="Goku">`;
document.getElementById('Freezer').innerHTML = `<img src="https://dragonball-api.com/characters/Freezer.webp" alt="Goku">`;
document.getElementById('Majin').innerHTML = `<img src="https://dragonball-api.com/characters/BuuGordo_Universo7.webp" alt="Goku">`;
document.getElementById('Vegeta').innerHTML = `<img src="https://dragonball-api.com/characters/vegeta_normal.webp" alt="Goku">`;



document.getElementById('Goku2').innerHTML = `<img src="https://dragonball-api.com/characters/goku_normal.webp" alt="Goku">`;
document.getElementById('Bardock2').innerHTML = `<img src="https://dragonball-api.com/characters/Bardock_Artwork.webp" alt="Goku">`;
document.getElementById('Freezer2').innerHTML = `<img src="https://dragonball-api.com/characters/Freezer.webp" alt="Goku">`;
document.getElementById('Majin2').innerHTML = `<img src="https://dragonball-api.com/characters/BuuGordo_Universo7.webp" alt="Goku">`;
document.getElementById('Vegeta2').innerHTML = `<img src="https://dragonball-api.com/characters/vegeta_normal.webp" alt="Goku">`;
