
let body = {
  x: 50,
  y: 50,
  dots: [],
  sticks: [],
  particleSpace: 5,
  gravity: 1,

  show: function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, 15, 0, Math.PI * 2);
    ctx.stroke()
  },

  getXandY: function(){
    return {
      x: this.x,
      y: this.y
    }
  },

  applyGravity: function(distFromGround){
    if(this.y < canvas.height - distFromGround){
      this.y += this.gravity
    } else {
      this.y -= this.gravity
    }
  },

  addArm: function(tentacle){
    for(let i = 0; i < 10; i++){
      let newObj = Object.create(tentacle);
      newObj.x = newObj.x + this.particleSpace;
      this.particleSpace += 5;
      this.dots.push(newObj)
    }
  },

  connectSticksToDots: function(stick){
    for(let i = 1; i < this.dots.length; i++){
      let newStick = Object.create(stick(this.dots[i - 1], this.dots[i]));
      this.sticks.push(newStick);
    }
  }
}
