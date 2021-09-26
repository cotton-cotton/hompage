const body = document.querySelector('body');
const box = document.querySelector('.box-container');

const clickAudio = new Audio("audio/모래 해변가 파도소리.mp3");

function playBackGroundMusic() {
clickAudio.play();
clickAudio.volume = 0.2;
setTimeout(() => {
 clickAudio.pause();
  }, 6500);
}
body.addEventListener('click', playBackGroundMusic);



