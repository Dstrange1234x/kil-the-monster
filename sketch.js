const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var superhero
var slingshot
var engine,world;
var b_image;

function preload() {
//preload the images here
b_image=loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
  world = engine.world;

superhero=new Superhero(400,500,250);
slingshot = new SlingShot(superhero.body,{x:400, y:500});
}

function draw() {
  background(b_image);
  Engine.update(engine);

  superhero.display();
  slingshot.display();
}

