var vir, virImg;
var back, BackImg;
var Lockdown, covid, Group;
var LockdownImg, CovidImg, groupImg;
var Lockdown1, covid1, Group1;
var Sanitizer, mask, vitaminC;
var SanitizerImg, maskImg, vitaminCImg;
//var vitaminC1, mask1, Sanitizer1;
var MvirImg;
var Invi, Invi2, Invi3, Invi4;
var house, houseImg;
var house1;
var Imun = 100;
var feedB;
var gameMode = 0;
var vir0;
var gameOver, gameOverImg;
var Finish, FinishImg
var Code, CodeImg;
var gameState=0;

var bg,bg2,form,system,code,security;
var score=0;

function preload(){
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
  MvirImg=loadAnimation("MVir/MVir1.png","MVir/MVir2.png","MVir/MVir3.png","MVir/MVir4.png","MVir/MVir5.png","MVir/MVir6.png","MVir/MVir7.png","MVir/MVir8.png");
  virImg=loadAnimation("Vir/VIR1.png","Vir/VIR2.png","Vir/VIR3.png","Vir/VIR4.png","Vir/VIR5.png","Vir/VIR6.png","Vir/VIR7.png","Vir/VIR8.png");
  BackImg=loadImage("bg.png");
  CovidImg=loadImage("Enemy/Covid.png");
  groupImg=loadImage("Enemy/Group.png");
  LockdownImg=loadImage("Enemy/Lockdown.png");
  houseImg=loadImage("Help/house.png");
  maskImg=loadImage("Help/Mask.png");
  SanitizerImg=loadImage("Help/Sanitizer.png");
  vir0=loadImage("Vir/VIR3.png");
  gameOverImg=loadAnimation("GameOver/red.png", "GameOver/yellow.png", "GameOver/white.png", "GameOver/blue.png")
  FinishImg=loadImage("Finish.png")
  CodeImg=loadAnimation("GameOver/blue1.png", "GameOver/red1.png", "GameOver/white1.png", "GameOver/yellow1.png");
}

function setup() {
  createCanvas(1700,750);

  back=createSprite(displayWidth*2.5, 750/2, 10000, 750)
  back.addImage("back", BackImg);
  back.debug=true;
  back.velocityX = -3

  vir=createSprite(120, 607, 30, 30);
  vir.addAnimation("vir",virImg);

  invi=createSprite(640,225,displayWidth,10);
  invi.visible = false;

  invi2=createSprite(28,745, displayWidth, 10);
  invi2.visible = false;

  invi3=createSprite(350, 577, 10, 350);
  invi3.visible = false;

  invi4=createSprite(40, 577, 10, 350);
  invi4.visible = false;

  Group=createSprite(1916,375,10,10);
  Group.addImage("group of people",groupImg);
  Group.scale = 0.5
  Group.velocityX=-3;
   
  covid=createSprite(1060, 550, 20, 20);
  covid.addImage("Covid", CovidImg);
  covid.scale = 0.4;  
  covid.velocityX=-3;

  Lockdown=createSprite(4000,450,10,10);
  Lockdown.addImage("Lockdown",LockdownImg);
  Lockdown.velocityX=-3;

  Lockdown1=createSprite(7000, 450, 10, 10);
  Lockdown1.addImage("Lockdown",LockdownImg)
  Lockdown1.velocityX=-3;

  house=createSprite(3500, 300, 10, 10);
  house.addImage("house", houseImg);
  house.velocityX=-3;

  house1=createSprite(6500, 300, 10, 10);
  house1.addImage("house", houseImg);
  house1.velocityX=-3

  mask=createSprite(3000, 600, 10, 10);
  mask.addImage("mask", maskImg);
  mask.velocityX=-3;

  Group1=createSprite(4700, 550, 20, 20);
  Group1.addImage("group", groupImg);
  Group1.scale = 0.5
  Group1.velocityX=-3;

  Sanitizer=createSprite(5300, 490, 20, 20);
  Sanitizer.addImage("San", SanitizerImg);
  Sanitizer.velocityX = -3

  covid1=createSprite(6000, 600, 20, 20);
  covid1.addImage("Covid", CovidImg);
  covid1.scale = 0.4;
  covid1.velocityX=-3;

  gameOver=createSprite(850, 375, displayWidth, displayHeight);
  gameOver.addAnimation("game", gameOverImg);
  gameOver.visible = false;

  Code=createSprite(850, 375, displayWidth, displayHeight);
  Code.addAnimation("Code", CodeImg)
  Code.visible = false;
  Code.scale = 0.75;
  
  feedB=createSprite(1562, 70, 120, 10);

  Finish = createSprite(8000, 550, 20, 20);
  Finish.addImage("Finish", FinishImg);
  Finish.velocityX = -3;
  Finish.scale = 1.5

     system=new System();
     security=new Security();
}

function draw() {
 
  if(gameState===0){
    
    background(0, 0, 0);  
    console.log(gameState);
    security.hide();

    level1();

    if(Finish.isTouching(vir)){
      Code.visible = true;
      gameState=1;
    }
  }

 else if(gameState===1){
 
   // console.log(gameState);
   background(bg);
   back.visible=false;
   vir.visible=false;
   Code.visible=false;
   feedB.visible=false;
   Finish.visible=false;

   clues();
   textSize(20);
   fill("white");
   text("Score: " + score, 450, 50);
   security.show();
   security.display();

    if(score === 1) {
      clear()
      background(bg2)
      fill("black")
      textSize(40);
      text("LEVEL 2",250, 200);
    }
  }

  drawSprites();

  if(gameState===0){
    textSize(30);
    fill("blue");
    text("Imun: "+Imun, 1500, 61);
  
  fill("black");
  text(mouseX+","+mouseY,mouseX,mouseY);
  }
}  