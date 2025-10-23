// Ayah Ghazouli - Oct 22, 2025
// Project: Princess Castle Game
// Source: https://github.com/wesbos/JavaScript30
// I did add a new things like Auto-start
// I made the game slower so it's easier to play




const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) return randomHole(holes);
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(500, 1000); 
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => timeUp = true, 30000); //  I did it for 30 seconds
}

moles.forEach(mole => mole.addEventListener('click', function(e) {
  if (!e.isTrusted) return;
  score++;
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
  scoreBoard.style.color = '#e91e63';
  setTimeout(() => scoreBoard.style.color = '', 200);
}));

window.addEventListener('load', startGame);