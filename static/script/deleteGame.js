// Selecteer alles met het id verwijderButton uit het document en voeg aan elke een EventListener toe met click en de functie verwijderGame
document.querySelectorAll('#verwijderButton').forEach(button => button.addEventListener('click', verwijderGame))
const deletedBlogTextP = document.querySelector('#deletedBlogText');

function verwijderGame(clickevent) {
  // Hier haal je het id op en doe je het in de url, dan pas je de method DELETE toe
  fetch('/deleteGame?id=' + clickevent.target.dataset.id, {
      method: 'DELETE'
    })
    .then(response => {
      return response.text()
    }).then(text => {
      // Als de tekst gelukt is reload hij de window om te laten zien dat iets weg is
      if (text === 'done') {
        deletedBlogTextP.innerText = 'Blog deleted!'
        setTimeout(function() {
            window.location.reload()
          },
          1000
        );
      }
    })
}
