class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
          
      }
      this.image = loadImage("block.png");
      this.Visibility = 225;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x ,pos.y ,this.width ,this.height);
      
      if(this.body.speed<2.5){
        this.display();
      }
      else{
        World.remove(world ,this.body)
        push()
        this.Visibility = this.Visibility - 5;
        tint(225 ,this.Visibility)
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height)
        pop();

      }
    }
}