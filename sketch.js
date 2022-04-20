var bow,backg,arrow,ballon,score
var bowimg,backgroundImage,arrowimg
var ballonimg1,ballonimg2,ballonimg3

function preload(){

    bowimg = loadImage("bow0.png")
    backgroundImage = loadImage("background0.png")
    arrowimg = loadImage("arrow0.png")
    
    ballonimg1 = loadImage("greenballon.png")
    ballonimg2 = loadImage("blueballon.png")
    ballonimg3 = loadImage("redballon.png")


}

function setup(){
    createCanvas(400,400)

    backg = createSprite(200,200)
    backg.addImage("bg",backgroundImage)
    backg.scale = 2.5


    bow = createSprite(380,200,50,50)
    bow.addImage("bow",bowimg)
    
    score = 0

}

function draw(){
    background("white")
    

    bow.y = World.mouseY

    if(keyDown("space")){
        arroow()
    }

    backg.velocityX = -3

    if(backg.x < 0){
        backg.x = backg.width/2
    }


    ballons()

    drawSprites()
    text("Score: "+ score, 300,20)
}


function ballons(){
    if(frameCount % 100 === 0 ){

        ballon = createSprite(5,390)
        ballon.lifetime = 150
        ballon.velocityX = 3
        ballon.scale = 0.1
        ballon.y = Math.round(random(10,380))

        var rand = Math.round(random(1,3))
        switch(rand){
        case 1 : ballon.addImage(ballonimg1)
        break

        case 2 : ballon.addImage(ballonimg2)
        break

        case 3 : ballon.addImage(ballonimg3)
        break


        }
    }
}

function arroow(){
    arrow = createSprite(100,100)
    arrow.addImage(arrowimg)
    arrow.x = 390
    arrow.y = bow.y
    arrow.lifetime = 150
    arrow.velocityX = -4
    arrow.scale = 0.3

}


