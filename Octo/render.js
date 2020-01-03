
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let vel = 0;

body.addArm(tentacle);
body.connectSticksToDots(stick);

let animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  body.dots[0].x = body.x + 15
  body.dots[0].y = body.y + 10

  body.show();
//  tentacle.draw();
  body.applyGravity(16)

  for(let i = 0; i < body.dots.length; i++){
    body.dots[i].draw();
    body.dots[i].applyGravity(5)
  }

  for(let i = 0; i < body.sticks.length; i++){
    body.sticks[i].update();
  }

}

document.addEventListener('keydown', (e) => {
  if(e.code === "ArrowRight"){
    vel += 0.9
    body.y -= vel
  }
  else if(e.code === "ArrowLeft"){
    vel -= 0.9
    body.x += vel
  }
})

animate()
