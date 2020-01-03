
let tentacle = Object.create(body);

tentacle.x = tentacle.getXandY.call(body).x + 20;
tentacle.y = tentacle.getXandY.call(body).y;
tentacle.oldPosX = tentacle.x;
tentacle.oldPosY = tentacle.y;
tentacle.friction = 0.97;
tentacle.gravity = 1;
tentacle.mass = 1;

tentacle.draw = function(){
  ctx.beginPath();
  ctx.arc(this.x, this.y, 3, 0, 2 * Math.PI);
  ctx.stroke();
}

function Particle(x, y){
  this.x = x;
  this.y = y;
  this.oldPosX = x;
  this.oldPosY = y;
  this.friction = 0.97;
  this.gravity = 1;
  this.mass = 1;

  this.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
    ctx.stroke();
  }

  this.update = function(){
    if(this.y < 250){
      this.gravity += .5;
    }
    else {
      this.gravity += -.5;
    }
    this.y += this.gravity;
  }
}


class Stick{
  constructor(p1, p2){
    this.startPoint = p1,
    this.endPoint = p2,
    this.stiffness = .9,
    this.length = 30
  }

  update = () => {
  // calculate the distance between two dots
  let dx = this.endPoint.x - this.startPoint.x;
  let dy = this.endPoint.y - this.startPoint.y;
  // pythagoras theorem
  let dist = Math.sqrt(dx * dx + dy * dy);
  // calculate the resting distance betwen the dots
  let diff = (this.length - dist) / dist * this.stiffness;

  // getting the offset of the points
  let offsetx = dx * diff * 0.5;
  let offsety = dy * diff * 0.5;

  // calculate mass
  let m1 = this.startPoint.mass + this.endPoint.mass;
  let m2 = this.startPoint.mass / m1;
  m1 = this.endPoint.mass / m1;

  // and finally apply the offset with calculated mass
  if (!this.startPoint.pinned) {
    this.startPoint.x -= offsetx * m1;
    this.startPoint.y -= offsety * m1;
  }
  if (!this.endPoint.pinned) {
    this.endPoint.x += offsetx * m2;
    this.endPoint.y += offsety * m2;
  }
  }
}

let dots = [];
let sticks = [];
let dotY = 100;

for(let i = 0; i < 10; i++){
  dots.push(new Particle(dotY, 150))
  dotY += 50;
}

sticks.push(new Stick(dots[0], dots[1]));
sticks.push(new Stick(dots[1], dots[2]));
sticks.push(new Stick(dots[2], dots[3]));
sticks.push(new Stick(dots[3], dots[4]));
sticks.push(new Stick(dots[4], dots[5]));
sticks.push(new Stick(dots[5], dots[6]));
sticks.push(new Stick(dots[6], dots[7]));
sticks.push(new Stick(dots[7], dots[8]));
sticks.push(new Stick(dots[8], dots[9]));
