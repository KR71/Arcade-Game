// Enemies our player must avoid
let Enemy = function(x,y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    this.x = x;  // STARTING X POS
    this.y = y + 60; // STARTING Y POS
    this.speed = speed;
    this.upDown = 101; // HEIGHT OF ONE TILE

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // IF ENEMY IS STILL ON SCREEN
    if(this.x < this.upDown * 5) {
        // MOVE FORWARD
        // MOVE X WAY BY SPEED OF * DT
        this.x += this.speed * dt;
    } else {

        // ELSE
        // RESET POSITION START OFF SCREEN NOTICE THE MINUS SO THIS LESS THAN 101
        this.x = -this.upDown;
    }


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// PLAYER CLASS
class Hero {
// CONSTRUCTOR
    constructor () {
        // CLASS PROPERTIES
        this.upDown = 101; // HEIGHT OF ONE TILE
        this.leftRight = 83; // LENGTH OF ONE TILE
        this.startingX = this.upDown * 2;
        this.startingY = (this.leftRight * 4) + 60;
        this.x = this.startingX;  // STARTING X POS
        this.y = this.startingY; // STARTING Y POS
        this.sprite = 'images/char-boy.png'; // PLAYER IMAGE
        this.winGame = false;
    }

// CLASS METHODS
    // UPDATE POSITION

    update () {
        for(let enemy of allEnemies) {
            // CHECK IF A HIT - ADDED /2 SO HIT REGISTERS AT RIGHT TIME
            if(this.y === enemy.y && (enemy.x + enemy.upDown/2 > this.x && enemy.x < this.x + this.upDown/2)) {
                //console.log('HIT!');
                this.reset();
            }

        }
        // CHECK IF PLAYER WINS
        // DID PLAYER REACH END ROW
        // CHECK IF PLAYERS Y PROPERTY IS = THE TOP OF THE GRID 0 + THE CENTERING OFFSET OF 60px
        if(this.y === 60) {

            //console.log('win!!');
            this.winGame = true;

        }
    }


    // RENDER
        // DRAW PLAYER IMAGE AT CURRENT X AND Y POSITION
    render () {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    // KEEP TRACK OF KEYBOARD EVENTS
        // UPDATE PLAYERS X AND Y ACCORDING TO KEYED EVENT
       // AND CHECK PLAYER IS WITHIN THE GAME CANVAS
    handleInput(input) {
        switch (input) {
            case 'left':
              if(this.x > 0) {
                this.x -= this.upDown;
              }
              break;
            case 'up':
              if(this.y > this.leftRight) {
                 this.y -= this.leftRight;
              }
              break;
            case 'right':
               if(this.x < this.upDown * 4) {
                  this.x += this.upDown;
               }
               break;
            case 'down':
               if(this.y < this.leftRight * 4) {
                    this.y += this.leftRight;
               }
               break;
        }
    }
    // REST PLAYER
        // SET X AND Y TO THE STARTING X AND Y POSITION
    reset () {
        this.y = this.startingY;
        this.x = this.startingX;
    }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

//HAD TO CREATE A player variable CLASS TO MATCH FUNCTIONS IN ENGINE JS ALREADY PROVIDED
// DIFFERENT X AND Y NUMBERS TO CREATE A LITTLE RANDOMNESS, AND SPEED FOR 3RD PARAM
const player = new Hero();
const baddy = new Enemy((-101*2.5), 0, 300);
const baddy1 = new Enemy((-101), 83, 300);
const baddy2 = new Enemy(-101, 166, 400);
const baddy3 = new Enemy((-101*2.5), 83, 400);
const baddy4 = new Enemy((-101*2.5), 166, 200);
const baddy5 = new Enemy(-101, 0, 300);
//HAD TO CREATE AN allEnemies ARRAY TO MATCH FUNCTIONS IN ENGINE JS ALREADY PROVIDED
const allEnemies = [];
allEnemies.push(baddy,baddy1, baddy2, baddy3,baddy4,baddy5);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
