class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(295, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    this.life1 = "green";
    this.life2 = "green";
    this.life3 = "green";
    this.life4 = "green";
    this.life5 = "green";
    this.life6 = "green";

    World.add(world, this.body);
  }

  life() {
    push();
    textSize(20);
    fill("white");
    text("Player", 280, 40);

    fill(this.life4);
    rect(width = 320, 50, 70, 30);
    fill(this.life5);
    rect(width = 250, 50, 70, 30);
    fill(this.life6);
    rect(width = 180, 50, 70, 30);
    
   // crie a vida em forma de retângulo
    pop();
  }


  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
