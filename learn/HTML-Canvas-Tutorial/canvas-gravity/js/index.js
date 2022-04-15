import * as utils from "../../util/utils.js";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const colors = [
  "#2185C5",
  "#7ECEFD",
  "#FF7F66",
  "#27ae60",
  "#e74c3c",
  "#fff200",
  "#c56cf0",
];

// Event Listeners
addEventListener("click", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;

  init();
});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

let gravity = 1;
let friction = 0.89;
// Objects
class Ball {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.stroke();
    c.fill();
    c.closePath();
  }

  update() {
    this.draw();

    if (
      this.x + this.radius + this.dx > innerWidth ||
      this.x - this.radius <= 0
    ) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius + this.dy > innerHeight) {
      this.dy = -this.dy * friction;
    } else {
      this.dy += gravity;
    }

    this.x += this.dx;
    this.y += this.dy;
  }
}

// Implementation
let particles;
function init() {
  particles = [];

  for (let i = 0; i < 300; i++) {
    let radius = utils.randomIntFromRange(12, 30);
    let x = utils.randomIntFromRange(radius, canvas.width - radius);
    let y = utils.randomIntFromRange(radius, canvas.height - radius);
    let dx = utils.randomIntFromRange(-2, 2);
    let dy = utils.randomIntFromRange(-2, 2);
    let color = utils.randomColor(colors);
    particles.push(new Ball(x, y, dx, dy, radius, color));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
  });
}

init();
animate();
