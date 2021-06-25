class BaseClass{
  constructor(x,y,width,height,angle){
    var options = {
      friction: 1.5,
      restitution: 1,
      density: 0.8
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.image = loadImage('sprites/base.png')
  }
  display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
  }
}