
let stick = (p1, p2) => {
  return {
    startPoint: p1,
    endPoint: p2,
    stiffness: .9,
    length: 6,

    update: function(){
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
}
