
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob = new BOb(400,300);
	rooof = new roof(395,295,200,50)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob.display();
  rooof.display();



  
  drawSprites();
 
}



