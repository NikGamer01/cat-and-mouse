var cat  ,  catimg1 , catimg2 , catimg3 , catimg4;
var mouse , mouseimg1 , mouseimg2 ,  mouseimg3 , mouseimg4;
var garden , gardenimg;
function preload() {
    //load the images here
    gardenimg = loadImage("images/garden.png");
    catimg1 = loadImage("images/cat1.png");
    catimg2 = loadImage("images/cat2.png" , "images/cat3.png");
    catimg3 = loadImage("images/cat4.png");
    mouseimg1 = loadImage("images/mouse1.png");
    mouseimg2 = loadImage("images/mouse2.png" , "images/mouse3.png");
    mouseimg3 = loadImage("images/mouse4.png")


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870 , 600 );
    cat.addAnimation("cat112" , catimg1);
    cat.scale = 0.2;
    mouse = createSprite(200 ,600);
    mouse.addAnimation("mouse112" , mouseimg1)
    mouse.scale = 0.15;


}

function draw() {

    background(gardenimg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width-mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("cat_lastimg" , catimg3);
        cat.x = 300 ;
        cat.velocityX = 0;
        cat.scale = 0.2;
        cat.changeAnimation("cat_lastimg");
        mouse.addAnimation("mouse_lastimg" , mouseimg3);
        mouse.scale = 0.15;
        mouse.changeAnimation("mouse_lastimg");

    }
    keyPressed();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -2;
      cat.addAnimation("cat_running" , catimg2);
      cat.changeAnimation("cat_running");
      mouse.addAnimation("mouse_running" , mouseimg2);
      mouse.changeAnimation("mouse_running");


  }


}
