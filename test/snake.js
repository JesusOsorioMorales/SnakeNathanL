var snake;
var snakeLength;
var snakeSize;

var context;
var screenWidth;
var screenHeight;

gameInitialize();
snakeInitialize();
gameDraw();
snakeDraw();

function gameInitialize () {
    var canvas = document.getElementById("game-screen");
    canvas = canvas.getContext("2d");
    
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    
    canvis.width = screenWidth;
    canvis.height = screenHeight;
}
    
function gameloop () {
    
}

function gamedraw () {
    context.fillStyle = "rgb (58 , 45 ,168)";
    context.fillRect (0 ,0 ,screenWidth, screenHeight);
}

function snakeInitialize ()  {
    snake = [];  
    snakeLength = 5;
    snakeSize = 20; 
    
    for(var index = 0; index < snakeLength; index++ ) {
        snake.push({
            x: index,
            y:0
        });
        }
}

function snakeDraw () {
     for(var index = 0; index < snake.length; index++ ) {
        context.fillStyle = "white";
        context.fillRect(snake[index].x * snakeSize, snake[index].y * snakeSize, snakeSize, snakeSize);
    }
}

function snakeUpdate (){
    
}