function calculateBar() {
  const bar = document.getElementById('bar');

  // resultaten terug brengen naar JSON
  const likesEnDislikes = JSON.parse(bar.dataset.likesendislikes);

  // let mag ge reasigned worden. Dit doe je bijvoorbeeld bij counters zoals hier
  let likes = 0,
    dislikes = 0;

  // For loop om of likes of dislikes op te tellen
  for (let i = 0; i < likesEnDislikes.length; i++) {
    const likeOfDislike = likesEnDislikes[i];
    likes += likeOfDislike.like
    dislikes += likeOfDislike.dislike
    console.log(likeOfDislike);
  }

  // De calculatie voor de balk om het gemiddelde te laten zien
  const total = likes + dislikes;
  const percentageLikes = (likes / total) * 100;
  const percentageDisLikes = (dislikes / total) * 100;
  document.getElementById('likes').style.width = percentageLikes.toString() + '%';
  document.getElementById('dislikes').style.width = percentageDisLikes.toString() + '%';
}

// Het laad alleen al ben ik op de mensen pagina
window.addEventListener('load', () => {
  if (window.location.pathname == '/mensen') {
    calculateBar();
  }
})
