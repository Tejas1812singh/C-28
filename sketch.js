
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
const constraint = Matter.Constraint
var stone;
var ground; 
var boy; 
var tree;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12
var world, boy;
var launchingForce = 100;



var Launcher
function preload()
{
	boy =   loadImage("images/boy.png")
}

function setup() {
  createCanvas(1300, 700);
  engine = Engine.create();
  world = engine.world;
  
  stone = new Stone(200,50,30)
  ground  = new Ground(width/2,600,width,20)
  mango1 = new Mango(200,50);
  mango2 = new Mango(200,60)
  mango3 = new Mango(200,70)
  mango4 = new Mango(190,60)
  mango5 = new Mango(180,70)
  mango6 = new Mango(170,80)
  mango7 = new Mango(200,50)
  mango8 = new Mango(210,60)
  mango9 = new Mango(200,40)
  mango10 = new Mango(220,60)
  mango11 = new Mango(190,90)
  mango12 = new Mango(150,100)
  //we need to write 12 mangoes with x,y, and height.
  launcher = new Launcher(stone.body,{x:200,y:400})
  tree = new Tree(1050,580)
  var render = Render.create({ element:document.body
    engine:Engine
    options:{
      width:1000,300
      height:600
      wireframes:false
    }}})
 

 
  Engine.run(engine);





	//Create the Bodies Here.



  



function draw() {
  background(0);
  textSize(24)
  text ("Press Space To Play Again.",200,300)
  image(boy(200,250,200,250))
  rectMode(CENTER);
  
  
  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  tree.display();
  boy.display();
  launcher.display();
detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);

detectCollision(stone,mango4);
detectCollision(stone,mango5);
detectCollision(stone,mango6);
detectCollision(stone,mango7);
detectCollision(stone,mango8);
detectCollision(stone,mango9);
detectCollision(stone,mango10);
detectCollision(stone,mango11);
detectCollision(stone,mango12);


  drawSprites();
  
 
}
function mouseDragged(){
Matter.Body.setPosition(stone.body,{ x:mouseX, y:mouseY})
 }
function mouseReleased()
{
  launcher.fly();
}
function keyPressed()
  {
    if (keyCode===32){
    Matter.Body.setPosition(stone.body,{ x:235, y:420})
    launcher.attach(stone.body)
    }
  }
  function detectCollision(stone1,mango1)
  {

mangoBodyPosition=mango1.body.position
stoneBodyPosition=stone1.body.position
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=mango1.r+stone1.r)
{
  Matter.Body.setStatic(mango1.body,false)
}
  }


