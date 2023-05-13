//Game constants & variables
let direction={x:0, y:0};
const foodSound=new Audio('Food.mp3');
const gameOverSound=new Audio('Game Over.mp3');
const moveSound= new Audio('Direction change.mp3');
const bgSound=new Audio('BG music.mp3');
let speed=2;
let lastPaintTime=0;
let snakeArr=[
     {x:13, y:15}
]
food = {x:12,y:16};

//Game Functions
function main(ctime){
    window.requestAnimationFrame(main);
    console.log(ctime);
 if((ctime - lastPaintTime)/1000 <1/speed){
       return;
     }
     lastPaintTime=ctime;
     gameEngine();
    }
    function gameEngine(){
      //Part 1:Upating the snake variable
      //Part 2 Display the snake and food
      //Display the snake
      board.innerHTML="";
  snakeArr.forEach((e,index)=>{
      snakeElement=document.createElement('div');
      snakeElement.style.gridRowStart=e.y;
      snakeElement.style.gridColumnStart=e.x;
        if(index===0){
          snakeElement.classList.add('head');
           }
        else{
          snakeElement.classList.add('snake');
           }
board.appendChild(snakeElement);
});
//Display Food
foodElement=document.createElement('div');
foodElement.style.gridRowStart=food.y;
foodElement.style.gridColumnStart=food.x;
foodElement.classList.add('food');
board.appendChild(foodElement);
}

window.requestAnimationFrame(main); 
window.addEventListener('keydown',e=>{
    inputDir={x:0,y:1}
    //Start the game 
    moveSound.play();
    switch(e.key){
        case"ArrowUp":
            console.log("ArrowUp")
            break;
        case"ArrowDown":
            console.log("ArrowDown")
            break;
        case"ArrowRight":
            console.log("ArrowRight")
            break;
        case"ArrowLeft":
            console.log("ArrowwLeft")
            break;
        default:
            break;
    }
});           
    


