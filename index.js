//Game constants & variables
let direction={x:0, y:0};
const foodSound=new Audio('Food.mp3');
const gameOverSound=new Audio('Game Over.mp3');
const moveSound= new Audio('Direction change.mp3');
const bgSound=new Audio('BG music.mp3');
//let speed=2;
//let lastPaintTime=0;
//let snakeArr=[
  //   {x:13, y:15}
//];
//food = {x:12,y:16};

//Game Functions
function main(ctime){
    window.requestAnimationFrame(main);
    console.log(ctime)
// if((ctime - lastPaintTime)/1000 <1/speed){
//   return;
// }
// lastPaintTime=ctime;
// gameEngine()
//}
//function gameEngine(){
//  //Part 1:Upating the snake variable
//  //Part 2 Display the snake and food
//  //Display the snake
//  board.innerHTML="";
//  snakeArr.forEach((e,index)=>{
//      snakeElement=document.createElement('div');
//      snakeElement.style.gridRowStart=e.y;
//      snakeElement.style.gridColumnStart=e.x;
//      snakeElement.classList.add('food')
//      board.appendChild(snakeElement);
//  })
}

window.requestAnimationFrame(main);       
    


