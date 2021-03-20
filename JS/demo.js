// var Circle = require('./circle');
var circle1 = new Circle(0, 0, 1);
var circle2 = new Circle(0, 2, 1);
console.log(circle1.isOverlapped(circle2));

var circle3 = new Circle(0, 0, 3);
console.log(circle1.isOverlapped(circle3));

var circle4 = new Circle(5, 5, 1);
console.log(circle1.isOverlapped(circle4));

function Circle (x,y,r) {
  this.x = x;
  this.y = y;
  this.r = r;
  // return this
}

Circle.prototype.isOverlapped = function(c) {
	// console.log(c);
  var d = Math.sqrt(Math.pow(this.x - c.x, 2) + Math.pow(this.y - c.y, 2));
 if (d === this.r + c.r) {
    return 0;
  }
  if (d < this.r + c.r) {
    return -1;
  }
  return 1; 

  function max(arr) {
    let first = arr[0];
  for(let i = 0; i < arr.length; i++) {
     if(arr[i] >= first) {
         arr[i] = first
     }
  }
  return first
}
}