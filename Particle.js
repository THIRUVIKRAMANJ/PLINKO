class Particle {
    constructor(x,y) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,1,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     ellipseMode(CENTER);
      fill("red");
      ellipse(pos.x, pos.y,15,15);
    }
  };