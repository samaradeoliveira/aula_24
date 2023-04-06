class CannonBall {
  //método de construção do objeto
  constructor(x, y) {

    //propriedade para a bala inicialmente ficar parada
    var options = {
      isStatic: true
    };

    //raio
    this.r = 30;

    //criação do corpo
    this.body = Bodies.circle(x, y, this.r, options);

    //imagem
    this.image = loadImage("./assets/cannonball.png");

    //ativar matriz para armazenamento de trajetória, atividade adicional
    this.trajectory = [];

    //adicionando ao mundo o corpo da bala
    World.add(world, this.body);


  }

  //método criado para atirar a bala, c23
  shoot() {
    //variável que ajuda na conversão do ângulo para criar um vetor 
    //usando a biblioteca p5
    var newAngle = cannon.angle - 28;
    newAngle = newAngle * (3.14 / 180);
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);

    //permissão para mover o corpo da bala 
    Matter.Body.setStatic(this.body, false);
    //velocidade
    Matter.Body.setVelocity(this.body, {
      x: velocity.x * (180 / 3.14), y: velocity.y * (180 / 3.14)
    });
  }

  //método de exibição do objeto
  display() {

    //segura as posições x e y do objeto
    var pos = this.body.position;

    //imagem
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();

    //atividade adicional
    //obter as posições do percurso da bala e adicionar na matriz trajetória
    /*if (this.body.velocity.x > 0 && pos.x > 10) {
      var position = [pos.x, pos.y];
      this.trajectory.push(position);
    }*/

    //percorrer a matriz trajetória e adicionar a imagem da bala nas posições certas 
    //utilizando da imagem da bala, e definindo tamanho
    /*for (var i = 0; i < this.trajectory.length; i++) {
      image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5);
    }*/



  }
}
