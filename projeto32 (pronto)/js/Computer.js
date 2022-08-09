class Computer {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(1186, 400, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    this.life1 = "green";
    this.life2 = "green";
    this.life3 = "green";
        World.add(world, this.body);
  }
  life() {
    push();
    textSize(20);
    fill("white");
    text("Computer", width + 1030, 40);

    fill(this.life1);
    rect(width = 1100, 80, 70, 30);
    fill(this.life2);
    rect(width + 70, 80, 70, 30);
    fill(this.life3);
    rect(width + 140, 80, 70, 30);
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
