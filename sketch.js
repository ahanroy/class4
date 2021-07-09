var  runner,path,coin,bomb
var  runnerImg,pathImg,coinImg,bombImg

function preload(){
  runnerImg=loadAnimation("Runner-1.png","Runner-2.png") 
  pathImg=loadImage("path.png")
  coinImg=loadImage("coin.png")
  bombImg=loadImage("bomb.png")
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY=4
  path.scale=1.2

runner=createSprite(180,340,30,30)
  runner.scale=0.08
  runner.addAnimation("Running", runnerImg)

leftBoundary=createSprite(0,0,100,800)
  leftBoundary.visible=false

rightBoundary=createSprite(40,0,100,800)
  rightBoundary.visible=false


}

function draw() {
  background(0);

runner.x=World.mouseX


runner.collide(leftBoundary)
runner.collide(rightBoundary)


if(path.y>400){
path.y=200
}
  drawSprites()
}
