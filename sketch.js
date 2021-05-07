var backgroundImg;
var dog,dogImg;
var santa,santaImg;
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
snow=[]

function preload(){
  backgroundImg = loadImage('snow2.jpg')
  dogImg = loadImage('unnamed.png')
  santaImg = loadImage('s.png.png')
  
}

function setup() {
  createCanvas(1000,500);
  dog=createSprite(900, 400, 50, 50);
  dog.addImage(dogImg)
  dog.scale=0.5
  santa=createSprite(100,300,50,50);
  santa.addImage(santaImg)
  santa.scale=1;
  
  engine=Engine.create()
  world=engine.world;

  
  for(var i=0;i<=100;i++){
    snow[i]=new Snow(random(10,910),random(5,500))
  }

}



function draw() {
  background(backgroundImg); 
  if (keyDown('a')){
    dog.x=dog.x-5
  }
  if(keyDown("d")){
    dog.x=dog.x+5
  }
  
  Engine.update(engine)
 
  
  for(var i=0;i<=100;i++){
   snow[i].display()
  }

  drawSprites();

}