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
again = prompt("Play again?");
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
    count = prompt("How many numbers do you want to count?");
    turn = count;
    if (turn > 3 || turn < 1) alert("You can't do that!");
    else (count+=turn);
    alert("count is now " + count);
}

/** 
 * cpuTurn 
 * Generate computer's turn without losing on purpose.  Different turns if trainer or simple.  
 * @param none 
 * @return none
 */
function cpuTurn(){

}
