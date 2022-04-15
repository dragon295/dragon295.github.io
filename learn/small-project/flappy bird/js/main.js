const canvas = document.getElementById("canvas");
const btnStart = document.querySelector(".custom-btn");
const boxEndGame = document.querySelector(".box-end-game");
const c = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

// let btnRestart;
let spacePressed = false;
let angle = 0;
let hue = Math.floor(Math.random() * 10);
let frame = 0;
let score = 0;
let gamespeed = 2;

const gradient = c.createLinearGradient(0, 0, 0, 70);

gradient.addColorStop("0.4", "#fff");
gradient.addColorStop("0.5", "#000");
gradient.addColorStop("0.55", "#4040ff");
gradient.addColorStop("0.6", "#000");
gradient.addColorStop("0.9", "#fff");

const background = new Image();
background.src =
  "https://www.gameart2d.com/uploads/3/0/9/1/30917885/7579418_orig.jpg";

const bg = {
  x1: 0,
  x2: canvas.width,
  y: 0,
  width: canvas.width,
  height: canvas.height,
};

function handleBackground() {
  if (bg.x1 <= -bg.width + gamespeed) bg.x1 = bg.width;
  else bg.x1 -= gamespeed;
  if (bg.x2 <= -bg.width + gamespeed) bg.x2 = bg.width;
  else bg.x2 -= gamespeed;
  c.drawImage(background, bg.x1, bg.y, bg.width, bg.height);
  c.drawImage(background, bg.x2, bg.y, bg.width, bg.height);
}

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  handleBackground();
  handleObstacle();
  // c.fillRect(10, canvas.height - 90, 50, 50);
  bird.update();
  c.fillStyle = gradient;
  c.font = "75px Roboto";
  c.strokeText(score, 500, 75);
  c.fillText(score, 500, 75);
  handleParticles();
  if (handleCollisons()) return;
  requestAnimationFrame(animate);
  angle += 0.12;
  hue++;
  frame++;
}

animate();

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") spacePressed = true;
});

window.addEventListener("keyup", (e) => {
  if (e.code === "Space") spacePressed = false;
  bird.frameX = 0;
});

const img = new Image();
img.src = "./img/kisspng-explosion.png";

function handleCollisons() {
  for (let i = 0; i < obstacles.length; i++) {
    if (
      bird.x < obstacles[i].x + obstacles[i].width &&
      bird.x + bird.width > obstacles[i].x &&
      (bird.y < 0 + obstacles[i].top ||
        (bird.y > canvas.height - obstacles[i].bottom &&
          bird.y + bird.height < canvas.height))
    ) {
      c.drawImage(img, bird.x - 60, bird.y - 70, 150, 150);
      c.imageSmoothingQuality = "high";
      if (btnStart.style.display === "none" && canvas.style.display === "block") {
        setTimeout(() => {
          canvas.style.display = "none";
          let textScore = document.createElement("div");
          textScore.classList.add("score");
          textScore.innerText = `Game Over! your score is ${score}`;
          let btnRestart = document.createElement("button");
          btnRestart.classList.add("custom-btn", "btn-4");
          btnRestart.innerText = "Restart";
          boxEndGame.appendChild(textScore);
          boxEndGame.appendChild(btnRestart);
          btnRestart.addEventListener("click", () => {
            window.location.reload();
          });
        }, 500);
      }
      return true;
    }
  }
}

canvas.style.display = "none";
btnStart.addEventListener("click", () => {
  setTimeout(() => {
    btnStart.style.display = "none";
    canvas.style.display = "block";
  }, 200);
});
