
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var boxBottom;

function setup() {
	var canvas = createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600, height, 1200, 20);
	dustbinSideRight = new Dustbin(1085, 345, 20, 70);
	dustbinSideLeft = new Dustbin(915, 345, 20, 70);
	dustbinBase = new Dustbin(1000, 380, 150, 20);
	paper = new Paper(107, 121);

}


function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  dustbinSideLeft.display();
  dustbinSideRight.display();
  dustbinBase.display();
  paper.display();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body, paper.body.position,{x:85, y: -85});

	}
}