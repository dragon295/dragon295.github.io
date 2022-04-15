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
  "#079992",
  "#FFF6E5",
  "#FF7F66",
  "#F79F1F",
  "#EA2027",
  "#05c46b",
  "#1e272e",
  "#7158e2",
];

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

// Objects
class Particle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 0.05;
    this.distanceFromCenter = utils.randomIntFromRange(50, 120);
    this.lastMouse = { x: x, y: y };
  }

  update() {
    const lastPoint = {
      x: this.x,
      y: this.y,
    };

    this.radians += this.velocity;

    this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.15;
    this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.15;

    this.x =
      this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter;
    this.y =
      this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter;

    this.draw(lastPoint);
  }

  draw(lastPoint) {
    c.beginPath();
    c.strokeStyle = this.color;
    c.lineWidth = this.radius;
    c.moveTo(lastPoint.x, lastPoint.y);
    c.lineTo(this.x, this.y);
    c.stroke();
    c.closePath();
  }
}

// Implementation
let particles;
function init() {
  particles = [];

  for (let i = 0; i < 100; i++) {
    const radius = Math.random() * 2 + 3;
    const color = utils.randomColor(colors);
    particles.push(
      new Particle(canvas.width / 2, canvas.height / 2, radius, color)
    );
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "rgba(255,255,255,0.05)";
  c.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
  });
}

init();
animate();
