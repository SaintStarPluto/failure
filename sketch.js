//to create the car and wall
var car, wall;

//to create the propties of speed and weight
var speed, weight;


function setup() {
  //to create the area used to build stuff
  createCanvas(1600,400);
  
  //to create a visible car and give it a white color
  car=createSprite(50,200,50,50);
  car.shapeColor = "white";
  
  //to create a visible wall and give it a dark grey color
  wall=createSprite(1400,200,60, height/2);
  wall.shapeColor = (80,80,80);
  
  //to create a random speed and weight
  speed=random(55,90);
  weight=random(400,1500);
  

  
}

function draw() {
  //to make the background black
  background(0);

  //to give the car a random speed
  car.velocityX = speed;
  
 //to detect the collision 
 if(wall.x-car.x < (car.width+wall.width)/2){
    
    //to stop the car after the collision
    car.velocityX=0;

    //to calculate the deformation
    var deformation=0.5 * weight * speed * speed/22506;

      //if the deformation is greater than 180 the color is red
      if(deformation>180){
        car.shapeColor=color(255,0,0);

      }

      //if the deformation is less than 180 but greater than 100 it's color is yellow
      if(deformation<180 && deformation>100){
        car.shapeColor=color(230,230,0);

      }

      //if the deformation is less then 100 the color is green
      if(deformation<100){
        car.shapeColor=color(0,255,0);

      }

 }

  //to make all the sprites visible
  drawSprites();
}