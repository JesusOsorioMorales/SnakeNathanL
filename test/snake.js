var snake;
var snakeLength;
var snakeSize;

var context;
var screenWidth;
var screenHeight;

gameInitialize();
sankeInitialize();
gameDraw();
snakeDraw();
snakeUpdate();
snakeDraw();

//gameInitialize();
//snakeInitialize();

function gameInitialize () {
    var canvas = document.getElementById("game-screen");
    context = canvas.getContext("2d");
    
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    
    canvas.width = screenWidth;
    canvas.height = screenHeight;
}
    
function gameloop () {
        
    snakeDraw();
    snakeUpdate();    
    snakeDraw(); 
}

function gameDraw () {
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