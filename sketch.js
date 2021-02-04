
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var dustbin;
var ground;
var paper;

function setup() {
	createCanvas(2000, 400);


	engine = Engine.create();
	world = engine.world;

	

	dustbin= new Dustbin(1800,320);
	ground= new Ground(1000,380,2000,10);
	paper= new Paper(200,355,40);
	


	Engine.run(engine);
  
}


function draw() {
 
  background("pink");
 
  keyPressed();

 ground.display();
 paper.display();
 dustbin.display();
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:7,y:-5});
	}
}

