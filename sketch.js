var  PLAY = 1;
var END = 0;
var gameState = PLAY;
var score
var naruto 
var narutoImg
var ramen,ramenImg 
var kunai,kunaiImg
var villageImg 
var coin 
var Obstacles
function preload (){
narutoImg = loadImage("naruto.gif");
ramenImg = loadImage("ramen .png");
kunaiImg = loadImage("kunia.png");
villageImg = loadImage("bg leaf village.jpg")

}
function setup(){
  createCanvas(800,800);

  naruto = createSprite(200,200,25,25);
  naruto.addImage(narutoImg);
  naruto.scale = .5;
 

ramen = createSprite(250,250);
ramen.addImage(ramenImg);
ramen.scale = 1;

kunai = createSprite(200,200);
kunai.addImage(kunaiImg);
kunai.scale = 0.1;

track = createSprite(250,50);
track.addImage(villageImg);
track.velocityX = -15;
track.scale = 2.4;

coinGroup = new Group();
obstacleGroup = new Group();

naruto.setCollider("rectangle",0,0,250,450);
naruto.debug = false;

score = 0;
}
function draw(){
  background("white");

  if(gameState === PLAY){
    //Making the Road go On and On 
   if(track.x < 0){
       track.x = track.width/2;
   }
   
   //Move Player with Right Arrow Key
   if(keyDown("up_arrow")){
     naruto.y = naruto.y + -7;  
   }  
   
   //Move Player with Left Arrow Key
   if(keyDown("down_arrow")){
     naruto.y = naruto.y + 7;  
   }
   
   if(naruto.isTouching(coinGroup)){
     coinGroup.destroyEach();
     
     score = score + 1;
   }  
    
   spawnCoins();
   spawnObstacles();
     
   }
   
     if(naruto.isTouching(obstacleGroup)){
     coinGroup.destroyEach();
     obstacleGroup.destroyEach();
     track.velocityX = 0;
     gameState = END  
    
   }    
   else if(gameState === END){
     
     score = 0;
 
     stroke("black");
     fill("red");
     textSize(50);
     text("GAME OVER",110,345);
     
     
   } 
   drawSprites();
   
   stroke("black");
   fill("white");
   textSize(15);
   text("Score: "+ score, 100,50);
 } 
 
 function spawnCoins(){
   
   if (frameCount % 50 === 0){
       var coin = createSprite(300,545,10,10);
 
       coin.x = Math.round(random(400,500));
       coin.y = Math.round(random(450,500));  
       coin.addImage(ramenImg);
       coin.scale = 0.5;
       coin.velocityX = -5;
 
       coin.lifetime = 250;
 
       coinGroup.add(coin);
   }
 }
 
 function spawnObstacles() {
   if(frameCount % 150 === 0) {
     var obstacle = createSprite(450,600,10,40);
     
     obstacle.x = Math.round(random(300,400));
     obstacle.y = Math.round(random(300,500));  
     obstacle.velocityX = -4;
     obstacle.addImage(kunaiImg);
             
     obstacle.scale = 0.1;
     obstacle.lifetime = 250;
     
     obstacleGroup.add(obstacle);
   }
 

 
}
