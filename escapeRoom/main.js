const readline = require("readline-sync");


const name = readline.question("What is your name? ");
console.log('Hi ' + name + ' Welcome to the Escape Room!');

let keyFound = false;


function hand () {
    console.log("Sorry you died :( ..... Try agian");
}
function findKey () {
    
    console.log("You found the key, and now you can open the door!");
}



function openDoor () {
        if (keyFound === true) {
            console.log("Congratulations you have escaped!")  
        }
        else {
            console.log("Nice try..... but you need the key to open the door!")
        }
    
        

}








var game = true
while (game){
const choices = ["Put your hand in the hole", "Find the Key", "Open the door"];
const selectChoice = readline.keyInSelect(choices, "Please make your choice");

if(selectChoice === 0) {
    hand();
}
else if(selectChoice === 1) {
    keyFound = true;
    findKey();
}

else if(selectChoice === 2) {
    
    openDoor(); 
} 

else  {
    break;
}

}




