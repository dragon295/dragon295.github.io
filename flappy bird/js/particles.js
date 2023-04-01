const particles = [];

class Particle {
  constructor() {
    this.x = bird.x;
    this.y = bird.y;
    this.size = Math.random() * 7 + 8;
    this.speedY = Math.random() * 1 - 0.5;
    this.color = `hsla(${hue}, 100%, 50%, 0.8)`;
  }

  draw() {
    c.fillStyle = this.color;
    c.beginPath();
    c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    c.fill();
  }

  update() {
    this.draw();
    this.x -= gamespeed;
    this.y += this.speedY;
  }
}

function handleParticles() {
  particles.unshift(new Particle());
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
  }

  if (particles.length > 200) {
    for (let i = 0; i < 20; i++) {
      particles.pop(particles[i]);
    }
  }
}
