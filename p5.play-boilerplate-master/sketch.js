

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;




function setup() {
  createCanvas(800,400);
   
  
 
  //console.log(hr);
}

function draw() {
  background("white");  

  hr= hour();
  min= minute();
  sec= second();

  text( hr, 5, 50);
  text( min, 20, 50);
  text( sec, 40, 50);


  hr=angleMode(DEGREES);
  min=angleMode(DEGREES);
  sec=angleMode(DEGREES);



  secAngle = map(sc, 0, 60, 0, 360);
  minAngle = map(sc, 0, 60, 0, 360);  
  hrAngle = map(sc, 0, 60, 0, 360);
    Push();
    Rotate(scAngle);
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    Pop();













  drawSprites();
}