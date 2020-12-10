const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var divisions=[]
var plinkos=[]
var particles=[]

var divisionHeight=300;

function setup() {
  createCanvas(485,800);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(240,795,480,10)

  for(var k=0;k<=width;k=k+80){
     divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
  for(var j=40;j<=width;j=j+50){
     plinkos.push(new Plinko(j,75,10));
  }
  for(var j=15;j<=width-10;j=j+50){
     plinkos.push(new Plinko(j,175,10));
  }
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275,10));
  }
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375,10));
  }
}

function draw() {
  background(0,0,0);
  Engine.update(engine);

  ground.display()
  for(var k=0;k<plinkos.length;k++){
    plinkos[k].display()
  }
  for(var j=0;j<divisions.length;j++){
    divisions[j].display()
  }
  for(var o=0;o<particles.length;o++){
    particles[o].display()
  }
  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
  drawSprites();
}