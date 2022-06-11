class Player {
    constructor (name, totalCoins, status, hasStar){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }

    setName(namePicked){

    }

    // this gets called whenever player hit by enemy
    gotHit(){
        if(playerOne.status === 'Powered Up'){
            playerOne.status = 'Big';
        } else if(playerOne.status === 'Big'){
            playerOne.status = 'Small';
        } else if(playerOne.status === 'Small'){
            playerOne.status = 'Dead'
        } 
    }

    // called when a powerup is received and sets the status accordingly. 
    // (Statuses go from "Small" to "Big" to "Powered Up". 
    // If you are Powered Up and it hits this function, you get a star)
    gotPowerup(){
        if(this.status === 'Small'){
            this.status = 'Big';
        } else if(this.status === 'Big'){
            this.status = 'Powered Up';
        } else if(this.status === 'Powered Up'){
            this.hasStar = true;
            console.log("You got a star!")
        }
    }

    
    addCoin(){
        this.totalCoins++
        return this.totalCoins
    }

    print(){
        console.log(` \n Name: ${this.name}\n Status: ${this.status}\n Total Coins: ${this.totalCoins}\n Has Star: ${this.hasStar} \n`);
    }
  

}



const playerOne = new Player('Mario', 0, 'Big', false);


function randomRange(){
    
    const randomNum = Math.floor(Math.random() * 3) * 1
    // console.log(randomNum)
    if(randomNum === 0){
        playerOne.gotHit()
        // console.log("zero")
    } 
    if(randomNum === 1){
        playerOne.gotPowerup()
        // console.log("one")
    } 
    else if(randomNum === 2){
        playerOne.addCoin()
        // console.log("two")
    }
// console.log("here we go")
    playerOne.print()

   
}
let intervalID = setInterval(randomRange, 500)


randomRange()

if(playerOne.status == 'Dead'){
    clearInterval(intervalID) 
}