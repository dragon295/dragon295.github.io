const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEL = document.getElementById("color");
const editBtn = document.getElementById("edit");
const clearBtn = document.getElementById("clear");

let isPress = false;
let size = 20;
let color = "#000000";
let x = undefined;
let y = undefined;
let background = "#f5f5f5";

canvas.addEventListener("mousedown", (e) => {
  isPress = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPress = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPress) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    // chinh size cho nut eraser 
    if (color === background) {
      c.fillStyle = color;
      size = 30;
      updateSize();
    }

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  c.beginPath();
  c.arc(x, y, size, 0, Math.PI * 2, false);
  c.fill();
  c.fillStyle = color;
}

increaseBtn.addEventListener("click", () => {
  size += 5;

  if (size >= 50) size = 50;

  updateSize();
});

decreaseBtn.addEventListener("click", () => {
  size -= 5;

  if (size < 5) size = 5;

  updateSize();
});

function updateSize() {
  sizeEl.innerText = size;
}

colorEL.addEventListener("change", (e) => {
  color = e.target.value;
});

function drawLine(x1, y1, x2, y2) {
  c.beginPath();
  c.moveTo(x1, y1);
  c.lineTo(x2, y2);
  c.strokeStyle = color;
  c.lineWidth = size * 2;
  c.stroke();
  c.closePath();
}

editBtn.addEventListener("click", () => {
  color = background;
});

clearBtn.addEventListener("click", () => {
  c.clearRect(0, 0, canvas.width, canvas.height);
});



// function animate() {
//     c.clearRect(0 , 0, canvas.width, canvas.height);

//     drawCircle(x++, y++);

//     requestAnimationFrame(animate);
// }

// animate()
