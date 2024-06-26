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

// Utility Functions

// Event Handles

// Event Listeners

// start the game
