let canvas = document.querySelector("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

let c = canvas.getContext("2d");

// c.fillStyle = "rgba(255, 0, 0, 0.9)";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "rgba(0, 255, 5, 0.9)";
// c.fillRect(500, 100, 300, 100);
// c.fillStyle = "rgba(0, 255, 100, 0.9)";
// c.fillRect(300, 400, 100, 100);
// console.log(canvas);

// // line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(500, 300);
// c.strokeStyle = "blue";
// c.stroke();

// // Arc // Circle

// for (let i = 0; i < 100; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 50, 0, Math.PI * 2);
//   c.strokeStyle = "red";
//   c.stroke();
// }

// console.log(innerWidth);
// console.log(innerHeight)

let mouse = {
  x: "",
  y: "",
};

let maxRadius = 40;
let minRadius = 2;
let colors = [
  "#009432",
  "#6F1E51",
  "#808e9b",
  "#ffc048",
  "#55E6C1",
  "#eb4d4b",
  "#dff9fb",
  "#FC427B",
  "#fff200",
];

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener("resize", function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;

  this.colors = colors[Math.floor(Math.random() * colors.length)];

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = this.colors;
    c.stroke();
    c.fillStyle = this.colors;
    c.fill();
  };

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    // Interactivity
    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  };
}

let circleArr = [];

function init() {
  circleArr = [];
  for (let i = 0; i < 300; i++) {
    let radius = Math.random() * 6 + 1;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 5;
    let dy = (Math.random() - 0.5) * 5;
    circleArr.push(new Circle(x, y, dx, dy, radius));
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArr.length; i++) {
    circleArr[i].update();
  }
}

init();
animate();
