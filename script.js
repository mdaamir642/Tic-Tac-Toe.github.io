
var boxes = document.getElementsByClassName("box");
var counter = 1;
var currentPlayer = "";
var player1 = "";
var player2 = "";


function toss(button){
var result = Math.floor(Math.random()*2);
if(result === 0){
currentPlayer = "player1"
player1 = `<i class="fa-regular fa-circle" id="zero"></i>`

}

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























