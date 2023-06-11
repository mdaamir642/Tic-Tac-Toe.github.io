
var boxes = document.getElementsByClassName("box");
var counter = 1;
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var tossPage = document.getElementById("tossPage")
var currentPlayer = document.getElementById("currentPlayer")
var wrapper = document.getElementById("wrapper")
var tossResult = document.getElementById("tossWin")
var result = Math.floor(Math.random()*2);
var startBtn = document.getElementById("startBtn")
function toss(){
   result = Math.floor(Math.random()*2);

  if(result === 0){

  tossResult.innerHTML = player1.value.toUpperCase() + " " + "WIN";
}
else{
  tossResult.innerHTML = player2.value.toUpperCase() + " " + "WIN";
  
  currentPlayer.innerHTML = player2.value.toUpperCase() + " " + "TURN";



}

startBtn.style.display = "block"
}


function start(){
 if(result === 0){
  currentPlayer.innerHTML = player1.value.toUpperCase() + " " + "TURN";
}
 else{
  currentPlayer.innerHTML = player2.value.toUpperCase() + " " + "TURN";

 } 
  tossPage.style.display = "none"

  wrapper.style.display = "flex"

}














function special (element){
    
    counter++
if (!element.innerHTML) {
    if (counter % 2 === 0) {
   
       
        element.innerHTML = `<i class="fa-regular fa-circle" id="zero"></i>` 

      

    }
    
    else {
        element.innerHTML = `<i class="fa-solid fa-xmark" id="cross"></i>`

   
      }

 
}

checkWin();

}








function select(element) {

    if(!element.innerHTML){
special(element)

    
}

 
}


 function checkWin() {
     var winningArray = [
       [0, 1, 2], 
       [3, 4, 5],
       [6, 7, 8],
       [0, 3, 6], 
       [1, 4, 7],
       [2, 5, 8],
       [0, 4, 8], 
       [2, 4, 6]
     ];

     for (var i = 0; i < winningArray.length; i++) {
       var combo = winningArray[i];
       var [a, b, c] = combo;

       if (
         boxes[a].innerHTML &&
         boxes[a].innerHTML === boxes[b].innerHTML &&
         boxes[b].innerHTML === boxes[c].innerHTML
       ) {
         boxes[a].style.backgroundColor = "green";
         boxes[b].style.backgroundColor = "green";
         boxes[c].style.backgroundColor = "green";
   if(boxes[a, b, c] === `<i class="fa-regular fa-circle" id="zero"></i>`){
    currentPlayer.innerHTML = player1.value.toUpperCase() + " " + "WIN";


   }
   else{
    currentPlayer.innerHTML = player2.value.toUpperCase() + " " + "WIN";


   }
         disableClicks()
         return;

       }
     }
   }
   function disableClicks() {
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].style.pointerEvents = "none";
    }
  }























