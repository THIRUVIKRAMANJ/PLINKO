const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var j=0
var plinko=[]
var plinko2=[]
var plinko3=[]
var plinko4=[]
var ground
var division,division2,division3,division4,division5,division6,division7
var particle,particle2,particle3,particle4,particle5,particle6,particle7
function setup() {
  createCanvas(600,800);
  engine=Engine.create()
  world=engine.world
  for(i=30;i<600;i=i+35){
    var p=new Plinko(i,50)
    plinko.push(p)
    var q=new Plinko(i,150)
    plinko2.push(q)
    var r=new Plinko(i,250)
    plinko3.push(r)
    var s=new Plinko(i,350)
    plinko4.push(s)
    j++
  }
  ground=new Ground(240,740,800,10)
  division=new Division(0,645,10,200)
  division2=new Division(100,645,10,200)
  division3=new Division(200,645,10,200)
  division4=new Division(300,645,10,200)
  division5=new Division(400,645,10,200)
  division6=new Division(500,645,10,200)
  division7=new Division(600,645,10,200)
  
  particle=new Particle(50,0)
  particle2=new Particle(100,0)
  particle3=new Particle(150,0)
  particle4=new Particle(200,0)
  particle5=new Particle(250,0)
  particle6=new Particle(300,0)
  particle7=new Particle(350,0)
}

function draw() {
  background(0);  
  Engine.update(engine)
  for(i=0;i<j;i++){
   plinko[i].display()
   plinko2[i].display()
   plinko3[i].display()
   plinko4[i].display()

  }
  ground.display()
  division.display()
  division2.display()
  division3.display()
  division4.display()
  division5.display()
  division6.display()
  division7.display()

  particle.display()
  particle2.display()
  particle3.display()
  particle4.display()
  particle5.display()
  particle6.display()
  particle7.display()
  drawSprites();
}