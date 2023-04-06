//importação de módulos
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas, angle, tower, ground, cannon, backgroundImg;

//criar matriz para balas, aluno



function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);

  engine = Engine.create();
  world = engine.world;

  //conversão de ângulo
  angleMode(DEGREES);
  angle = 15;

  //corpo do chão
  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  //corpo da torre
  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);

  //canhão
  cannon = new Cannon(180, 110, 130, 100, angle);


}

function draw() {
  background(189);

  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  //linha marrom embaixo do mar
  push();
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  pop();

  //imagem da torre
  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();

  //exibição de canhão
  cannon.display();

  //ativar for para percorrer a matriz para exibir bala de canhão 
  //através da função showCannonBalls
  for (var i = 0; i < balls.length; i++) {
    showCannonBalls(balls[i], i);

  }



}

//função para criar balas de canhão, nome: keyPressed
function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    var cannonBall = new CannonBall(cannon.x, cannon.y);
   

  }
}




//função para exibir as balas do canhão, nome: showCannonBalls
function showCannonBalls(ball, index) {
 


}




//função para atirar as balas de canhão (mudar a var)
function keyReleased() {
  if (keyCode === DOWN_ARROW) {
   
    
  }
}
