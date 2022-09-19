const obstacles = [];

const pipeUp = new Image();
pipeUp.src = "./img/pipe-up.png";

const pipeDown = new Image();
pipeDown.src = "./img/pipe-down.png";

class Obstacle {
  constructor() {
    this.top = (Math.random() * canvas.height) / 3 + 50;
    this.bottom = (Math.random() * canvas.height) / 3 + 50;
    this.x = canvas.width;
    this.width = 50;
    this.color = `hsl(${hue}, 100%, 50%)`;
    this.counted = false;
  }
  draw() {
    c.fillStyle = this.color;
    c.save();
    c.drawImage(pipeDown, this.x, 0, this.width, this.top);
    c.drawImage(
      pipeUp,
      this.x,
      canvas.height - this.bottom,
      this.width,
      this.bottom
    );
    c.restore();
    // c.fillRect(this.x, 0, this.width, this.top);
    // c.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
  }

  update() {
    this.x -= gamespeed;
    if (!this.counted && this.x < bird.x) {
      score++;
      this.counted = true;
    }
    this.draw();
  }
}

function handleObstacle() {
  if (frame % 80 === 0) {
    obstacles.unshift(new Obstacle());
  }
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].update();
  }
  if (obstacles.length > 20) {
    obstacles.pop(obstacles[0]);
  }
}
