document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      var buttons = document.querySelectorAll('.falling-button');
      buttons.forEach(function(button, index) {
          setTimeout(function() {
              button.style.opacity = "1";
          }, index * 300); // Retraso para que parezca que caen uno tras otro
      });
  }, 1500); // Retraso inicial de 1.5 segundos
});
