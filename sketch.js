const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var superhero
var slingshot
var engine,world;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
  world = engine.world;

superhero=new Superhero(400,800,250);
slingshot = new SlingShot(superhero.body,{x:400, y:800});
}

function draw() {
  background(0);
  Engine.update(engine);

  superhero.display();
  slingshot.display();
}

