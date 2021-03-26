// Selecteer alles met het id verwijderButton uit het document en voeg aan elke een EventListener toe met click en de functie verwijderGame
document.querySelectorAll('#updateButton').forEach(button => button.addEventListener('click', updateGame))
// const gameVerwijdertTextP = document.querySelector('#gameVerwijdertText');

function updateGame(clickevent) {
  // Hier haal je het id op en doe je het in de url, dan pas je de method DELETE toe
  fetch('/updateGame?id=' + clickevent.target.dataset.id, {
      method: 'UPDATE'
    })
    .then(response => {
      return response.text()
    }).then(tekst => {
      // Als de tekst gelukt is reload hij de window om te laten zien dat iets weg is
      if (tekst === 'gelukt') {
        // gameVerwijdertTextP.innerText = 'Het verwijderen is gelukt!'
        window.location.reload()
        setTimeout(function() {
            window.location.reload()
          },
          1000
        );
      }
    })
}
