const square = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score');


let result = 0;
let hitPosition;
let currentTime = timeLeft.textContent;
let timerId = null;

function randomSquare() {
  square.forEach(val => {
    val.classList.remove("mole");
  })

  let randomSquare = square[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole")
  hitPosition = randomSquare.id;
}

square.forEach(square => {
  square.addEventListener("click", () => {
    if(square.id === hitPosition) {
      result +=1;
      score.textContent = result;
      hitPosition = null
    }
  })
})

function moveMole() {
  timerId = setInterval(randomSquare, 1000)
}

moveMole()


function countDown() {
  currentTime--
  timeLeft.textContent = currentTime;
  if(currentTime === 0) {
    clearInterval(timerId);
    clearInterval(countDownIdTimer);
    alert("GAME OVER!! Your score is " + result)
    window.location.reload()
  }
}

let countDownIdTimer = setInterval(countDown, 1000); 