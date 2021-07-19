function level1(){
    

    if(keyDown(UP_ARROW)){
        vir.y = vir.y-10;
      }
    
      if(keyDown(DOWN_ARROW)){
        vir.y = vir.y+10;
      }
    
      if(keyDown(RIGHT_ARROW)){
        vir.x = vir.x+10
      }
    
      if(keyDown(LEFT_ARROW)){
        vir.x = vir.x-10;
      }
    
      if(Imun >= 70){
        feedB.shapeColor = ("Green");

      }
    
      if(Imun >= 30 && Imun < 70){
        feedB.shapeColor = ("yellow");
      }
    
      if(Imun < 30){
        feedB.shapeColor = ("red");
      }
    
      if(covid.isTouching(vir)){
        gameMode = 0;
        vir.addAnimation("vir", virImg);
      }
    
      if(Lockdown.visible === false){
        //Imun = Imun + 10;
        gameMode = 0;
        vir.addAnimation("vir", virImg);
      }
    
      if(Lockdown1.visible === false){
        gameMode = 0
        vir.addAnimation("vir", virImg);
      }
    
      if(Group1.visible === false){
        //Imun = Imun + 20
        gameMode = 0;
        vir.addAnimation("vir", virImg);
      }
    
      if(covid1.isTouching(vir)){
        gameMode = 0;
        vir.addAnimation("vir", virImg);
      }
    
      if (keyDown('space')){
          back.velocityX = -10;
          covid.velocityX = -10;
          covid1.velocityX = -10;
          Sanitizer.velocityX = -10;
          //Sanitizer1.velocityX = 0;
          house.velocityX = -10;
          house1.velocityX = -10;
          Lockdown.velocityX = -10;
          Lockdown1.velocityX = -10;
          Group1.velocityX = -10;
          Group.velocityX = -10;
          mask.velocityX = -10
          Finish.velocityX = -10;
      }
    
    
      
    
      if(gameMode === 0){
    
        if(covid.isTouching(vir)){
          Imun = Imun - 30
          covid.visible = false;
          covid.y = 10;
        }
    
        if(covid1.isTouching(vir)){
          Imun = Imun - 30
          covid1.visible = false;
          covid1.y = 10;
        }
    
        if(Imun <= 0){
          back.velocityX = 0;
          covid.velocityX = 0;
          covid1.velocityX = 0;
          Sanitizer.velocityX = 0;
          //Sanitizer1.velocityX = 0;
          house.velocityX = 0;
          Lockdown.velocityX = 0;
          //Lockdown1.velocityX = 0;
          Group1.velocityX = 0;
          Group.velocityX = 0;
          vir.addImage("vir", vir0);
          gameOver.visible = true;
        }
    
        if(house.isTouching(vir)){
          house.visible = false;
          //Lockdown.visible = false;
          Lockdown.y = -10000;
          //vir.addAnimation("vir", virImg);
        }
    
        if(house1.isTouching(vir)){
          house1.visible = false;
          Lockdown1.y = -10000
        }
    
        if(Group.isTouching(vir)){
          Imun = Imun - 20
          Group.visible = false;
          Group.y = 10;
        }
    
        if(Group1.isTouching(vir)){
          Imun = Imun - 30
          Group1.visible = false;
          Group1.y = -1000;
        }
        if(Lockdown.isTouching(vir)){
          Imun = Imun - 40;
          Lockdown.visible = false;
          Lockdown.y = -10000;
        }
    
        if(Lockdown1.isTouching(vir)){
          Imun = Imun - 40;
          Lockdown1.visible = false;
          Lockdown1.y = -10000;
        }
    
        if(Lockdown.y === -10000){
          Lockdown.visible = true;
        }
    
        if(Lockdown1.y === -10000){
          Lockdown1.visible = true;
        }
    
        if(Sanitizer.isTouching(vir)){
          Imun = Imun + 20;
          Sanitizer.visible = false;
          Sanitizer.y = -5;
        }
    
        if(Group1.y === -1000){
          Group1.visible = true;
        }
    
        if(Finish.isTouching(vir)){
          Code.visible = true;
        }
    
    }
      
      if(vir.isTouching(mask)){
        vir.addAnimation("vir", MvirImg);
        mask.visible = false;
        mask.y = 10;
        gameMode = 1;
      }
      
      if(gameMode === 1){
        
        if(covid.isTouching(vir)){
          Imun = Imun - 20
          covid.visible = false;
          covid.y = 10;
          vir.addAnimation("vir", virImg);
        }
    
        if(Imun <= 0){
          back.velocityX = 0;
          covid.velocityX = 0;
          covid1.velocityX = 0;
          Sanitizer.velocityX = 0;
          //Sanitizer1.velocityX = 0;
          house.velocityX = 0;
          Lockdown.velocityX = 0;
          //Lockdown1.velocityX = 0;
          Group1.velocityX = 0;
          Group.velocityX = 0;
          vir.addImage("vir", vir0);
          gameOver.visible = true;
        }
    
        if(house.isTouching(vir)){
          house.visible = false;
          //Lockdown.visible = false;
          Lockdown.y = -10000;
          //vir.addAnimation("vir", MvirImg);
          //house.y = -100;
        }
    
        if(house1.isTouching(vir)){
          house1.visible = false;
          //Lockdown.visible = false;
          Lockdown1.y = -10000;
          //vir.addAnimation("vir", MvirImg);
          //house.y = -100;
        }
    
        if(Group.isTouching(vir)){
          Imun = Imun - 10
          Group.visible = false;
          Group.y = 10;
          vir.addAnimation("vir", virImg);
        }
    
        if(Group1.isTouching(vir)){
          Imun = Imun - 10
          Group1.visible = false;
          Group1.y = -1000;
          vir.addAnimation("vir", virImg);
        }
    
        if(Lockdown.isTouching(vir)){
          Imun = Imun - 30;
          Lockdown.visible = false;
          Lockdown.y = -10000
          vir.addAnimation("vir", virImg);
        }
    
        if(Lockdown1.isTouching(vir)){
          Imun = Imun - 30;
          Lockdown1.visible = false;
          Lockdown1.y = -10000
          vir.addAnimation("vir", virImg);
        }
    
        if(Sanitizer.isTouching(vir)){
          Imun = Imun + 20;
          Sanitizer.visible = false;
          Sanitizer.y = -5;
        }
    
        
      }
    
      vir.collide(invi);
      vir.collide(invi2);
      vir.collide(invi3);
      vir.collide(invi4);
}