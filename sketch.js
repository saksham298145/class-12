var trex, trex_running, trex_collided;

var ground, invisibleGround, groundImage;

var cloud,cloudImage

function preload() {

trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

trex_collided = loadImage("trex_collided.png");

groundImage = loadImage("ground2.png")

cloudImage= loadImage("cloud.png")

}
function setup() {

createCanvas(600, 200);

//create a trex sprite

trex = createSprite(50,160,20,50);

trex.addAnimation("running", trex_running);

trex.scale = 0.5;

//create a ground sprite

ground = createSprite(200,180,400,20);

ground.addImage("ground",groundImage);

ground.x = ground.width /2;

ground.velocityX = -4;

//invisible ground

invisibleGround=createSprite(200,190,400,10)

invisibleGround.visible=false
}
function draw() {

background(rgb(255,165,0));

//jump when the space button is pressed

if (keyDown("space") && trex.y>=120) {

trex.velocityY = -10;

}

trex.velocityY = trex.velocityY + 0.8

if (ground.x < 0) {

ground.x = ground.width / 2;

}

trex.collide(invisibleGround);

spawnClouds()
drawSprites();



//console.log(frameCount)

}

function spawnClouds(){

    if (frameCount%100===0){

    

cloud=createSprite(600,100,40,10)

cloud.addImage("cloud",cloudImage)

cloud.scale=0.3


cloud.velocityX=-4


cloud.y=Math.round(random(10,70))

cloud.depth=trex.depth

trex.depth=trex.depth+1


    }

}