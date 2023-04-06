class Cannon {
  //método de construção do objeto
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    //imagens
    this.cannon_image = loadImage("assets/canon.png");
    this.cannon_base = loadImage("assets/cannonBase.png");
  }

  //método de exibição do objeto
  display() {
    //para mover o canhão
    if (keyIsDown(RIGHT_ARROW) && this.angle < 70) {
      this.angle += 1;
    }
    if (keyIsDown(LEFT_ARROW) && this.angle > -30) {
      this.angle -= 1;
    }

    //características de exibição
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.cannon_image, 0, 0, this.width, this.height);
    pop();
    image(this.cannon_base, 70, 20, 200, 200);
    noFill();
  }
}
