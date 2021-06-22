var Iss;
var background;
var spaceCraft;
var IssImage,spaceImage,spaceCraftImage;

function preload(){
spaceImage = loadImage("Docking-undocking/spacebg.jpg");
IssImage = loadImage("Docking-undocking/iss.png");
spaceCraftImage = loadImage("Docking-undocking/spaceCraft1.png");
}
function setup() {
  createCanvas(800,800);
 var background = createSprite(800,800);
 background.addImage(spaceImage);
 background.scale = 4.5;
 
 var Iss = createSprite(400,150,20,20);
 Iss.addImage(IssImage);
Iss.scale = 0.7;

 var spaceCraft = createSprite(170,720,20,20);
 spaceCraft.addImage(spaceCraftImage);
spaceCraft.scale = 0.3;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
function keyPressed(){
  if(keyCode === LEFT_ARROW){
    spaceCraft.velocityX = -6;
  }
  if(keyCode === RIGHT_ARROW){
    spaceCraft.velocityX = 6;
  }
  if(keyCode === UP_ARROW){
    spaceCraft.velocityY = -7
  }
if(keyCode === DOWN_ARROW){
spaceCraft.velocityY = 7;
}
}