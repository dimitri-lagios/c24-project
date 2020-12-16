class Ball{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.r = radius 
        World.add(world, this.body);
      }
      display(){
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
      }
      //keyPressed(){
       // if(keyCode === 32){
         // this.body.velocity.x = 5    
        //}
      //}
    }