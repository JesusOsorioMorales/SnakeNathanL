/*------------------------------------------------------------------------------
 * variables
 * -----------------------------------------------------------------------------
 */

var snake;
var snakeLength;
var snakeSize;

var food;

var context;
var screenWidth;
var screenHeight;
var snakeDirection;

/*------------------------------------------------------------------------------
 * Execution
 * -----------------------------------------------------------------------------
 */

gameInitialize();
snakeInitialize();
foodInitialize();
setInterval(gameloop, 1000/30);

//gameInitialize();
//snakeInitialize();

/*------------------------------------------------------------------------------
 * funtions
 * -----------------------------------------------------------------------------
 */

function gameInitialize () {
    var canvas = document.getElementById("game-screen");
    context = canvas.getContext("2d");
     
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    
    canvas.width = screenWidth;
    canvas.height = screenHeight;
    
    document.addEventListener("keydown", keyBoardHandler);
}
    
function gameloop () {
        
    gameDraw();
    snakeUpdate();    
    snakeDraw(); 
    foodDraw();
}

function gameDraw () {
    context.fillStyle = "rgb(58 , 45 ,162)";
    //context.fillStyle = "green";
    context.fillRect(0 ,0 ,screenWidth, screenHeight);
}

/*------------------------------------------------------------------------------
 * snake  Functions
 * -----------------------------------------------------------------------------
 */


function snakeInitialize ()  {
    snake = [];  
    snakeLength = 1;
    snakeSize = 20; 
    snakeDirection = "down";
    
    for(var index = snakeLength - 1; index >= 0; index--) {
        snake.push({
            x: index,
            y:0
            
            
        });
        }
}

function snakeDraw () {
     for(var index = 0; index < snake.length; index++ ) {
        context.fillStyle = "red";
        context.fillRect(snake[index].x * snakeSize, snake[index].y * snakeSize, snakeSize, snakeSize);
    }
}

function snakeUpdate (){
    
    var snakeHeadX = snake[0].x;
    var snakeHeadY = snake[0].y;
    
    if(snakeDirection == "down") {
        snakeHeadY++;
    }    

    else if (snakeDirection == "right") {
        snakeHeadX++;
    }
      if(snakeDirection == "up") {
        snakeHeadY++;
    }    
     else if (snakeDirection == "left") {
        snakeHeadX++;
    }
    
    //checkFoodCollisions();
    
    var snakeTail = snake.pop();
    snakeTail.x = snakeHeadX;
    snakeTail.y = snakeHeadY;
    snake.unshift(snakeTail);
    
}
/*------------------------------------------------------------------------------
 * Food Function
 *------------------------------------------------------------------------------
 */
function foodInitialize()  {
    food = {
        x:0,
        y:0
    };
    
    setFoodPosition();
}

function foodDraw()  {
    console.log("foodDraw");
    context.fillStyle = "gold";
    context.fillRect(food.x*snakeSize, food.y*snakeSize, snakeSize, snakeSize);
}

function setFoodPosition() {
    var randomX = Math.floor (Math.random() * screenWidth) + 0;
    var randomY = Math.floor (Math.random() * screenHeight);
    
    food.x = Math.floor (randomX / snakeSize);
    food.y = Math.floor (randomY / snakeSize);
}
/*------------------------------------------------------------------------------
 * input Functions
 * -----------------------------------------------------------------------------
 */

function keyBoardHandler(event) {
    console.log(event);
    
    
   if(event.keyCode == "39" && snakeDirection !="left") {
       snakeDirection = "right";
   }
   else if(event.keycode == "40" && snakeDirection !="up") {
       snakeDirection = "down";
   }
   if(event.keyCode == "39" && snakeDirection !="right") {
       snakeDirection = "left";
   }
   else if(event.keycode == "40" && snakeDirection !="down") {
       snakeDirection = "up";
   }
}