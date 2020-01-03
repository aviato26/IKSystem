
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
