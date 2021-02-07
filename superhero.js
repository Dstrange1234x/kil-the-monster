class Superhero {
    constructor(x, y, r) {
      var options = {
       
          'frictionAir':1,
          'density':1,
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
      this.Superhero1=loadImage("images/Superhero-01.png");
      
   
      
      World.add(world, this.body);
    
    }
    display(){
  
      var pos=this.body.position
      push();
      translate(pos.x, pos.y-100);
      imageMode(CENTER);
      image(this.Superhero1,0,0,this.r+150,this.r);
      
     
     
      pop();
    }
  };
  