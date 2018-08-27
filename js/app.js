// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

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
        this.upDown = 101;
        this.leftRight = 83;
        this.startingX = this.upDown * 2;
        this.startingY = this.leftRight * 5;
        this.x = this.startingX;  // STARTING X POS
        this.y = this.startingY; // STARTING Y POS
        this.sprite = 'images/char-boy.png'; // PLAYER IMAGE
    }

// CLASS METHODS
    // UPDATE POSITION
    // CHECK IF A HIT
        // DID PLAYER HIT ENEMY
    // CHECK IF PLAYER WINS
        // DID PLAYER EACH END ROW
    // RENDER
        // DRAW PLAYER IMAGE AT CURRENT X AND Y POSITION
    render () {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    // KEEP TRACK OF KEYBOARD EVENTS
        // UPDATE PLAYERS X AND Y ACCORDING TO KEYED EVENT
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
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const player = new Hero();


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
