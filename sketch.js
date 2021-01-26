
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var rope1
var bob1,roof
function preload()
{
	
}

function setup() {
	createCanvas(1000,750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	roof=new Roof()
	bobDiameter=80
	startBobPositionX=width/2;
	startBobPositionY=height/4+200;
	startBobPositionY=height/4+500;
	bob1=new Bob(240,550);	
	bob2=new Bob(320,550);
	bob3=new Bob(400,550);
	bob4=new Bob(480,550);
	bob5=new Bob(560,550);

	rope1=new Rope(bob1.body,roof.body,-bobDiameter*2,0)
	rope2=new Rope(bob2.body,roof.body,-bobDiameter*1, 0)
	rope3=new Rope(bob3.body,roof.body,0, 0)
	rope4=new Rope(bob4.body,roof.body,bobDiameter*1,0)
	rope5=new Rope(bob5.body,roof.body,bobDiameter*2,0)

	
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  roof.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  
  
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-330,y:-35});

	}
}










