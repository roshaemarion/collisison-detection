var movingrect,fixedrect,rect;

function setup() {
  createCanvas(800,400);
   movingrect=createSprite(400, 200, 50, 50);
  movingrect.shapeColor = "red"

  fixedrect=createSprite(400, 100, 50, 50);
  fixedrect.shapeColor = "red"

  rect=createSprite(100, 100, 50, 70);
  rect.shapeColor = "red"



}


function draw() {
  background(155,125,7);
  movingrect.x = mouseX;
  movingrect.y = mouseY;
 if( istouching(movingrect,fixedrect)){
 movingrect.shapeColor = "yellow"
 fixedrect.shapeColor = "yellow"
 }
else{
 movingrect.shapeColor = "red"
 fixedrect.shapeColor = "red"
}

 drawSprites();
}

function istouching(object1,object2){
  
  
if(object1.x-object2.x<=(object1.width/2+object2.width/2)&&
object2.x-object1.x<=(object1.width/2+object2.width/2)&&
object1.y-object2.y<=(object1.height/2+object2.height/2)&&
object2.y-object1.y<=(object1.height/2+object2.height/2)
){
  return true;
}
else{
  return false;
}

  
}



