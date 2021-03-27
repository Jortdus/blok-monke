function calculateBar() {
    const like = document.querySelector('#bar #likes');
    const dislike = document.querySelector('#bar #dislikes');

    if(!like){
        return
    }

    // let mag ge reasigned worden. Dit doe je bijvoorbeeld bij counters zoals hier
    let likes = +like.dataset.like,
        dislikes = +dislike.dataset.dislike;
    
        console.log(likes);
        console.log(dislikes);

    // De calculatie voor de balk om het gemiddelde te laten zien
    const total = likes + dislikes;
    const percentageLikes = (likes / total) * 100;
    const percentageDisLikes = (dislikes / total) * 100;
    like.style.width = percentageLikes.toString() + '%';
    dislike.style.width = percentageDisLikes.toString() + '%';
}

// Het laad alleen al ben ik op de mensen pagina
window.addEventListener('load', () => {
    calculateBar();
})

