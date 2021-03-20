// Selecteer alles met het id button en voeg voor elke button een EventListener toe met een click en de fucntie VerwijderLike
document.querySelectorAll('button').forEach(button => button.addEventListener('click', verwijderLike))


function verwijderLike(klikevent) {
    // Je haalt het id op en plaats je het in de URL vervolgens gebruik je de methode DELETE
    fetch('/delete?id=' + klikevent.target.dataset.id, {
        method: 'DELETE' 
    })
    .then(response => {
        return response.text()
    }).then(tekst => {
        // Als de tekst hetzelfde is als Gelukt reload hij zodat de verwijdere persoon weg is.
        if (tekst === 'Gelukt') window.location.reload()
    })
}
