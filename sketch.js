var car, wall;
var speed, weight;


function setup() {
  createCanvas(1400,400);
car =  createSprite(50, 200, 50, 50);
wall = createSprite(1350,200,60,height/2);
speed = random(55,90);
weight = random(400,1500);
car.velocityX = speed;
}

function draw() {
  background(0);  
  if(wall.x - car.x < car.width/2 + wall.width/2){
    car.velocityX = 0;
     var deformation = 0.5 * weight * speed * speed / 22500;
     if(deformation > 180) {
       Fill("red")
        car.shapecolor = "red";
     }

     if(deformation<180 && deformation>100){
      car.shapecolor = "yellow";
     }

     if(deformation<100){
       car.shapecolor = "green";
     }
  }

  drawSprites();
}