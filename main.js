var joinButton = document.querySelector('.join-button');
joinButton.addEventListener('click', goToSecondState);

//Pay Now Button
var confirmButton = document.querySelector('.confirm-button');
confirmButton.addEventListener('click', goToThirdState);
//Cancel Button
var cancelButton = document.querySelector('.cancel-button');
cancelButton.addEventListener('click', goToFirstState);
//Events
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var panelsOne = document.querySelector('.panels-stage-1');
var panelsTwo = document.querySelector('.panels-stage-2');
var panelsThree = document.querySelector('.panels-stage-3');
//First state - Homepage
function goToFirstState() {
  left.style.display = 'block';
  right.style.width = '50%';
  panelsOne.style.display = 'block';
  panelsTwo.style.display = 'none';
}
//Second State - Join Page
function goToSecondState() {
  left.style.display = 'none';
  right.style.width = '100%';
  panelsOne.style.display = 'none';
  panelsTwo.style.display = 'block';
}
//Third state - Confirm Page
function goToThirdState() {
  panelsTwo.style.display = 'none';
  panelsThree.style.display = 'block';
}