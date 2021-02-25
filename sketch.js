const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Engine=Matter.Engine;

var engine, world;
var backgroundImg;
var ground1;
var Superhero;
var fly;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12;
var monster;

function preload() {
//preload the images here
backgroundImg=loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
  world = engine.world;


  ground1 =new Ground(200,500,900,20)
  Superhero=new Hero(80,10,10,10)
  block1=new Block(500,450,80,80);
  block2=new Block(500,400,80,80);
  block3=new Block(500,350,80,80);
  block4=new Block(500,300,80,80);
  block5=new Block(400,300,80,80);
  block6=new Block(400,100,80,80);
  block7=new Block(400,50,80,80);
  block8=new Block(400,10,80,80);
  block9=new Block(400,5,80,80);
  block10=new Block(600,295,80,80);
  block11=new Block(600,290,80,80);
  block12=new Block(600,250,80,80);
monster=new Monster(450,100,10,10);


  fly= new Fly(Superhero.body,{x:100,y:30})
 
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

fly.display();
Superhero.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
monster.display();
ground1.display();


}
function mouseDragged(){
  Matter.Body.setPosition(Superhero.body,{x:mouseX,y:mouseY});
}

