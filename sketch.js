var movingrect,fixedrect;
function setup() {
  createCanvas(400,400);
  movingrect=createSprite(200,300,30,30);
  movingrect.shapeColor="yellow";
  fixedrect=createSprite(200,200,30,30);
  fixedrect.shapeColor="yellow";
}

function draw() {
  background(0);
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  if(movingrect.x-fixedrect.x<=movingrect.width/2+fixedrect.width/2 && fixedrect.x-movingrect.x<=fixedrect.width/2+movingrect.width/2
    && movingrect.y-fixedrect.y<=movingrect.height/2+fixedrect.height/2 && fixedrect.y-movingrect.y<=fixedrect.height/2+movingrect.height/2)
   {
     movingrect.shapeColor="green";
     fixedrect.shapeColor="green";
   }
  else
   {
    movingrect.shapeColor="yellow";
    fixedrect.shapeColor="yellow";
   }
  drawSprites();
}