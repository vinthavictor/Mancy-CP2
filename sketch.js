
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1 ,bin2 , bin3;
var paper, ground;

function preload()
{
	
}

function setup() {
	createCanvas(700, 700);
    
	engine = Engine.create();
	world = engine.world;

	//Ground
	ground = new Ground(350,680,700,20);

	//Dustbin
	//  bin1 = new Dustbin(650,635,20,70);
	 bin2 = new Dustbin(605,620,70,100);
	//  bin3 = new Dustbin(570,635,20,70);
	paper = new Paper(100,500,30);

	Engine.run(engine);
  
}


function draw() {
	background("yellow");
  rectMode(CENTER);
  ground.display();
  paper.display();
 
// bin1.display();
bin2.display();
//  bin3.display();
 
  
  drawSprites();

 
}
function keyPressed(){
	if (keyCode === UP_ARROW) {
console.log("hi")
    	Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-25});

    
  	}
}
  

	
	



