import * as utils from "../../util/utils.js";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const center = {
  x: canvas.width / 2,
  y: canvas.height / 2,
};

let angle = 0;

const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

// Event Listeners
addEventListener("mousemove", (event) => {
  gsap.to(mouse, {
    x: event.clientX - center.x,
    y: event.clientY - center.y,
    duration: 1,
  });
  mouse.x = event.clientX - center.x;
  mouse.y = event.clientY - center.y;

  angle = Math.atan2(mouse.y, mouse.x);
});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

// Objects
class Particle {
  constructor(x, y, radius, color, distance) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.distance = distance;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

  update(time) {
    this.draw();

    const { cos, sin } = Math;
    const { distance } = this;
    this.x = center.x + distance * cos(-angle) * sin(time + distance);
    this.y =
      center.y +
      distance * sin(-angle) * cos(time + distance) * sin(time + distance);
  }
}

// Implementation
let particles;
function init() {
  particles = [];
  let particleCount = 300;
  let hueIncrement = 360 / particleCount;
  let baseRadius = 5;
  let radiusIncrement = baseRadius / particleCount;
  for (let i = 0; i < particleCount; i++) {
    const x = canvas.width / 2 + i * Math.cos(Math.PI);
    const y = canvas.height / 2 + i * Math.sin(-Math.PI);
    particles.push(
      new Particle(x, y, baseRadius, `hsl(${hueIncrement * i}, 50%, 50%)`, i)
    );
  }
}

// Animation Loop
let time = 0;
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "rgba(0,0,0,0.05)";
  c.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update(time);
  });

  time += 0.0085;
}

init();
animate();
