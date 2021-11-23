'use strict';

const score1el = document.querySelector('#score--0');
const socre2el = document.getElementById('score--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
const btn_new = document.querySelector('.btn--new');
const btn_roll = document.querySelector('.btn--roll');
const btn_hold = document.querySelector('.btn--hold');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');

score1el.textContent = 0;
socre2el.textContent = 0;

dice.classList.add('hidden');

let player = 0;
const playerScore = [0, 0];

const current = [current0, current1];
const playertotal = [score1el, socre2el];

const switching = function () {
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

let select = 0;
let gameIsOn = true;
btn_roll.addEventListener('click', function () {
  if (gameIsOn) {
    let dicenumber = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${dicenumber}.png`;
    if (dicenumber != 1) {
      player += dicenumber;
      current[select].textContent = player;
    } else {
      player = 0;
      current[select].textContent = player;
      switching();
      select = select == 0 ? 1 : 0;
    }
  }
});

btn_hold.addEventListener('click', function () {
  if (gameIsOn) {
    playerScore[select] += player;
    playertotal[select].textContent = playerScore[select];
    player = 0;
    current[select].textContent = player;
    if (playerScore[select] >= 20) {
      document
        .querySelector(`.player--${select}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${select}`)
        .classList.add('player--winner');
      gameIsOn = false;
    } else {
      switching();
      select = select == 0 ? 1 : 0;
    }
  }
});
btn_new.addEventListener('click', function () {
  gameIsOn = true;
  playerScore[0] = 0;
  playerScore[1] = 0;
  player = 0;
  playertotal[0].textContent = 0;
  playertotal[1].textContent = 0;
  current[0].textContent = 0;
  current[1].textContent = 0;
  dice.classList.add('hidden');

  document
    .querySelector(`.player--${select}`)
    .classList.remove('player--winner');
  if (select == 1) {
    select = select == 0 ? 1 : 0;
    switching();
  }
});
