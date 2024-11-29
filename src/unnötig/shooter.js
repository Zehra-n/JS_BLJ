const agent1 = {
    firstname: "James",
    lastname: "Bond",
    lives: 5,
    positionX : 200,
    positionY : 200,
    weapons : ["Berreta 9mm","AK47", "Granatenwerfer"],
    bullets : 10,
    actualWeaponIndex : 0,
    printAgent : function() {
        console.log(`Agent: ${this.firstname} ${this.lastname} | Lives: ${this.lives} | Position : (${this.positionX} ${this.positionY}) | Weapon: ${this.getActualWeapon()} | Bullets: ${this.bullets}`);
    },
    takeDamage : function(){
        this.lives--;
    },
    walkForward(){
        this.positionY -= 5
    },
    walkBackward(){
        this.positionY += 5
    },
    walkLeft(){
        this.positionX -= 5
    },
    walkRight(){
        this.positionX += 5
    },
    getActualWeapon(){
        return this.weapons[this.actualWeaponIndex];
    },
    switchWeapon(){
        this.actualWeaponIndex++;
        if(this.actualWeaponIndex > this.weapons.length - 1){
            this.actualWeaponIndex = 0;
        }
        //this.actualWeaponIndex = this.actualWeaponIndex % this.weapons.lenght;
    },
    shoot() {
        this.bullets--;
    }
};

agent1.printAgent();
agent1.takeDamage();
agent1.printAgent();
agent1.walkForward();
agent1.walkRight();
agent1.switchWeapon();
agent1.printAgent();
agent1.switchWeapon();
agent1.printAgent();
agent1.switchWeapon();
agent1.shoot();
agent1.printAgent();
