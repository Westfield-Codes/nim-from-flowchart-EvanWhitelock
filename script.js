/* Nim Trainer by [Evan Whitelock]
 * based on this flowchart:
 * https://lucid.app/lucidchart/136a018a-fc80-416b-ac3a-4eb0c5a584df/view
 */

/* Global Variables */
var trainer = false;
var count = 0;

/** 
 * main  
 * Handles new Nim games with gametype choice simple or trainer and a play again option. 
 * @param none 
 * @return none
 */
/* Main */
function main(){
let again = true;
trainer = prompt("Do you want to watch the computer win?");
playNim();
again = confirm("Play again?");
if (again == true) 
    main();
else (again == "no");
}

/** 
 * playNim 
 * plays a game with user first and computer second. Winner declared in an alert box. 
 * @param none 
 * @return none
 */
function playNim(){
    count = 0;
    while (count < 21){
        userTurn();
        if (count > 20) alert("CPU wins!");
        else{
            cpuTurn();
            if (count > 20) alert("User wins!");
            
        }
    }
}

/** 
 * userTurn  
 * User enters a turn. Validation against cheating handled by recursion.
 * @param none 
 * @return none
 */
function userTurn(){
    let turn = prompt("Input 1, 2, or 3?");
    turn = parseInt(turn);
    if (turn < 1 || turn > 4) count + turn 
    {
        alert("Your input is invalid");
        playerTurn();
}
    else { 
    count+= turn;
    alert("Count is now"+count);
    }
}
/** 
 * cpuTurn 
 * Generate computer's turn without losing on purpose.  Different turns if trainer or simple.  
 * @param none 
 * @return none
 */
function cpuTurn(){
if (count == 17) turn = 3;
else if (count == 18) turn = 2;
else if (count > 18) turn = 1;
else if (trainer == true) turn = 4-count%4;
else turn = Math.floor(Math.random()*3)+1;
count+= turn;
alert("I counted "+turn+", count is now"+count+".");
}
