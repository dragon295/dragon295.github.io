import * as utils from "../../util/utils.js";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: "",
  y: "",
};

let maxRadius = 35;
const colors = ["#ef473a", "#34e89e", "#004e92", "#093637"];

// Event Listeners
addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

class Particle {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = color;
  }

  draw() {
    c.save();
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
    c.restore();
  }

  update() {
    this.draw();

    if (this.x + this.radius > innerWidth || this.x - this.radius <= 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius <= 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    if (
      mouse.x - this.x < 70 &&
      mouse.x - this.x > -70 &&
      mouse.y - this.y < 70 &&
      mouse.y - this.y > -70 &&
      this.radius < maxRadius
    ) {
      this.radius += 1.5;
    } else if (this.radius > this.minRadius) {
      this.radius -= 1.5;
    }
  }
}

// Implementation
let particles;
function init() {
  particles = [];

  for (let i = 0; i < 400; i++) {
    let radius = Math.random() * 4 + 2;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 2;
    let dy = (Math.random() - 0.5) * 2;
    let color = utils.randomColor(colors);
    particles.push(new Particle(x, y, dx, dy, radius, color));
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
