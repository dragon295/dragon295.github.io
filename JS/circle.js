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
}

module.exports = Circle