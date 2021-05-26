import * as utils from "../../util/utils.js";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

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

const gravity = 0.03;
const friction = 0.99;
// Objects
class Particle {
  constructor(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
    this.opacity = 1;
  }

  draw() {
    c.save();
    c.globalAlpha = this.opacity;
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
    c.restore();
  }

  update() {
    this.draw();
    this.velocity.x *= friction;
    this.velocity.y *= friction;
    this.velocity.y += gravity;
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.opacity -= 0.005;
  }
}

// Implementation
let particles;
function init() {
  particles = [];
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "rgba(0, 0, 0, 0.05)";
  c.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle, i) => {
    if (particle.opacity > 0) {
      particle.update();
    } else {
      particles.splice(i, 1);
    }
  });
}

init();
animate();

addEventListener("click", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;

  const particleCount = utils.randomIntFromRange(300, 600);
  const radians = (Math.PI * 2) / particleCount;
  const power = utils.randomIntFromRange(5, 15);
  // console.log(mouse);
  for (let i = 0; i < particleCount; i++) {
    particles.push(
      new Particle(
        mouse.x,
        mouse.y,
        3,
        `hsl(${Math.random() * utils.randomIntFromRange(0, 360)}, 50%, 50%)`,
        {
          x: Math.cos(radians * i) * Math.random() * power,
          y: Math.sin(radians * i) * Math.random() * power,
        }
      )
    );
  }

  // console.log(particles)
});
