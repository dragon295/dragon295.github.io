// let canvas = document.querySelector("canvas");

// canvas.width = innerWidth;
// canvas.height = innerHeight;

// let c = canvas.getContext("2d");

// // Với các line or quadraticCurveTo or bezierCurveTo mà add closePath() trước stroke() sẽ tự hoàn thành các line thành 1 hình khép kín

// // Rectangle
// c.beginPath();
// c.fillStyle = "rgba(255, 0, 0, 0.9)";
// c.fillRect(25, 25, 100, 100);
// c.clearRect(45, 45, 60, 60);
// c.strokeRect(50, 50, 50, 50);
// c.fillStyle = "rgba(0, 255, 100, 0.9)";
// c.fillRect(300, 50, 100, 100);
// c.closePath();

// // Triangle
// c.beginPath();
// c.moveTo(200, 105);
// c.lineTo(230, 125);
// c.lineTo(230, 85);
// c.fillStyle = "aqua";
// c.fill("evenodd");

// // Happy Face
// c.beginPath();
// c.arc(275, 275, 50, 0, Math.PI * 2, true); // Outer circle
// c.moveTo(310, 275);
// c.arc(275, 275, 35, 0, Math.PI, false); // Mouth (clockwise)
// c.moveTo(265, 265);
// c.arc(260, 265, 5, 0, Math.PI * 2, true); // Left eye
// c.moveTo(295, 265);
// c.arc(290, 265, 5, 0, Math.PI * 2, true); // Right eye
// c.stroke();

// // Half Rectrangle
// c.beginPath();
// c.moveTo(430, 430);
// c.lineTo(480, 430);
// c.lineTo(430, 480);
// c.fillStyle = "darkorange";
// c.fill();

// c.beginPath();
// c.moveTo(500, 500);
// c.lineTo(500, 450);
// c.lineTo(450, 500);
// c.closePath();
// c.stroke();

// // Circle
// c.beginPath();
// c.arc(600, 500, 50, 0, Math.PI, false);
// c.stroke();
// c.closePath();

// // Đường cong Bezier
// c.beginPath();
// c.moveTo(75, 25);
// c.quadraticCurveTo(25, 25, 25, 62.5);
// c.quadraticCurveTo(25, 100, 50, 100);
// c.quadraticCurveTo(50, 120, 30, 125);
// c.quadraticCurveTo(60, 120, 65, 100);
// c.quadraticCurveTo(125, 100, 125, 62.5);
// c.quadraticCurveTo(125, 25, 75, 25);
// c.closePath();
// c.stroke();

// c.beginPath();
// c.moveTo(20, 200);
// c.quadraticCurveTo(300, 200, 250, 100);
// c.stroke();

// let start = { x: 50, y: 20 };
// let cp1 = { x: 230, y: 30 };
// let cp2 = { x: 150, y: 80 };
// let end = { x: 250, y: 100 };

// c.beginPath();
// c.moveTo(start.x, start.y);
// c.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
// c.stroke();

// // Heart

// c.beginPath();
// c.moveTo(75, 40);
// c.bezierCurveTo(75, 37, 70, 25, 50, 25);
// c.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
// c.bezierCurveTo(20, 80, 40, 102, 75, 120);
// c.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
// c.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
// c.bezierCurveTo(85, 25, 75, 37, 75, 40);
// c.fill();
// c.closePath();

// // Opacity
// c.save();
// c.beginPath();
// c.arc(500, 275, 50, 0, Math.PI * 2, true);
// // globalAlpha tăng - giảm opacity;
// c.globalAlpha = 0.5;
// c.fillStyle = "lightgreen";
// c.fill();
// c.closePath();
// c.restore();

// // Gradient

// c.beginPath();
// let lingrad = c.createLinearGradient(350, 350, 350, 500);
// lingrad.addColorStop(0, "#00ABEB");
// lingrad.addColorStop(0.5, "#fff");
// lingrad.addColorStop(0.5, "#26C000");
// lingrad.addColorStop(1, "#fff");

// c.createRadialGradient(0, 150, 50, 0, 140, 90);

// // createPattern

// c.beginPath();
// let img = new Image();
// img.src = "https://mdn.mozillademos.org/files/222/Canvas_createpattern.png";

// let ptrn = c.createPattern(img, "repeat");
// c.fillStyle = ptrn;
// c.fillRect(550, 50, 150, 150);

// // Text
// c.beginPath();
// c.font = "50px serif";
// c.strokeText("Hello world", 30, 400);
// c.fillStyle = "red";
// c.closePath();

// // Draw IMG
// c.save();
// let img2 = new Image();
// img2.src = "https://i.pinimg.com/474x/87/5e/3b/875e3b45a91afc07439c2c09dc6ce5eb.jpg";
// c.rotate((Math.PI / 180) * 30);
// c.drawImage(img2, 300, 300);
// c.restore();


// // Translate - rotate
// c.save();
// // blue rect
// c.fillStyle = "#0095DD";
// c.fillRect(800, 30, 100, 100);
// c.translate(100, -300)
// c.rotate((Math.PI / 180) * 25);
// c.scale(1.15, 1.15);
// // transform (tự search)
// // grey rect
// c.fillStyle = "#4D4E53";
// c.fillRect(800, 30, 100, 100);
// c.restore();
