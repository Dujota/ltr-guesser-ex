/* eslint-disable prefer-const */
/**
 * Plan
 * initialize the app
 *
 *  pick a random letter
 *
 * wait for the user to type a key on their keyboard (NICE TO HAVE) or click a ltr button
 *
 * check the ltr chosen againt the ltr that was randomly chosen
 *
 * let the user know if they were right or wrong
 *  -- if wrong, deduct from the # of guesses and show a them the wrong guess, then render that wrong guess to the screen
 *  -- if wrong and they dont have any guesses left, show the losing message and updat the losses + reset/re-initialize the game
 *  -- if right, update the wins , show a winning message and reset/re-initialize the game
 */

// Game Variables
let wins = 0;
let losses = 0;
let guessesLeft = 10;
let userGuesses = [];
let randomLetter;
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

// UI Variables
const winsEl = document.querySelector('#wins');
const lossesEl = document.querySelector('#losses');
const guessesLeftEl = document.querySelector('#guesses-left');
const userGuessesEl = document.querySelector('#user-guesses');
const letterButtonsContainerEl = document.querySelector('#letter-buttons-container');

// Utility Functions
function computerChoice() {
  return Math.floor(Math.random() * letters.length);
}
// Event Handles

// Event Listeners

// start the game
function init() {
  winsEl.textContent = wins;
  lossesEl.textContent = losses;
  guessesLeftEl.textContent = guessesLeft;
  userGuessesEl.textContent = userGuesses;
}

init();
