let vidaSegundo = 100;
let vidaPrimero = 100;
let Protegido1=false;
let Protegido2=false;
let Ki1=100;
let Ki2=100;
let YaFueGolpeado1=2;
let YaFueGolpeado2=false;
let NumTurno=1;

let AtaqueCargando=false;
let AtaqueCargando2=false;

let PoderCargar=true;
let PoderCargar2=true;

let YaAtaco=false;
let YaAtaco2=false;

let AtaqueGolpeUsado=false,AtaqueKiUsado=false, AtaqueCargadoUsado =false, CubiertoUsado=false, KiCargandoUsado=false, AtaqueCUsado=false;
let AtaqueGolpeUsado2=false,AtaqueKiUsado2=false, AtaqueCargadoUsado2 =false, CubiertoUsado2=false, KiCargandoUsado2=false, AtaqueCUsado2=false;


function showAttackOptions() {
  document.querySelector('.options').style.display = 'none';
  document.querySelector('.attack-options').style.display = 'flex';
}
function showAttackOptions2() {
  document.querySelector('.options2').style.display = 'none';
  document.querySelector('.attack-options2').style.display = 'flex';
}
function OcultarBoption() {
  document.querySelector('.options').style.display = 'flex';
  document.querySelector('.attack-options').style.display = 'none';
}
function OcultarBoption2() {
  document.querySelector('.options2').style.display = 'flex';
  document.querySelector('.attack-options2').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function () {

  const characterImage = document.querySelector('.character');
  const kiBarInner = document.querySelector('.ki-bar-inner');

  const images = ['c1.png', 'c2.png', 'c3.png'];
  let currentIndex = 0;
  let intervalId; // Variable para almacenar el ID del intervalo
let intervalkI;
  function changeImage() {
   // Ki1=Ki1+1;
      characterImage.src = 'Imagenes/' + images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;
  }
function Aumentarki(ki){
  if(Ki1<=100){
    Ki1=Ki1+ki;
    kiBarInner.style.width = Ki1 + '%'; // Ajusta el ancho de la barra de ki
    
  }

}
  document.querySelector('button:nth-of-type(3)').addEventListener('click', function () {
    if(KiCargandoUsado==false  && NumTurno==1){
  
    changeImage();

      intervalkI = setInterval(function() {
        Aumentarki(0.5); // Llama a Aumentarki con el incremento deseado
    }, 50);


      intervalId = setInterval(changeImage, 500); // Cambia la imagen cada 0.5 segundos
      setTimeout(function() {
          clearInterval(intervalId); // Detiene el intervalo después de 5 segundos
          clearInterval(intervalkI);
          resetImage(); // Restablece la imagen base
      }, 5000);
}});
});
document.addEventListener('DOMContentLoaded', function () {
  const characterImage = document.querySelector('.character');
  const segundoImage = document.getElementById('Segundo'); // Selecciona la imagen del segundo jugador
  const kiBarInner = document.querySelector('.ki-bar-inner');

  const images = ['c1.png', 'c2.png', 'c3.png'];
  let currentIndex = 0;
  let intervalId;
  let intervalkI;

  function changeImage() {
    segundoImage.src = 'Imagenes/' + images[currentIndex];
    segundoImage.style.transform = 'scaleX(-1)'; // Invertir la imagen horizontalmente
    currentIndex = (currentIndex + 1) % images.length;
  }

  function Aumentarki(ki) {
    if (Ki1 <= 100) {
      Ki1 = Ki1 + ki;
      kiBarInner.style.width = Ki1 + '%';
    }
  }

  function Aumentarki2(ki) {
    if (Ki2 <= 100) {
      Ki2 = Ki2 + ki;
      kiBarInner.style.width = Ki2 + '%';
    }
  }

  document.querySelector('.options2 button:nth-of-type(3)').addEventListener('click', function () {
    if (KiCargandoUsado2 == false && NumTurno == 2 && PoderCargar2 == true && YaAtaco2==false) {
      changeImage();

      intervalkI = setInterval(function () {
        Aumentarki2(0.5);
      }, 50);

      intervalId = setInterval(changeImage, 500);
      setTimeout(function () {
        clearInterval(intervalId);
        clearInterval(intervalkI);
        resetImage();
      }, 5000);
    }
  });
  function resetImage() {
    segundoImage.src = 'Imagenes/BardockIzquierda.png';
    segundoImage.style.transform = 'scaleX(1)'; // Invertir la imagen horizontalmente

  }

});
function resetImage() {
  const characterImage = document.querySelector('.character');
  characterImage.src = 'Imagenes/156215-ezgif.com-crop.png'; // Ruta de la imagen original
}
function Defensa() {
  if(AtaqueKiUsado==false && NumTurno==1 && AtaqueCargando==false && AtaqueGolpeUsado==false){

  if(CubiertoUsado==false && NumTurno==1 && YaAtaco==false){
    CubiertoUsado=true;
    PoderCargar=false;

  const characterImage = document.querySelector('.character');
  characterImage.src = 'Imagenes/Bloqueo1.png';
  Protegido1=true;
  }
}else {
  // Detectar cuál de las condiciones no se cumple
  let reason = '';
  if ((AtaqueKiUsado || AtaqueGolpeUsado) == true) {
    reason = 'No se puede Defender despues de atacar.';
  } else if (NumTurno != 1) {
    reason = 'No es tu turno.';
  } else if (AtaqueCargando == true) {
    reason = 'El ataque está cargando.';
  }

  // Obtener el botón y hacerlo temblar y cambiar de color
  const btnGolpe = document.getElementById('BtnDefensa');
  btnGolpe.style.animation = 'shake 0.5s';
  btnGolpe.style.backgroundColor = 'red';
  btnGolpe.classList.add('shake'); // Agregar clase para el efecto de temblor
  
  var botonPosicion = btnGolpe.getBoundingClientRect();

  // Calcula la posición para colocar el texto un poco más arriba que el botón
  var textoPosX = botonPosicion.left;
  var textoPosY = botonPosicion.top-410; // 20 píxeles más arriba

const reasonText = document.createElement('div');
  reasonText.textContent = reason;
  reasonText.style.position = 'relative';
  reasonText.style.left = textoPosX + "px";
  reasonText.style.top = textoPosY + "px";
  reasonText.style.color = 'Black';
  reasonText.style.fontWeight = 'bold'; // Hacer el texto más grueso
reasonText.style.fontFamily = 'Arial, sans-serif'; // Cambiar la fuente del texto
reasonText.style.fontSize = '16px'; // Tamaño de fuente
reasonText.style.padding = '8px'; // Añadir espacio interno alrededor del texto
reasonText.style.borderRadius = '5px'; // Añadir bordes redondeados
//reasonText.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Color de fondo semi-transparente

  document.body.appendChild(reasonText);

  // Después de 1 segundo, regresar el botón a la normalidad
  setTimeout(function () {
    btnGolpe.style.animation = '';
    btnGolpe.style.backgroundColor = '';
    reasonText.parentNode.removeChild(reasonText); // Eliminar el mensaje
    reasonText.remove;
    btnGolpe.classList.remove('shake'); // Quitar clase para detener el efecto de temblor
    OcultarBoption();

  }, 1000);
}
}
function Defensa2() {
  if(CubiertoUsado2==false && NumTurno==2 && YaAtaco2==false){
    CubiertoUsado2=true;
    PoderCargar2=false;

  const segundoImage = document.getElementById('Segundo');
  segundoImage.src = 'Imagenes/BloqueoIZQ.png';
  Protegido2=true;
  }
}
function Rafaga() {
  if(AtaqueKiUsado==false && NumTurno==1 && AtaqueCargando==false){
AtaqueKiUsado=true;
PoderCargar=false;
YaAtaco=true;
  const characterImage = document.querySelector('.character');
  characterImage.src = 'Imagenes/BardockRayo1.png';
  ReducirKi();
  MoverRafaga();
  setTimeout(function () {
      characterImage.src = 'Imagenes/BardockRayo2.png';
      ReducirKi();
      MoverRafaga();
      setTimeout(function () {
          characterImage.src = 'Imagenes/156215-ezgif.com-crop.png';
      }, 1000); // Espera 1 segundo antes de cambiar a la tercera imagen
  }, 1000); // Espera 1 segundo antes de cambiar a la segunda imagen
} else {
  // Detectar cuál de las condiciones no se cumple
  let reason = '';
  if (AtaqueKiUsado == true) {
    reason = 'Ya se uso la rafaga.';
  } else if (NumTurno != 1) {
    reason = 'No es tu turno.';
  } else if (AtaqueCargando == true) {
    reason = 'El ataque está cargando.';
  }

  // Obtener el botón y hacerlo temblar y cambiar de color
  const btnGolpe = document.getElementById('BtnRafaga');
  btnGolpe.style.animation = 'shake 0.5s';
  btnGolpe.style.backgroundColor = 'red';
  btnGolpe.classList.add('shake'); // Agregar clase para el efecto de temblor
  
  var botonPosicion = btnGolpe.getBoundingClientRect();

  // Calcula la posición para colocar el texto un poco más arriba que el botón
  var textoPosX = botonPosicion.left;
  var textoPosY = botonPosicion.top-410; // 20 píxeles más arriba

const reasonText = document.createElement('div');
  reasonText.textContent = reason;
  reasonText.style.position = 'relative';
  reasonText.style.left = textoPosX + "px";
  reasonText.style.top = textoPosY + "px";
  reasonText.style.color = 'Black';
  reasonText.style.fontWeight = 'bold'; // Hacer el texto más grueso
reasonText.style.fontFamily = 'Arial, sans-serif'; // Cambiar la fuente del texto
reasonText.style.fontSize = '16px'; // Tamaño de fuente
reasonText.style.padding = '8px'; // Añadir espacio interno alrededor del texto
reasonText.style.borderRadius = '5px'; // Añadir bordes redondeados
//reasonText.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Color de fondo semi-transparente

  document.body.appendChild(reasonText);

  // Después de 1 segundo, regresar el botón a la normalidad
  setTimeout(function () {
    btnGolpe.style.animation = '';
    btnGolpe.style.backgroundColor = '';
    reasonText.parentNode.removeChild(reasonText); // Eliminar el mensaje
    reasonText.remove;
    btnGolpe.classList.remove('shake'); // Quitar clase para detener el efecto de temblor
    OcultarBoption();

  }, 1000);
}
}
function Rafaga2() {
  OcultarBoption2();
  if(AtaqueKiUsado2==false && NumTurno==2){
    AtaqueKiUsado2=true;
    PoderCargar2=false;
    YaAtaco2=true;
    
  const segundoImage = document.getElementById('Segundo');
  segundoImage.src = 'Imagenes/BardockRayo1Derecho.png';
  ReducirKi2();
  MoverRafaga2();
  setTimeout(function () {
    segundoImage.src = 'Imagenes/BardockRayo2Derecho.png';
      ReducirKi2();
      MoverRafaga2();
      setTimeout(function () {
        segundoImage.src = 'Imagenes/BardockIzquierda.png';
      }, 1000); // Espera 1 segundo antes de cambiar a la tercera imagen
  }, 1000); // Espera 1 segundo antes de cambiar a la segunda imagen
}
}
function MoverRafaga2() {
  const characterImage = document.querySelector('.character');
  const segundoImage = document.getElementById('Segundo');
  const vida2 = document.getElementById('Vida2');
  const vida1 = document.getElementById('Vida1');

  // Crear la nueva imagen
  const rafagaImage = document.createElement('img');
  rafagaImage.src = 'Imagenes/BolaEnergiaDerecha.png'; // Ruta de la primera imagen de la ráfaga
  rafagaImage.classList.add('rafaga-image'); // Agregar una clase para aplicar estilos
  document.body.appendChild(rafagaImage); // Agregar la imagen al documento

  // Posicionar la imagen a la derecha del personaje
  const segundoRect = segundoImage.getBoundingClientRect();
  rafagaImage.style.position = 'absolute';
  rafagaImage.style.left = segundoRect.left + 'px';

  // Mover la imagen hacia la izquierda
  let moveInterval = setInterval(function () {
      const rafagaRect = rafagaImage.getBoundingClientRect();
      if (rafagaRect.left > 0) {
          rafagaImage.style.left = (rafagaRect.left - 25) + 'px'; // Decremento de 10px para mover hacia la izquierda

          // Detectar colisión
          if (rafagaRect.right <= characterImage.getBoundingClientRect().right) {
              // Si hay colisión, eliminar la imagen y reducir la vida
              rafagaImage.remove();
              clearInterval(moveInterval); // Detener el movimiento


              if(Protegido2==true){

                vidaPrimero -= 20; // Reducir la vida del personaje izquierdo en 20
                vida1.style.width = vidaPrimero + '%'; // Actualizar la barra de vida
                // Cambiar la imagen por 0.5 segundos
                if(vidaPrimero<=0){
                  checkGameOver();
                }
                  }else{
                  vidaPrimero -= 20; // Reducir la vida del personaje izquierdo en 20
                  vida1.style.width = vidaPrimero + '%'; // Actualizar la barra de vida
                  if(vidaPrimero<=0){
                    checkGameOver();
                  }


                }
              if(YaFueGolpeado1==true){
                characterImage.src = 'Imagenes/Golpeado.png';
                YaFueGolpeado1=false;
                console.log("Este es un mensaje en la consola.");
                Protegido1=false;
              }
              if(Protegido1==false ){
                characterImage.src = 'Imagenes/Golpeado.png';
              }else{
              YaFueGolpeado1=true;
            }

              
              
              setTimeout(function() {
                if(Protegido1==false){

                characterImage.src = 'Imagenes/156215-ezgif.com-crop.png'; // Cambiar de nuevo a la imagen original
                }
              }, 400);
          }
      } else {
          clearInterval(moveInterval); // Detener el movimiento cuando la imagen esté fuera de la ventana
      }
  }, 30); // Intervalo de movimiento (ajustable según la velocidad deseada)
}
function MoverRafaga() {
  const characterImage = document.querySelector('.character');
  const segundoImage = document.getElementById('Segundo');
  const vida2 = document.getElementById('Vida2');
  const vida1 = document.getElementById('Vida1');

  // Crear la nueva imagen
  const rafagaImage = document.createElement('img');
  rafagaImage.src = 'Imagenes/BolaEnergia.png'; // Ruta de la primera imagen de la ráfaga
  rafagaImage.classList.add('rafaga-image'); // Agregar una clase para aplicar estilos
  document.body.appendChild(rafagaImage); // Agregar la imagen al documento

  // Posicionar la imagen a la derecha del personaje
  const characterRect = characterImage.getBoundingClientRect();
  rafagaImage.style.position = 'absolute';
  rafagaImage.style.left = characterRect.right + 'px';

  // Mover la imagen hacia la derecha
  let moveInterval = setInterval(function () {
      const rafagaRect = rafagaImage.getBoundingClientRect();
      if (rafagaRect.right < window.innerWidth) {
          rafagaImage.style.left = (rafagaRect.left + 23) + 'px'; // Incremento de 10px para mover hacia la derecha

          // Detectar colisión
          if (rafagaRect.right >= segundoImage.getBoundingClientRect().left) {
              // Si hay colisión, eliminar la imagen y reducir la vida
              rafagaImage.remove();
              clearInterval(moveInterval); // Detener el movimiento

              if(Protegido2==true){

              vidaSegundo -= 10; // Reducir la vida del personaje derecho en 20
              vida2.style.width = vidaSegundo + '%'; // Actualizar la barra de vida
              if(vidaSegundo<=0){
                checkGameOver();
              }
              }else{
                vidaSegundo -= 20; // Reducir la vida del personaje derecho en 20
                vida2.style.width = vidaSegundo + '%'; // Actualizar la barra de vida
                if(vidaSegundo<=0){
                  checkGameOver();
                }
              }

             
            if(YaFueGolpeado2==true){
              segundoImage.src = 'Imagenes/GolpeadoIZq.png';
              YaFueGolpeado2=false;
              console.log("Este es un mensaje en la consola.");
              Protegido2=false;
            }
            if(Protegido2==false ){
              segundoImage.src = 'Imagenes/GolpeadoIZq.png';
          }else{
            YaFueGolpeado2=true;
          }


              setTimeout(function() {
                if(Protegido2==false){

                segundoImage.src = 'Imagenes/BardockIzquierda.png'; // Cambiar de nuevo a la imagen original
                }
              }, 400);
          }
      } else {
          clearInterval(moveInterval); // Detener el movimiento cuando la imagen esté fuera de la ventana
      }
  }, 30); // Intervalo de movimiento (ajustable según la velocidad deseada)
}
function ReducirKi() {
  Ki1 -= 25;
  if (Ki1 < 0) {
    Ki1 = 0;
  }
  const kiBarInner = document.getElementById('Ki1');
  kiBarInner.style.width = Ki1 + '%';
}
function ReducirKi2() {
  Ki2 -= 25;
  if (Ki2 < 0) {
    Ki2 = 0;
  }
  const kiBarInner = document.getElementById('Ki2');
  kiBarInner.style.width = Ki2 + '%';
}
function Golpear() {

  if (AtaqueGolpeUsado == false && NumTurno == 1 && AtaqueCargando == false) {
    AtaqueGolpeUsado = true;
    Protegido1 = false;
    PoderCargar = false;
    YaAtaco = true;

    const characterImage = document.querySelector('.character');
    characterImage.src = 'Imagenes/Movimiento.png';
    const segundoImage = document.getElementById('Segundo');
    const originalPosition = characterImage.getBoundingClientRect().left;
    const vida2 = document.getElementById('Vida2');

    let distanceMoved = 0; // Inicializar la distancia movida
    setTimeout(function () {
      // Cambiar la imagen original a movimiento
      characterImage.src = 'Imagenes/Moviendose.png';

      // Mover la imagen hacia la izquierda
      characterImage.style.transform = 'translateX(100px)';

      const moveInterval = setInterval(function () {
        // Cambiar la imagen original a movimiento
        characterImage.src = 'Imagenes/Moviendose.png';

        // Mover la imagen gradualmente hacia la derecha
        characterImage.style.transform = `translateX(${distanceMoved}px)`;

        distanceMoved += 100; // Ajusta el valor según lo que desees
        if (distanceMoved >= 1100) {
          clearInterval(moveInterval); // Detener el intervalo una vez alcanzada la posición deseada
          characterImage.src = 'Imagenes/Golpe1.png';
          if (Protegido2 == true) {
            vidaSegundo -= 5; // Reducir la vida del personaje derecho en 20
            vida2.style.width = vidaSegundo + '%'; // Actualizar la barra de vida
            if(vidaSegundo<=0){
              checkGameOver();
            }
          } else {
            vidaSegundo -= 10; // Reducir la vida del personaje derecho en 20
            vida2.style.width = vidaSegundo + '%'; // Actualizar la barra de vida
            if(vidaSegundo<=0){
              checkGameOver();
            }
          }

          if (Protegido2 == false) {
            segundoImage.src = 'Imagenes/GolpeadoIZq.png';
          }

          setTimeout(function () {
            if (Protegido2 == false) {
              segundoImage.src = 'Imagenes/BardockIzquierda.png';
            }
          }, 300);

          setTimeout(function () {
            // Cambiar la imagen original a movimiento
            characterImage.src = 'Imagenes/Golpe2.png';
            if (Protegido2 == false) {
              segundoImage.src = 'Imagenes/GolpeadoIZq.png';
            }

            if (Protegido2 == true) {
              vidaSegundo -= 5; // Reducir la vida del personaje derecho en 20
              vida2.style.width = vidaSegundo + '%'; // Actualizar la barra de vida
            } else {
              vidaSegundo -= 10; // Reducir la vida del personaje derecho en 20
              vida2.style.width = vidaSegundo + '%'; // Actualizar la barra de vida
            }

            setTimeout(function () {
              characterImage.src = 'Imagenes/EfectMov.png';
              setTimeout(function () {
                //regresar character a su posicion
                characterImage.src = 'Imagenes/MovimientoAtras.png';
                const returnInterval = setInterval(function () {
                  // Mover la imagen gradualmente hacia la izquierda
                  characterImage.style.transform = `translateX(${distanceMoved}px)`;

                  distanceMoved -= 100; // Ajusta el valor según lo que desees
                  if (distanceMoved <= -100) {
                    clearInterval(returnInterval); // Detener el intervalo una vez que regrese a la posición original
                    // Cambiar la imagen a la posición original
                    characterImage.src = 'Imagenes/idle.png';
                  }
                }, 30);
              }, 150);
              if (Protegido2 == false) {
                segundoImage.src = 'Imagenes/BardockIzquierda.png';
              }
            }, 300);
          }, 500);
        }
      }, 30); // Intervalo de tiempo para cada movimiento
    }, 300);
  } else {
    // Detectar cuál de las condiciones no se cumple
    let reason = '';
    if (AtaqueGolpeUsado == true) {
      reason = 'Ya se ha utilizado el golpe.';
    } else if (NumTurno != 1) {
      reason = 'No es tu turno.';
    } else if (AtaqueCargando == true) {
      reason = 'El ataque está cargando.';
    }

    // Obtener el botón y hacerlo temblar y cambiar de color
    const btnGolpe = document.getElementById('BtnGolpe');
    btnGolpe.style.animation = 'shake 0.5s';
    btnGolpe.style.backgroundColor = 'red';
    btnGolpe.classList.add('shake'); // Agregar clase para el efecto de temblor
    
    var botonPosicion = btnGolpe.getBoundingClientRect();

    // Calcula la posición para colocar el texto un poco más arriba que el botón
    var textoPosX = botonPosicion.left;
    var textoPosY = botonPosicion.top-410; // 20 píxeles más arriba

const reasonText = document.createElement('div');
    reasonText.textContent = reason;
    reasonText.style.position = 'relative';
    reasonText.style.left = textoPosX + "px";
    reasonText.style.top = textoPosY + "px";
    reasonText.style.color = 'Black';
    reasonText.style.fontWeight = 'bold'; // Hacer el texto más grueso
reasonText.style.fontFamily = 'Arial, sans-serif'; // Cambiar la fuente del texto
reasonText.style.fontSize = '16px'; // Tamaño de fuente
reasonText.style.padding = '8px'; // Añadir espacio interno alrededor del texto
reasonText.style.borderRadius = '5px'; // Añadir bordes redondeados
//reasonText.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Color de fondo semi-transparente

    document.body.appendChild(reasonText);

    // Después de 1 segundo, regresar el botón a la normalidad
    setTimeout(function () {
      btnGolpe.style.animation = '';
      btnGolpe.style.backgroundColor = '';
      reasonText.parentNode.removeChild(reasonText); // Eliminar el mensaje
      reasonText.remove;
      btnGolpe.classList.remove('shake'); // Quitar clase para detener el efecto de temblor
      OcultarBoption();

    }, 1000);
  }
}
function Golpear2() {
  OcultarBoption2();
  if(AtaqueGolpeUsado2==false  && NumTurno==2 && AtaqueCargando2==false){
    AtaqueGolpeUsado2=true
     Protegido2=false;
     PoderCargar2=false;
     YaAtaco2=true;


  Protegido2=false;
  const characterImage = document.querySelector('.character');
  const segundoImage = document.getElementById('Segundo');
  const vida1 = document.getElementById('Vida1');

  let distanceMoved = 0; // Inicializar la distancia movida
  setTimeout(function() {
    // Cambiar la imagen original a movimiento
    segundoImage.src = 'Imagenes/MovimientoIzquierda.png';

    // Mover la imagen hacia la izquierda
    segundoImage.style.transform = 'translateX(-100px)'; 
    
    const moveInterval = setInterval(function() {
      // Cambiar la imagen original a movimiento
      segundoImage.src = 'Imagenes/MoviendoseIZQ.png';
  
      // Mover la imagen gradualmente hacia la izquierda
      segundoImage.style.transform = `translateX(${distanceMoved}px)`;
      
      distanceMoved -= 100; // Decremento para mover hacia la izquierda
      if (distanceMoved <= -1100) {
        clearInterval(moveInterval); // Detener el intervalo una vez alcanzada la posición deseada
        segundoImage.src = 'Imagenes/Golpe1IZQ.png';



        if(Protegido1==true){
          vidaPrimero -= 5; // Reducir la vida del personaje izquierdo en 10
          vida1.style.width = vidaPrimero + '%'; // Actualizar la barra de vida
          }
        else{
          vidaPrimero -= 10; // Reducir la vida del personaje izquierdo en 10
          vida1.style.width = vidaPrimero + '%'; // Actualizar la barra de vida
          }

          if(Protegido1==false){

        characterImage.src = 'Imagenes/Golpeado.png';
          }
        setTimeout(function() {
          // Cambiar la imagen original a movimiento

          if(Protegido1==false){

          characterImage.src = 'Imagenes/156215-ezgif.com-crop.png'; // Cambiar de nuevo a la imagen original
          }
        }, 300);

        setTimeout(function() {
          // Cambiar la imagen original a movimiento
          segundoImage.src = 'Imagenes/Golpe2IZQ.png';
          if(Protegido1==false){

          characterImage.src = 'Imagenes/Golpeado.png';
          }

          
          
          if(Protegido1==true){
            vidaPrimero -= 5; // Reducir la vida del personaje izquierdo en 10
            vida1.style.width = vidaPrimero + '%'; // Actualizar la barra de vida
            if(vidaPrimero<=0){
              checkGameOver();
            }
            }
          else{
            vidaPrimero -= 10; // Reducir la vida del personaje izquierdo en 10
            vida1.style.width = vidaPrimero + '%'; // Actualizar la barra de vida
            if(vidaPrimero<=0){
              checkGameOver();
            }
            }
          
          setTimeout(function() {
            segundoImage.src = 'Imagenes/EfectMov.png';
            setTimeout(function() {
              //regresar character a su posicion
              segundoImage.src = 'Imagenes/MovimientoAtrasIZQ.png';          
              const returnInterval = setInterval(function() {
                // Mover la imagen gradualmente hacia la derecha
                segundoImage.style.transform = `translateX(${distanceMoved}px)`;
                
                distanceMoved += 100; // Incremento para volver a la posición original
                if (distanceMoved >=100) {
                  clearInterval(returnInterval); // Detener el intervalo una vez que regrese a la posición original
                  // Cambiar la imagen a la posición original
                  segundoImage.src = 'Imagenes/BardockIzquierda.png';
                }
              }, 30);
            }, 150);


            if(Protegido1==false){

            characterImage.src = 'Imagenes/156215-ezgif.com-crop.png';
          }
          }, 300);
        }, 500);
      }
    }, 30); // Intervalo de tiempo para cada movimiento
  }, 300);
}
}
function AcabarTurno1(){
  if(NumTurno==1){
  NumTurno=2;
  console.log(NumTurno);
   AtaqueGolpeUsado2=false;
   AtaqueGolpeUsado=false;

   AtaqueKiUsado2=false;
  AtaqueCargadoUsado2=false;
  CubiertoUsado2=false;
  document.querySelector('.player1-label').style.backgroundColor = 'transparent';

  // Añadir el fondo vino al texto "Player2"
  document.querySelector('.player2-label').style.backgroundColor = '#800020';
  if(AtaqueCargando2==true){
    AtaqueCargando2=false;

  RafagaC2();
  checkGameOver();
  }
}
}
function AcabarTurno2(){
  if(NumTurno==2){

  NumTurno=1;
  console.log(NumTurno);

   AtaqueGolpeUsado=false;
   AtaqueKiUsado=false;
  AtaqueCargadoUsado=false;
  CubiertoUsado=false;
  document.querySelector('.player2-label').style.backgroundColor = 'transparent';
  document.querySelector('.player1-label').style.backgroundColor = '#800020';
  if(AtaqueCargando==true){
    AtaqueCargando=false;
    RafagaC();
    checkGameOver();

  }
  }
}
function AtaqueC(){
  if(AtaqueKiUsado==false && NumTurno==1 && AtaqueGolpeUsado==false){

  OcultarBoption();
  if(AtaqueCUsado==false  && NumTurno==1 && PoderCargar==true){
    
    AtaqueCUsado=true;
    PoderCargar=false;
    const characterImage = document.querySelector('.character');
    characterImage.src = 'Imagenes/Cargar.png';
    AtaqueCargando=true;

}
}else {
  // Detectar cuál de las condiciones no se cumple
  let reason = '';
  if (AtaqueKiUsado == true) {
    reason = 'No se puede cargar despues de atacar.';
  } else if (NumTurno != 1) {
    reason = 'No es tu turno.';
  } else if (AtaqueCargando == true) {
    reason = 'El ataque está cargando.';
  }

  // Obtener el botón y hacerlo temblar y cambiar de color
  const btnGolpe = document.getElementById('BtnCargado');
  btnGolpe.style.animation = 'shake 0.5s';
  btnGolpe.style.backgroundColor = 'red';
  btnGolpe.classList.add('shake'); // Agregar clase para el efecto de temblor
  
  var botonPosicion = btnGolpe.getBoundingClientRect();

  // Calcula la posición para colocar el texto un poco más arriba que el botón
  var textoPosX = botonPosicion.left;
  var textoPosY = botonPosicion.top-410; // 20 píxeles más arriba

const reasonText = document.createElement('div');
  reasonText.textContent = reason;
  reasonText.style.position = 'relative';
  reasonText.style.left = textoPosX + "px";
  reasonText.style.top = textoPosY + "px";
  reasonText.style.color = 'Black';
  reasonText.style.fontWeight = 'bold'; // Hacer el texto más grueso
reasonText.style.fontFamily = 'Arial, sans-serif'; // Cambiar la fuente del texto
reasonText.style.fontSize = '16px'; // Tamaño de fuente
reasonText.style.padding = '8px'; // Añadir espacio interno alrededor del texto
reasonText.style.borderRadius = '5px'; // Añadir bordes redondeados
//reasonText.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Color de fondo semi-transparente

  document.body.appendChild(reasonText);

  // Después de 1 segundo, regresar el botón a la normalidad
  setTimeout(function () {
    btnGolpe.style.animation = '';
    btnGolpe.style.backgroundColor = '';
    reasonText.parentNode.removeChild(reasonText); // Eliminar el mensaje
    reasonText.remove;
    btnGolpe.classList.remove('shake'); // Quitar clase para detener el efecto de temblor
    OcultarBoption();

  }, 1000);
}
}
function AtaqueC2(){
  OcultarBoption2();
  if(AtaqueCUsado2==false  && NumTurno==2 && PoderCargar2==true){
    AtaqueCUsado2=true;
    PoderCargar2=false;
    const segundoImage = document.getElementById('Segundo');
    segundoImage.src = 'Imagenes/CargarIZQ.png';
    AtaqueCargando2=true;

}
}
function RafagaC(){
  const characterImage = document.querySelector('.character');
  const segundoImage = document.getElementById('Segundo');
  const vida2 = document.getElementById('Vida2');
  const vida1 = document.getElementById('Vida1');


  characterImage.src = 'Imagenes/AtaqueC.png';



  const rafagaImage = document.createElement('img');
  rafagaImage.src = 'Imagenes/BolaCargada.png'; // Ruta de la primera imagen de la ráfaga
  rafagaImage.classList.add('rafagaC-image'); // Agregar una clase para aplicar estilos
  document.body.appendChild(rafagaImage); // Agregar la imagen al documento

  // Posicionar la imagen a la derecha del personaje
  const characterRect = characterImage.getBoundingClientRect();
  rafagaImage.style.position = 'absolute';
  rafagaImage.style.left = characterRect.right + 'px';

  // Mover la imagen hacia la derecha
  let moveInterval = setInterval(function () {
      const rafagaRect = rafagaImage.getBoundingClientRect();
      if (rafagaRect.right < window.innerWidth) {
          rafagaImage.style.left = (rafagaRect.left + 30) + 'px'; // Incremento de 10px para mover hacia la derecha

          // Detectar colisión
          if (rafagaRect.right >= segundoImage.getBoundingClientRect().left) {
              // Si hay colisión, eliminar la imagen y reducir la vida
              rafagaImage.remove();
              clearInterval(moveInterval); // Detener el movimiento

              vidaSegundo -= 50; // Reducir la vida del personaje derecho en 20
              vida2.style.width = vidaSegundo + '%'; // Actualizar la barra de vida
              if(vidaSegundo<=0){
                checkGameOver();
              }

             
            if(YaFueGolpeado2==true){
              segundoImage.src = 'Imagenes/GolpeadoIZq.png';
              YaFueGolpeado2=false;
              console.log("Este es un mensaje en la consola.");
              Protegido2=false;
            }
            if(Protegido2==false ){
              segundoImage.src = 'Imagenes/GolpeadoIZq.png';
          }else{
            YaFueGolpeado2=true;
          }
          characterImage.src = 'Imagenes/156215-ezgif.com-crop.png';


              setTimeout(function() {
                if(Protegido2==false){

                segundoImage.src = 'Imagenes/BardockIzquierda.png'; // Cambiar de nuevo a la imagen original
                }
              }, 400);
          }
      } else {
          clearInterval(moveInterval); // Detener el movimiento cuando la imagen esté fuera de la ventana
      }
  }, 25); // Intervalo de movimiento (ajustable según la velocidad deseada)
}
function RafagaC2() {
  const characterImage = document.querySelector('.character');
  const segundoImage = document.getElementById('Segundo');
  const vida2 = document.getElementById('Vida2');
  const vida1 = document.getElementById('Vida1');



  segundoImage.src = 'Imagenes/AtaqueCIZQ.png';



  // Crear la nueva imagen
  const rafagaImage = document.createElement('img');
  rafagaImage.src = 'Imagenes/BolaCargadaIZQ.png'; // Ruta de la primera imagen de la ráfaga
  rafagaImage.classList.add('rafagaC-image'); // Agregar una clase para aplicar estilos
  document.body.appendChild(rafagaImage); // Agregar la imagen al documento

  // Posicionar la imagen a la derecha del personaje
  const segundoRect = segundoImage.getBoundingClientRect();
  rafagaImage.style.position = 'absolute';
  rafagaImage.style.left = segundoRect.left + 'px';

  // Mover la imagen hacia la izquierda
  let moveInterval = setInterval(function () {
      const rafagaRect = rafagaImage.getBoundingClientRect();
      if (rafagaRect.left > 0) {
          rafagaImage.style.left = (rafagaRect.left - 29) + 'px'; // Decremento de 10px para mover hacia la izquierda

          // Detectar colisión
          if (rafagaRect.right <= characterImage.getBoundingClientRect().right) {
              // Si hay colisión, eliminar la imagen y reducir la vida
              rafagaImage.remove();
              clearInterval(moveInterval); // Detener el movimiento



                vidaPrimero -= 50; // Reducir la vida del personaje izquierdo en 20
                vida1.style.width = vidaPrimero + '%'; // Actualizar la barra de vida
                if(vidaPrimero<=0){
                  checkGameOver();
                }
              if(YaFueGolpeado1==true){
                characterImage.src = 'Imagenes/Golpeado.png';
                YaFueGolpeado1=false;
                console.log("Este es un mensaje en la consola.");
                Protegido1=false;
              }
              if(Protegido1==false ){
                characterImage.src = 'Imagenes/Golpeado.png';
              }else{
              YaFueGolpeado1=true;
            }

            segundoImage.src = 'Imagenes/BardockIzquierda.png';

              
              setTimeout(function() {
                if(Protegido1==false){

                characterImage.src = 'Imagenes/156215-ezgif.com-crop.png'; // Cambiar de nuevo a la imagen original
                }
              }, 400);
          }
      } else {
          clearInterval(moveInterval); // Detener el movimiento cuando la imagen esté fuera de la ventana
      }
  }, 25); // Intervalo de movimiento (ajustable según la velocidad deseada)
}
function checkGameOver() {
  if (vidaSegundo <= 0 || vidaPrimero <= 0) {
      document.getElementById('gameOver').style.display = 'flex';
  }
}
document.getElementById('menuButton').addEventListener('click', () => {
  window.location.href = 'inicio.html';
});
document.addEventListener('DOMContentLoaded', () => {
  const selectedPlanetPlayer1 = localStorage.getItem('selectedPlanetPlayer1');
  const selectedPlanetPlayer2 = localStorage.getItem('selectedPlanetPlayer2');

  if (selectedPlanetPlayer1) {
    console.log(`Planeta seleccionado por el Jugador 1: ${selectedPlanetPlayer1}`);
    document.body.style.backgroundImage = `url('${selectedPlanetPlayer1}')`;
  }

  if (selectedPlanetPlayer2) {
    console.log(`Planeta seleccionado por el Jugador 2: ${selectedPlanetPlayer2}`);
    document.body.style.backgroundImage = `url('${selectedPlanetPlayer2}')`;
  }

  // Aquí puedes actualizar el DOM o realizar otras acciones según sea necesario
});



document.addEventListener('DOMContentLoaded', (event) => {
  const player1Character = localStorage.getItem('player1Character');
  const player1Image = localStorage.getItem('player1Image');
  const player2Character = localStorage.getItem('player2Character');
  const player2Image = localStorage.getItem('player2Image');

  if (player1Character && player2Character) {
    console.log(`Imagen de Jugador 1: ${player1Image}`);
    console.log(`Imagen de Jugador 2: ${player2Image}`);

    // Crear elementos para mostrar las imágenes y nombres
    const player1Div = document.createElement('div');
    player1Div.style.float = 'left';
    player1Div.style.width = '20%';
    player1Div.style.textAlign = 'center';
    player1Div.style.marginTop = '80px'; // Agregar margen superior de 20px
    player1Div.innerHTML = `
      <img src="${player1Image}" alt="${player1Character}" style="max-width: 50%; height: auto;">
    `;

    const player2Div = document.createElement('div');
    player2Div.style.float = 'right';
    player2Div.style.width = '20%';
    player2Div.style.textAlign = 'center';
    player2Div.style.marginTop = '80px'; // Agregar margen superior de 20px
    player2Div.innerHTML = `
      <img src="${player2Image}" alt="${player2Character}" style="max-width: 50%; height: auto;">
    `;

    // Crear un contenedor para ambos jugadores
    const playersContainer = document.createElement('div');
    playersContainer.style.clear = 'both'; // Limpiar flotadores
    playersContainer.appendChild(player1Div);
    playersContainer.appendChild(player2Div);

    // Agregar el contenedor al cuerpo del documento
    document.body.appendChild(playersContainer);
  } else {
    alert('No se seleccionaron personajes para ambos jugadores.');
  }
});

