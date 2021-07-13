var score=0;
var suvivalTime=1;
var ground,background1,banana,bananaImage,obstacleImage;
var ObstacleGroup,player_running,monkey,invisibleGround,bananaGroup;

function preload(){
player_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  obstacleImage=loadImage("stone.png");
  bananaImage=loadImage("banana.png");
  
}
function setup(){
 monkey=createSprite(50,120,20,50); 
  monkey.addAnimation("running",player_running);
  
  ground=createSprite(200,180,400,20);
  ground.x=ground.width/2;
  ground.velocityX=-2;
  
  
  invisibleGround=createSprite(200,190,400,10);
  invisibleGround.visibile=false; 
  
  ObstacleGroup=newGroup();
  bananaGroup=newGroup();
}

function draw(){
  background(210);
}
