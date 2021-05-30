import * as utils from "../../util/utils.js";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

// const colors = ['#00d2d3', "#1dd1a1", "#ff4757", "#FFC312", "#b71540", "#0a3d62", ];

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
  constructor(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
    // ttl: time to live
    this.ttl = 1000;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

  update() {
    this.draw();
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.ttl--;
  }
}

// Implementation
let particles;
function init() {
  particles = [];
}


let hue = 5;
let hueRadians = 0;
function generateRing() {
  setTimeout(generateRing, 200);
  hue = Math.sin(hueRadians);
  let particleCount = 50;
  for (let i = 0; i < particleCount; i++) {
    const radian = (Math.PI * 2) / particleCount;
    const x = mouse.x;
    const y = mouse.y;
    particles.push(
      new Particle(x, y, 5, `hsl(${Math.abs(hue * 360)}, 50%, 50%)`, {
        x: Math.cos(radian * i) * 2,
        y: Math.sin(radian * i) * 2
      })
    );
  }

  hueRadians+=2;
}
// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "rgba(0,0,0,0.01)";
  c.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle, i) => {
      if(particle.ttl < 0) {
          particles.splice(i, 1)
      } else {
         particle.update();
      }
  });
}

init();
animate();
generateRing();
