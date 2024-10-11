/* Nim Trainer by [Evan Whitelock]
 * based on this flowchart:
 * https://lucid.app/lucidchart/136a018a-fc80-416b-ac3a-4eb0c5a584df/view
 */

/* Global Variables */
var trainer = false
var count = 0

/** 
 * main  
 * Handles new Nim games with gametype choice simple or trainer and a play again option. 
 * @param none 
 * @return none
 */
/* Main */
function main(){
let again = true
trainer = confirm("Do you want to watch the computer win?");
playNim();
again = confirm("Play again?");
if (again == true) main();
}

/** 
 * playNim 
 * plays a game with user first and computer second. Winner declared in an alert box. 
 * @param none 
 * @return none
 */
function playNim(){
    alert("Nim game played.");
}

/** 
 * userTurn  
 * User enters a turn. Validation against cheating handled by recursion.
 * @param none 
 * @return none
 */
function userTurn(){

}

/** 
 * cpuTurn 
 * Generate computer's turn without losing on purpose.  Different turns if trainer or simple.  
 * @param none 
 * @return none
 */
function cpuTurn(){

}
