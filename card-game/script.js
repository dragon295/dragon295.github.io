class AudioController {
  constructor() {
    this.bgMusic = new Audio("audio/the-forest-of-good-and-evil-2947.mp3");
    this.flipSound = new Audio("audio/sfx-boing12-cut.mp3");
    this.matchSound = new Audio("audio/SF-ok-cut.mp3");
    this.victorySound = new Audio("audio/sfx-victory6.mp3");
    this.gameOverSound = new Audio(
      "audio/mixkit-little-piano-game-over-1944.wav"
    );
    this.bgMusic.volume = 0.5;
    this.bgMusic.loop = true;
  }

  startMusic() {
    this.bgMusic.play();
  }

  stopMusic() {
    this.bgMusic.pause();
    this.bgMusic.currentTime = 0;
  }
  flip() {
    this.flipSound.play();
  }
  match() {
    this.matchSound.play();
  }
  victory() {
    this.stopMusic();
    this.victorySound.play();
  }
  gameOver() {
    this.stopMusic();
    this.gameOverSound.play();
  }
}

class MatchTheCard {
  constructor(totalTime, cards) {
    this.cardsArray = cards;
    this.totalTime = totalTime;
    this.timeRemaining = totalTime;
    this.timer = document.getElementById("time-remaining");
    this.ticker = document.getElementById("flips");
    this.audioController = new AudioController();
  }

  startGame() {
    this.cardToCheck = null;
    this.totalClicks = 0;
    this.timeRemaining = this.totalTime;
    this.matchedCards = [];
    this.busy = true;

    setTimeout(() => {
      this.audioController.startMusic();
      this.shuffleCards();
      this.countdown = this.startCountDown();
      this.busy = false;
    }, 500);

    this.hideCards();
    this.timer.innerText = this.timeRemaining;
    this.ticker.innerText = this.totalClicks;
  }

  startCountDown() {
    return setInterval(() => {
      this.timeRemaining--;
      this.timer.innerText = this.timeRemaining;
      if (this.timeRemaining === 0) {
        this.gameOver();
      }
    }, 1000);
  }

  gameOver() {
    clearInterval(this.countdown);
    this.audioController.gameOver();
    document.getElementById("game-over-text").classList.add("visible");
  }

  victory() {
    clearInterval(this.countdown);
    this.audioController.victory();
    document.getElementById("victory-text").classList.add("visible");
  }

  hideCards() {
    this.cardsArray.forEach((card) => {
      card.classList.remove("visible");
    });
  }


  checkCardForMatch(card) {
    if (this.getCardType(card) === this.getCardType(this.cardToCheck))
      this.cardMatch(card, this.cardToCheck);
    else this.cardMissMatch(card, this.cardToCheck);

    this.cardToCheck = null;
  }

  getCardType(card) {
    return card.querySelectorAll(".card-value")[0].src;
  }

  cardMatch(card1, card2) {
    this.matchedCards.push(card1);
    this.matchedCards.push(card2);
    this.audioController.match();
    if (this.matchedCards.length === this.cardsArray.length) this.victory();
  }

  cardMissMatch(card1, card2) {
    this.busy = true;
    setTimeout(() => {
      card1.classList.remove("visible");
      card2.classList.remove("visible");
      this.busy = false;
    }, 1000)
  }

  shuffleCards() {
    for (let i = this.cardsArray.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      this.cardsArray[randomIndex].style.order = i;
      this.cardsArray[i].style.order = randomIndex;
    }
  }


  flipCard(card) {
    if (this.canFlipCard(card)) {
      this.audioController.flip();
      this.totalClicks++;
      this.ticker.innerText = this.totalClicks;
      card.classList.add("visible");
      
      if (this.cardToCheck) {
        this.checkCardForMatch(card);
      } else {
        this.cardToCheck = card;
      }
    }
  }

  canFlipCard(card) {
    return (
      !this.busy &&
      !this.matchedCards.includes(card) &&
      card !== this.cardToCheck
    );
  }

}

if (document.readyState === "loading")
  document.addEventListener("DOMContentLoaded", ready());
else ready();

function ready() {
  let overlays = Array.from(document.querySelectorAll(".overlay-text"));
  let cards = Array.from(document.querySelectorAll(".card"));
  let game = new MatchTheCard(100, cards);

  overlays.forEach((overlay) => {
    overlay.addEventListener("click", () => {
      overlay.classList.remove("visible");
      game.startGame();
    });
  });

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      game.flipCard(card);
    });
  });
}
