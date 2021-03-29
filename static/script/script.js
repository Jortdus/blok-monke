function calculateBar() {
    const like = document.querySelector('#bar #likes');
    const dislike = document.querySelector('#bar #dislikes');

    // let mag ge reasigned worden. Dit doe je bijvoorbeeld bij counters zoals hier
    // Door een + erbij te zetten laat je weten dat het nummers zijn en geen strings
    let likes = +like.dataset.like,
        dislikes = +dislike.dataset.dislike;

    // De calculatie voor de balk om het gemiddelde te laten zien
    const total = likes + dislikes;
    const percentageLikes = (likes / total) * 100;
    const percentageDisLikes = (dislikes / total) * 100;
    like.style.width = percentageLikes.toString() + '%';
    dislike.style.width = percentageDisLikes.toString() + '%';
}

// De code in werking zetten al kom je op een pagina
window.addEventListener('load', () => {
    calculateBar();
})
