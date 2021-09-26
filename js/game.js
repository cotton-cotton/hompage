const gamePage = document.querySelector('game-page');

const gameStartButton = document.querySelector(".game-start-button");
const gameReturnButton = document.querySelector(".game-return-button");
const gameResetButton = document.querySelector(".game-reset-button");
const gameReturnButtonTwo = document.querySelector(".game-return-button-two");

const headLine = document.querySelector(".headline");
const gameTimer = document.querySelector(".game-timer");
const containerBefore = document.querySelector(".container-before");
const container = document.querySelector(".container");
const border = document.querySelector(".boarder");
const card = document.querySelectorAll(".card");
const cardInner = document.querySelectorAll(".card-inner");
const cardFront = document.querySelectorAll(".card-front");
const cardBack = document.querySelectorAll(".card-back");

const gameScoreBoard = document.querySelector(".game-score-board span");

const endingImage = document.querySelector(".ending-image");
const endingImageFile = document.querySelector(".ending-image img");
const winnerMessage = document.querySelector(".win");
const loserMessage = document.querySelector(".lose");
const boarder = document.querySelector(".boarder");


const HIDDEN_CLASS = "hidden";
const CARD_FLIPPED = "flipped";

const quizImages = [
  "cotton_1.JPG", "cotton_2.JPG", "cotton_3.jpg",
  "cotton_4.PNG", "cotton_5.jpg", "cotton_6.JPG",
  "cotton_7.JPG", "cotton_8.JPG", "cotton_9.JPG",
  "cotton_10.JPG"
];

const quizImageCopy = quizImages.concat(quizImages);

let imageList = [];

const backgroundAudio = new Audio("audio/브금.mp3");
const clickAudio = new Audio("audio/멍-멍3.mp3");
const failedGameAudio = new Audio("audio/개 짓는 소리.MP3");
const succeedGameAudio = new Audio("audio/단체박수1.MP3");

function goingBack() {
  location.href = 'main.html';
}
gameReturnButton.addEventListener('click', goingBack);
gameReturnButtonTwo.addEventListener('click', goingBack);

for(let i = 0; i < card.length; i++){
  const cardImages = document.createElement("img");
  cardImages.setAttribute("class", "game-card-image");
  imageList = imageList.concat(quizImageCopy.splice(Math.floor(Math.random() * quizImageCopy.length), 1));
  cardImages.src = `img/${imageList[i]}`;
  cardBack[i].appendChild(cardImages);
}

card.forEach((aCard) => {
  gameStartButton.addEventListener("click", onFlippedCard);
  function onFlippedCard(){
  backgroundAudio.play();
  gameScoreBoard.textContent = gameScore;
  headLine.classList.remove(HIDDEN_CLASS);
  container.classList.remove(HIDDEN_CLASS);
  containerBefore.classList.add(HIDDEN_CLASS);
  gameStartButton.classList.add(HIDDEN_CLASS);
  gameReturnButton.classList.add(HIDDEN_CLASS);
  border.classList.add(HIDDEN_CLASS);
  aCard.classList.add(CARD_FLIPPED);
  setTimeout(() => {
  clickAble = true;
  aCard.classList.remove(CARD_FLIPPED);
  }, 3000);
  onGameTimer ();
  }
});


function onGameTimer () {
  let time = 40;
  gameTimer.classList.add(HIDDEN_CLASS);
let timeLeftId = setTimeout(() => {
  let interval = setInterval(() => {
    gameTimer.classList.remove(HIDDEN_CLASS);
    gameTimer.textContent = `${time --}초 남았습니다!`;
    if(time === 0){
      isWin = false;
      clearInterval(interval);
      loserMessage.classList.remove(HIDDEN_CLASS);
      onShowingResult ();
    }

  function handleClickWinner () {
    if (gameScore === maxScore) {
      clearInterval(interval);
    isWin = true;
    winnerMessage.classList.remove(HIDDEN_CLASS);
    onShowingResult ();
  }}
  handleClickWinner(); }, 1000);
}, 3000);

}

  let cardList = [];
  let clickCount = [];
  let answerList = [];
  let arrNum = 0;
  let answerNum = 0;
  let gameScore = 0;
  const maxCount = 2;
  const maxScore = 10;
  let clickAble = true;

  cardFront.forEach((aCard) => {
  aCard.addEventListener("click", handleClickGameOn);
  function handleClickGameOn (event) {
  const cardMain = aCard.parentNode.parentNode;
  cardMain.classList.add(CARD_FLIPPED);
  const findingImagesSource = aCard.nextElementSibling.firstElementChild.src;
  clickCount[arrNum++] = findingImagesSource;
  cardList[answerNum++] = cardMain;

  if (arrNum === maxCount) {
  if (clickCount[0] === clickCount[1]) {
  clickAudio.play();
  answerList.push(clickCount[0]);
  answerList.push(clickCount[1]);
  gameScore += 1;
  gameScoreBoard.textContent = gameScore;
  answerList = [];
  } else if (clickCount[0] !== clickCount[1]) {
  answerList.push(clickCount[0]);
  answerList.push(clickCount[1]);
  answerList = [];
  setTimeout(() => {
  cardList[0].classList.remove(CARD_FLIPPED);
  cardList[1].classList.remove(CARD_FLIPPED);
},500);
 }
  arrNum = 0;
  answerNum = 0;
} 
}});

  function onShowingResult () {
  headLine.classList.add(HIDDEN_CLASS);
  container.classList.add(HIDDEN_CLASS);
  gameResetButton.classList.remove(HIDDEN_CLASS);
  gameReturnButtonTwo.classList.remove(HIDDEN_CLASS);
  endingImage.classList.remove(HIDDEN_CLASS);
  endingImageFile.src = isWin ? 'img/winner.JPG' : 'img/loser.PNG';
  backgroundAudio.pause();
  clickAudio.pause();
  isWin ? succeedGameAudio.play() : failedGameAudio.play();
 }

 gameResetButton.addEventListener("click", handleClickGameReset);

 function handleClickGameReset () {
   gameScore = 0;
   gameScoreBoard.textContent = gameScore;
   succeedGameAudio.pause();
   failedGameAudio.pause();
   backgroundAudio.currentTime = 0;
   backgroundAudio.play();
   boarder.classList.add(HIDDEN_CLASS);
   winnerMessage.classList.add(HIDDEN_CLASS);
   loserMessage.classList.add(HIDDEN_CLASS);
   endingImage.classList.add(HIDDEN_CLASS);
   gameResetButton.classList.add(HIDDEN_CLASS);
   gameReturnButtonTwo.classList.add(HIDDEN_CLASS);
   gameReturnButton.classList.add(HIDDEN_CLASS);
   card.forEach((aCard) => { // 카드 배열 순회

  clickAble = true;
  headLine.classList.remove(HIDDEN_CLASS);
  container.classList.remove(HIDDEN_CLASS);
  containerBefore.classList.add(HIDDEN_CLASS);
  gameStartButton.classList.add(HIDDEN_CLASS);
  aCard.classList.add(CARD_FLIPPED); // 카드 열린 다음 3초후 다시 뒤집힘
  setTimeout(() => {
  clickAble = true;
  aCard.classList.remove(CARD_FLIPPED);
  }, 3000);
  onGameTimer ();
 });
}
