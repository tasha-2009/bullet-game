var car1,car2,car3,car4;
var goal1,goal2,goal3,goal4;
var sprite1,sprite2,sprite3;
var thickness,speed,weight;

function setup() {
  createCanvas(800,400);
 
 
  car1=createSprite(20,150,50,50);
  car1.velocityX=4;
  car1.shapeColor="red";
  car2=createSprite(20,250,50,50);
  car2.velocityX=3;
  car2.shapeColor="yellow";
  car3=createSprite(20,350,50,50);
  car3.velocityX=2;
  car3.shapeColor="pink";
  car4=createSprite(20,50,50,50);
  car4.velocityX=1;
  car4.shapeColor="orange";
  goal1=createSprite(780,150,50,100);
  goal1.shapeColor="blue";
  goal2=createSprite(780,250,50,100);
  goal2.shapeColor="skyblue";
  goal3=createSprite(780,350,50,100);
  goal3.shapeColor="violet";
  goal4=createSprite(780,50,50,100);
  goal4.shapeColor="brown";
  sprite1=createSprite(0,100,1600,20);
  sprite1.shapeColor="white";
  sprite2=createSprite(0,200,1600,20);
  sprite2.shapeColor="white";
  sprite3=createSprite(0,300,1600,20);
  sprite3.shapeColor="white";



}

function draw() {
  background("black");  
 thickness=random(22,83);
 speed=random(223,321);
 weight=random(30,52);
 if(hasCollided(car1,goal1)){
  car1.velocityX=0;
  var damage=0.5*weight*speed*speed/thickness*thickness;
  if(damage>10){
    goal1.shapecolor=("red");
  }
  if(damage<10){
    goal1.shapecolor=("green");
  }
 }
 if(hasCollided(car2,goal2)){
  car2.velocityX=0;
  var damage=0.5*weight*speed*speed/thickness*thickness;
  if(damage>10){
    goal2.shapecolor=("red");
  }
  if(damage<10){
    goal2.shapecolor=("green");
  }
 }
 if(hasCollided(car3,goal3)){
  car3.velocityX=0;
  var damage=0.5*weight*speed*speed/thickness*thickness;
  if(damage>10){
    goal3.shapecolor=("red");
  }
  if(damage<10){
    goal3.shapecolor=("green");
  }
 }
 if(hasCollided(car4,goal4)){
  car4.velocityX=0;
  var damage=0.5*weight*speed*speed/thickness*thickness;
  if(damage>10){
    goal4.shapecolor=("red");
  }
  if(damage<10){
    goal4.shapecolor=("green");
  }
 }
 

drawSprites();
}

function hasCollided(car,goal){
 car1RightEdge=car.x+car.width;
 goal1LeftEdge=goal1.x;

 if(car1RightEdge>=goal1LeftEdge){
     goal1.shapeColor="yellow";
     car1.isStatic=true;
 }
 
 car2RightEdge=car.x+car.width;
 goal2LeftEdge=goal2.x;

 if(car2RightEdge>=goal1LeftEdge){
     goal2.shapeColor="silver";
     car2.isStatic=true;
 }
 car3RightEdge=car.x+car.width;
 goal3LeftEdge=goal3.x;

 if(car3RightEdge>=goal3LeftEdge){
     goal3.shapeColor="brown";
     car3.isStatic=true;
 }
 car4RightEdge=car.x+car.width;
 goal4LeftEdge=goal4.x;

 if(car4RightEdge>=goal4LeftEdge){
     goal4.shapeColor="red";
     car4.isStatic=true;
 }
}






















 