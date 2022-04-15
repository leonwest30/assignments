const readline = require('readline-sync');

class User {
    constructor (name, hp, max, min) {
        this.name = name
        this.hp = hp
        this.apMax = max
        this.apMin = min
        this.inventory = [];
    }
    isAlive() {
        return this.hp > 0
    }
}

class Enemy {
    constructor (enemy, hp, max, min, item) {
    this.enemy = enemy
    this.hp = hp
    this.damageMax = max
    this.damageMin = min
    this.item = item
    }
    isAlive() {
        return this.hp > 0
    }
}

let lion = new Enemy("lion", 70, 80, 20, "drink");
let wolf = new Enemy("wolf", 50, 70, 20, "knife");
let alien = new Enemy("alien", 75, 70, 20, "rock");

let enemies = [lion, wolf, alien];


const name = readline.question("\nYou are one of the only survivors left from the invasion! \n\n What is your name? ");
console.log('\n Well, ' + name + ' we need you to kill the remaining enemies! \n');
// alert(' well ' + name + ' we need you!');

const player = new User (name, 150, 100, 60);

gameStart();


function walk (){
    
    console.log("\n Walking...")
    let max = 4
    let min = 1
    while (Math.floor(Math.random() * (max - min + 1)) + min != 2) {
        console.log("\n Still walking... \n")
    }
    enemyAppear(); 
}


function enemyAppear() {
  
    let enemy = enemies[Math.floor(Math.random() * enemies.length)];
        console.log(`\n A ${enemy.enemy} has appeared!`)
        
       return enemyEncounter(enemy, enemies);
    

    }


    function enemyEncounter(enemy, enemies) {

        const fightOrRun = readline.question(`\n Want to run away? Type 'r'
        \n If you want to attack type 'f'! \n `, {limit: ['f', 'r']});
    
        
        
        if (fightOrRun === 'r') {
            run();
        }
    
        if (fightOrRun === 'f') {
            fight(enemy, enemies);
        }
        return;
    }
    
    
function run() {
    const chances = Math.random()
    if(chances >= .5)
     { 
        console.log("\n You managed to escape but you took some damage. ");
        player.hp = player.hp - 15;
        return;

    } else {
        console.log("\n You didn't get away! You have been killed...\n");
        process.exit(1);
    }
}



function fight (enemy, enemies) {

while(enemy.hp > 0) {

    enemy.hp -= Math.floor(Math.random() * (player.apMax - player.apMin + 1)) + player.apMin;
    player.hp -= Math.floor(Math.random() * (enemy.damageMax - enemy.damageMin + 1)) + enemy.damageMin;
    
    if(player.hp <= 0) {
       
        console.log("\nYou were killed...\n")
        return;
    }

    }
    if (enemy.enemy === 'lion') {
        // player.inventory.push(enemy.item);
        player.hp = player.hp + 25;
        // console.log(player.hp)
        // enemies.splice(0,1);
       

    } else if (enemy.enemy === 'wolf') {
        // player.inventory.push(enemy.item);
        player.hp = player.hp + 20;
        // console.log(player.hp)
        // enemies.splice(1,1);
        
    
    } else if (enemy.enemy === 'alien') {
        // player.inventory.push(enemy.item);
        player.hp = player.hp + 30;
        // console.log(player.hp)
        // enemies.splice(2,1);
       
    } 
    player.inventory.push(enemy.item);
    
const index = enemies.findIndex((item) => {
    return item.enemy === enemy.enemy
})

enemies.splice(index,1)

console.log (`\n You killed the ${enemy.enemy}!\n You've earned a new item. Check your inventory.`);

}



function showInfo() {
    console.log(` \n Name: ${player.name} \n HP: ${player.hp} \n Inventory: ${player.inventory}\n `);
    return;
}

function gameStart() {

    while (player.hp > 0) {

        if (enemies.length === 0) {
            console.log("\n Well it appears that you have defeated every enemy, Thank you for your help! \n")
            return;
        }
            
        let choice = readline.question("\n If you want to continue fighting the enemies type 'w', " + 
        " \n Type 'p' to print your information / check your inventory. \n Type 'q' to quit... ", {limit: ['w', 'p', 'q']});
    
        if(choice === 'w') {
            walk();
        }
    
        else if(choice === 'p') {
           showInfo();
        }
    
        else if(choice === 'q') {
            break;
        }
    }
   
    }
    process.exit(1);






