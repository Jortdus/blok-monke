const forwardnavbutton = document.querySelector('#forwardnav');
const backwardnavbutton = document.querySelector('#backwardnav');

// script for the page nav
function goForward( eventForward ) {
  eventForward.preventDefault();
  window.history.forward();
}

function goBack( eventBackward ) {
  eventBackward.preventDefault();
  window.history.back();
}

forwardnavbutton.addEventListener("click", goForward);
backwardnavbutton.addEventListener("click", goBack);
