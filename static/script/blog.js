const writeablogtitleinput = document.querySelector('#writeablogtitle');
const writeablogmessagetextfield = document.querySelector('#writeablogmessage');

function checkTheWord() {
  if (writeablogtitleinput.value === 'star wars' || writeablogtitleinput.value === 'Star wars') {
    writeablogmessagetextfield.value = 'Jij altijd met je Star Wars'
  } else if (writeablogtitleinput.value === 'anime' || writeablogtitleinput.value === 'Anime') {
    writeablogmessagetextfield.value = 'Jij altijd met je anime'
  }
}
