const dragon = new Image();
dragon.src = "./img/spritesheet.png";
class Bird {
  constructor() {
    this.x = 150;
    this.y = 200;
    this.vy = 0;
    this.weight = 1;
    this.originalWidth = 941;
    this.originalHeight = 600;
    this.width = this.originalWidth / 20;
    this.height = this.originalHeight / 20;
    this.frameX = 0;
  }

  draw() {
    c.fillStyle = `hsl(${hue}, 100%, 50%)`;
    // c.fillRect(this.x, this.y, this.width, this.height);
    c.drawImage(
      dragon,
      this.frameX * this.originalWidth,
      0,
      this.originalWidth,
      this.originalHeight,
      this.x - 5,
      this.y - 20,
      this.width * 1.5,
      this.height * 1.5
    );
  }

  update() {
    this.draw();

    let curve = Math.sin(angle) * 20;
    if (this.y > canvas.height - this.height * 4 + curve) {
      this.y = canvas.height - this.height * 4 + curve;
      this.vy = 0;
    } else {
      this.vy += this.weight;
      this.vy *= 0.9;
      this.y += this.vy;
    }
    if (this.y < 0 + this.height) {
      this.y = 0 + this.height;
      this.vy = 0;
    }

    if (spacePressed) this.flap();

    if (this.frameX >= 3) this.frameX = 0;
    else if (frame % 10 === 0) this.frameX++;
  }

  flap() {
    this.vy -= 2;
  }
}

const bird = new Bird();
