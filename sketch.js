var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
   car = createSprite(50,200, 20, 20);
   wall=createSprite(1500,200,60,200);
   wall.shapeColor="grey";
   car.velocityX=speed;
   car.shapeColor="blue";

     speed=random(50,90);
  weight=random(400,1500);
}

function draw() {
  background("white");  

if(wall.x-car.x < (car.width+wall.width)/2){
  car.velocityX=0;
  var deform=0.5*weight*speed*speed/22509;
  if(deform>180){
  car.shapeColor=color(255,0,0);
  }
  if(deform<180 && deform>100){
    car.shapeColor=color(230,230,0);
  }
  if(deform<100){
    car.shapeColor=color(0,255,0);
  }
}










  drawSprites();

}