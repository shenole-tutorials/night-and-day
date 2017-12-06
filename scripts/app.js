const resetButton = document.querySelector('#reset');
const nightButton = document.querySelector('#night');
const dayButton = document.querySelector('#day');
const skyScape = document.querySelector('.sky');
const starScape = document.querySelector('.stars');
const nightLandscape = document.querySelector('.land-overlay');
const startScreen = document.querySelector('#overlay');

//Click "reset" button to go back to the start screen with instructions
resetButton.addEventListener('click', function() {
  //Clear previous classes
  starScape.classList.remove('fade');
  skyScape.classList.remove('day-time');
  nightLandscape.classList.remove('lighten');
  starScape.classList.remove('make-bright');
  skyScape.classList.remove('night-time');
  nightLandscape.classList.remove('darken');
  //Start screen appears
  startScreen.style.opacity = '.88';
});

//Click "night" button to move from day to night
nightButton.addEventListener('click', function() {
  //Start screen disappears
  startScreen.style.opacity = '0';
  //Clear previous classes
  starScape.classList.remove('fade');
  skyScape.classList.remove('day-time');
  nightLandscape.classList.remove('lighten');
  //Day to night animation is triggered
  if(skyScape.className != 'night-time') {
    setTimeout(
      function() {
        starScape.classList.add('make-bright');
        skyScape.classList.add('night-time');
        nightLandscape.classList.add('darken');
      },
    1);
  }
});

//Click "day" button to move from night to day
dayButton.addEventListener('click', function() {
  //Start screen disappears
  startScreen.style.opacity = '0';
  //Clear previous classessar
  starScape.classList.remove('make-bright');
  skyScape.classList.remove('night-time');
  nightLandscape.classList.remove('darken');
  //Night to day animation is triggered
  if(skyScape.className != 'day-time') {
    setTimeout(
      function() {
        starScape.classList.add('fade');
        skyScape.classList.add('day-time');
        nightLandscape.classList.add('lighten');
      },
    1);
  }
});
