let firstCard = 10;
let secondCard = 14;
let messageE = document.getElementById("msg");
let sumval = document.getElementById("sum");
let cardEl = document.getElementById("card");
let sum = firstCard+secondCard;
let message;
function startGame(){
  cardEl.textContent = "Cards:\t" + firstCard +"\t" + secondCard;
  sumval.innerHTML = "Sum:\t" + sum;
 if(sum <= 20){
  message = "Do you want to draw a new card?"
 }else if(sum == 21){
  message  = "Wohoo! you've got BlackJack!";
  hasBlackJack = true;
 }else{
  message = "You're out of the game!"
  isAlive = false;
 }
  messageE.innerHTML = message;
}

function newCard(){

  let drawn = 6;
  firstCard = secondCard;
  secondCard = drawn;
  sum += drawn;
  startGame();
}

