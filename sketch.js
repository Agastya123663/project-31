
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var divisions = [];
var plinkos = [];
var particles = [];
var divisionHeight = 300;

function preload()
{
}


function setup() {
  createCanvas(500, 800);
     
	engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(250,670,500,10);

  for (var k = 15; k<=width ; k = k+95){
    divisions.push(new Division(k,height-divisionHeight + 20 , 10,divisionHeight));
    }

    for(var j = 40 ; j<=width ; j=j+50){
    plinkos.push(new Plinko(j,75) );
    }

    for(var j = 15 ; j<=width-10 ; j=j+50){
    plinkos.push(new Plinko(j,135) );
    }

    for(var j = 15 ; j<=width-10 ; j=j+50){
    plinkos.push(new Plinko(j,195) );
    }

    for(var j = 40 ; j<=width ; j=j+50){
    plinkos.push(new Plinko(j,255) );
    }

    for(var j = 15 ; j<=width ; j=j+50){
    plinkos.push(new Plinko(j,315) );
    }
    
    particle = new Particle(random(100,440),30,10,10);

  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  text("1" ,40,650)
  textSize(20)

  text("2" ,150,650)

  text("3" ,250,650)

  text("4" ,350,650)

  text("5" ,450,650)

  text("MAKE THE BALL FALL IN THE 3RD BUCKET" ,50,700)

  text("Press space to launch the ball and reset" ,80,750)
  
for(var k=0 ; k<divisions.length ; k++){
divisions[k].display();
}

for(var j=0 ; j<plinkos.length ; j++){
plinkos[j].display();
}


for(var i=0 ; i<particles.length ; i++){
  particles[i].display();
  }

  particle.display();


  drawSprites();


}

function keyPressed(){
  if(keyCode === DOWN_ARROW){
  Matter.Body.setStatic(particle.body , false);
  }
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(particle.body , {x:random(100,440),y:30})
    particle = new Particle(random(100,440),30,10,10);
    Matter.Body.setStatic(particle.body , false);
  }
}

