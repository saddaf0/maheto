var boy;
var lion;
var jungle, stone, wood;
var edges
var stoneGroup,woodGroup;
function preload(){
  boyImg = loadImage("assets/boy.png")
  jungleImg = loadImage("assets/jungle.png")
  stoneImg = loadImage("assets/rock.png")
  woodImg = loadImage("assets/wood.png")
  lionImg = loadImage("assets/lion.png")

  breathingSound = loadSound("assets/breathing.mp3")
  jungleSound = loadSound("assets/jungle.mp3")
  lionGrowl = loadSound("assets/lionGrowl.mp3")
}

function setup() {
  createCanvas(900,600);

  jungle=createSprite(300,300,1200,600)
  jungle.addImage("abc",jungleImg)
  jungle.scale = 3.3
  jungle.velocityX=-3

  boy = createSprite(250, 420, 10, 10);
  boy.addImage("abc",boyImg)
  boy.scale = 0.5

  edges = createEdgeSprites()
  
  lion = createSprite(100, 420, 50, 50);
  lion.addImage("abc", lionImg)
  lion.scale=0.2
  lion.velocityX = 1.5


  
  score = 0;

  //boy.setCollider()

  stoneGroup = createGroup();
  woodGroup = createGroup();

}

function draw() {
  background(0); 

  //if(gameState === PLAY){
    if(keyDown(UP_ARROW)){
      boy.velocityY = -16
    }
    boy.velocityY=boy.velocityY+1

    if(keyDown(RIGHT_ARROW)){
      boy.velocityX = 10
      breathingSound.play()
    }
    Stone()
    Wood()
    
    //jungle.velocityX = 10
    //if(edges.isTouching(boy)){
      boy.collide(edges)
    //}

 

   if(woodGroup.isTouching(boy)){
     woodGroup.destroyEach()
      score = score+1
    
//}

    if(stoneGroup.isTouching(boy)){
     //gameState = END
     lion.velocityX = 0
     boy.velocityX = 0
     jungle.velocityX = 0
     woodGroup.setVelocityXEach(0)
     stoneGroup.setVelocityXEach(0)
    }
  
  
  if(lion.isTouching(boy)){
    lionGrowl.play()
    //gameState = END
    lion.velocityX = 0
  boy.velocityX = 0
  jungle.velocityX = 0
  woodGroup.setVelocityXEach(0)
  stoneGroup.setVelocityXEach(0)
  fill (25)
  stroke("blue")
  textSize(25)
  text("You lost",200,400)
  }
}
//else if(gameState === END){
  //lion.velocityX = 0
  //boy.velocityX = 0
  //jungle.velocityX = 0
  //woodGroup.setVelocityXEach(0)
  //stoneGroup.setVelocityXEach(0)

  //fill (25)
  //stroke("red")
 // textSize(25)
  //text("You lost",600,400)
//}
if(jungle.x<0){
  jungle.x=jungle.width/8
}

  drawSprites();
}

function Stone(){
  if(frameCount%100===0){
    stone = createSprite(50, 800, 5, 5)
    stone.addImage(stoneImg)
    stone.x = Math.round(random(50,50))
    stone.velocityX = -(8+(score/10))
    stone.lifetime=50;
    stone.scale=0.1
    stoneGroup.add(stone)

  }
}

function Wood(){
  if(World.frameCount%70===0){
    wood = createSprite(800, 200, 10, 10)
    wood.addImage("abc",stoneImg)
    wood.x = Math.round(random(100,400))
    wood.velocityX = -(8+(score/10))
    wood.lifetime=50;
    woodGroup.add(wood)
  }
}