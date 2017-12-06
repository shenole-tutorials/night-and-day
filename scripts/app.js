

const nightButton = document.querySelector('#night');
const dayButton = document.querySelector('#day');
const skyScape = document.querySelector('.sky');
const starScape = document.querySelector('.stars');
const nightLandscape = document.querySelector('.land-overlay');


nightButton.addEventListener('click', function() {
  if(skyScape.className != 'day-time') {
    starScape.classList.add('make-bright');
    skyScape.classList.add('night-time');
    nightLandscape.classList.add('darken');
  }
});

dayButton.addEventListener('click', function() {
  if(skyScape.className != 'night-time') {
    starScape.classList.add('fade');
    skyScape.classList.add('day-time');
    nightLandscape.classList.add('lighten');
  }
});
