var ball;
const database=firebase.database()
var reference;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    readme()
}

function readme(){
    reference=database.ref("ball/position")
    reference.on("value",readPosition)
}

function readPosition(data){
    var ballPos=data.val()
    console.log(ballPos)
    ball.x=ballPos.x
    ball.y=ballPos.y

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
    reference.set({x:ball.x,y:ball.y})
}
