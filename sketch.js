var brickImg,cementImg,flowerPotImg,nailCutterImg,trowelImg,utensilImg
var brick,cement,flowerPot,nailCutter,trowel,utensil
var houseItems = 0 
var score = 0

function setup() {
  createCanvas(1350,650);
  brick = createSprite (400,150,10,10)
  cement = createSprite (750,150,10,10)
  flowerPot = createSprite(1100,150,10,10)
  nailCutter = createSprite(400,400,10,10)
  trowel = createSprite(1100,400,10,10)
  utensil = createSprite(750,400,10,10)
}

function preload(){
  brickImg = loadAnimation("images/brick.png")
  cementImg = loadAnimation('images/cement.png')
  flowerPotImg = loadAnimation('images/flowerPot.png')
  nailCutterImg = loadAnimation('images/nailCutter.png')
  trowelImg = loadAnimation('images/trowel.png')
  utensilImg = loadAnimation('images/utensil.png')
}


function draw() {
  background(0,0,0);  
 brick.addAnimation("brick",brickImg);
 cement.addAnimation("cement",cementImg);
 flowerPot.addAnimation("flowerPot",flowerPotImg);
 nailCutter.addAnimation("nailCutter",nailCutterImg);
 trowel.addAnimation("trowel",trowelImg);
 utensil.addAnimation("utensil",utensilImg);

 textSize(30)
 text("Choose the Items Used for Construction",500,25)

 text("score = "+ score,950,20)

 

 if(mousePressedOver(brick)){
 houseItems = 1
 score = score+5
 }

 if(mousePressedOver(cement)){
    houseItems = 1
    score = score+5
  }

 if(mousePressedOver(trowel)){
  houseItems = 1
  score = score+5
 }

 if(mousePressedOver(flowerPot)){
   houseItems = 0
   score = score - 3 
  }
  
  if(mousePressedOver(utensil)){
    houseItems = 0
    score = score - 3
    }

    if(mousePressedOver(nailCutter)){
      houseItems = 0
      score = score - 3
      }

      if(frameCount % 60 === 0) {
         brick = createSprite(400,150,10,10);
       
        
        
       
        var rand = Math.round(random(1,6));
        switch(rand) {
          case 1: brick.changeAnimation("brick",brickImg);
                  break;
          case 2: brick.changeAnimation("cement",cementImg);
                  break;
          case 3: brick.changeAnimation("flowerPot",flowerPotImg);
                  break;
          case 4: brick.changeAnimation("nailCutter",nailCutterImg);
                  break;
          case 5: brick.changeAnimation("trowel",trowelImg);
                  break;
          case 6: brick.changeAnimation("utensil",utensilImg);
                  break;
          default: break;
        }
        
       
      }

  drawSprites();
}
