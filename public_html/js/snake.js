var snake;

var context;
var screenWidth;
var screenHeight;

gameInitialize()
gameDraw()

function gameInitialize () {
    var canvas = document.getElementById("game-screen");
    canvas = canvas.getContext("2d");
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    
    canvas.width = screenWidth;
    canvas.height = screenHeight;
    }
function gameloop () {
    
}

function gameDraw () {
    context.fillStyle = "rgb (58 , 45 ,168)";
    context.fillRect (0 ,0 ,screenWidth, screenHeight);
}