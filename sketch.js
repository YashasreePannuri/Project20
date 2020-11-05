var wall,car;
var speed,weight;
var collision;

function setup() {
  createCanvas(1600,400);
  speed=random(50,90);
  weight=random(400,1500);
  car = createSprite(400, 200, 50, 50);
  car.velocityX = speed;
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = (80,80,80);
  collision = 0.5*weight*speed*speed/22500

}

function draw() {
  background(255,255,255);  
    if(car.x-wall.x<car.width/2+wall.width/2&&
    wall.x-car.x<wall.width/2+car.width/2){
      if(collision<100){
      car.shapeColor = "green" //(0,255,0);
      car.velocityX=0;
    }
      if(collision=>100 && collision < 180){
        car.shapeColor = "yellow" //(230,230,0);
        car.velocityX=0;
    }
      if(collision>180){
        car.shapeColor = "red" //(255,0,0);
        car.velocityX=0;
      }

  }
  console.log(collision);
    drawSprites();
}
