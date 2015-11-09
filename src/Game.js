Tetris.Game = function () {
  
  var turnCounter;
  var turnLength;
  
  var nextShape;
  var activeShape;
  
  // Declare the board
  // board is a 2d array containing Blocks. It will be oriented with
  // blocks[0][0] in the top left and blocks[BOARD_HEIGHT-1][BOARD_WIDTH-1]
  // in the bottom right corner.
  var board;  
};

Tetris.Game.stateKey = "Game";

Tetris.Game.prototype = {
    
  create: function () {
    
    // Create background
    this.stage.backgroundColor = 0x171642; 
    this.add.sprite(0,0,'background');
    
    // Create an empty board filled with nulls
    this.board = new Array(this.BOARD_HEIGHT);
    for (var i = 0; i < this.BOARD_HEIGHT; i++) {
      this.board[i] = new Array(this.BOARD_WIDTH);
      for (var j = 0; j < this.BOARD_WIDTH; j++) {
        this.board[i][j] = null;
      }
    }
    
    // Set turn length and counter
    this.turnLength = 60;
    this.turnCounter = 0;
    
    // Create Shapes
    this.nextShape = new Tetris.Game.Shape();
    this.activeShape = new Tetris.Game.Shape();
    this.activeShape.makeActive();
  },
  
  update: function () {
    
    if(this.turnCounter >= this.turnLength){
      
      // If the active shape can move down, move it down
      if(this.activeShape.canMoveShape(Tetris.DOWN)) {
        this.activeShape.moveShape(Tetris.DOWN);
        
      // Otherwise the shape stops
      } else {
        // Clean up the active shape, we won't use this one anymore
        this.activeShape.clean();
        
        // Handle horizontal line clearing
        this.clearHorizontalLines();
        
        // Make the next shape active and create a new next shape
        this.activeShape = this.nextShape();
        this.activeShape.makeActive();
        this.nextShape = new Tetris.Game.Shape();
      }
      
      // reset turn counter
      this.turnCounter = 0;
    }
    
    //Handle user input for shape manipulation
    //TODO
    
    this.turnCounter++;
  },
  
  clearHorizontalLines: function() {
    
    //TODO
  },
  
  setupSounds: function () {
    
    //TODO
  }
  
};

Tetris.Game.Shape = function () {
  
  //TODO: Randomly generate type, orientation, and color
  var type = Tetris.Game.Shape.O;
  var orientation = 0;
  var color = Tetris.GREEN;
  
  // Center Block Position
  var centerX = null;
  var centerY = null;
  
  // Create Blocks
  var blocks = new Array(4);
  this.setupBlocks();
};

Tetris.Game.Shape.prototype = {
  
  // Shape type
  I: 0,
  J: 1,
  L: 2,
  O: 3,
  S: 4,
  Z: 5,
  T: 6,
  
  setupBlocks: function () {
    
    //TODO
  },
  
  makeActive: function () {
    
    //TODO
  },
  
  isOnBoard: function (x, y) {
    if(this.x >= 0 && this.y >= 0 && 
       this.x < Tetris.BOARD_WIDTH && this.y < Tetris.BOARD_HEIGHT) {
      return true;
    }
    return false;
  },
  
  isOccupied: function (x, y) {
    
    if(this.Game.board[y][x] === null) {
      return false;
    } 
    
    return true;
  },
  
  isOccupiedBySibling: function (x, y) {
    
    for(var i = 0; i < this.blocks.length; i++) {
      if(this.blocks[i].x === x && this.blocks[i].y === y) {
        return true;
      }
    }
    return false;
  },
  
  canMoveShape: function (direction) {
    
    var i, newX, newY;
    
    switch(direction) {
      case Tetris.DOWN:
        for(i = 0; i < this.blocks.length; i++) {
          newX = this.blocks[i].x;
          newY = this.blocks[i].y - 1;
          
          if (this.isOnBoard(newX, newY) && this.isOccupied(newY, newX) && 
              !this.isOccupiedBySibling(newX, newY)) {
            return false;
          }
        }
        break;
      case Tetris.LEFT:
        for(i = 0; i < this.blocks.length; i++) {
          newX = this.blocks[i].x - 1;
          newY = this.blocks[i].y;
          
          if (this.isOccupied(newY, newX) && !this.isOccupiedBySibling(newX, newY)) {
            return false;
          }
        }
        break;
      case Tetris.RIGHT:
        for(i = 0; i < this.blocks.length; i++) {
          newX = this.blocks[i].x + 1;
          newY = this.blocks[i].y;
          
          if (this.isOccupied(newY, newX) && !this.isOccupiedBySibling(newX, newY)) {
            return false;
          }
        }
        break;
    }
    return true;
  },
    
  moveShape: function (direction) {
    
    if(!this.canMoveShape(direction)){
      throw "Cannot move active shape in direction: " + direction;
    }
    
    var i, newX, newY;
    
    switch(direction) {
      case Tetris.DOWN:
        for(i = 0; i < this.blocks.length; i++) {
          newX = this.blocks[i].x;
          newY = this.blocks[i].y - 1;
          this.blocks[i].moveBlock(newX, newY);
        }
        break;
      case Tetris.LEFT:
        for(i = 0; i < this.blocks.length; i++) {
          newX = this.blocks[i].x - 1;
          newY = this.blocks[i].y;
          this.blocks[i].moveBlock(newX, newY);
        }
        break;
      case Tetris.RIGHT:
        for(i = 0; i < this.blocks.length; i++) {
          newX = this.blocks[i].x + 1;
          newY = this.blocks[i].y;
          this.blocks[i].moveBlock(newX, newY);
        }
        break;
    }
  },
    
  canRotate: function () {
    
    switch(this.type) {
      case Tetris.Game.Shape.I:
        //TODO
        break;
      case Tetris.Game.Shape.J:
        //TODO        
        break;
      case Tetris.Game.Shape.L:
        //TODO
        break;
      case Tetris.Game.Shape.O:
        return true;
      case Tetris.Game.Shape.S:
        //TODO
        break;
      case Tetris.Game.Shape.Z:
        //TODO
        break;
      case Tetris.Game.Shape.T:
        //TODO
        break;
    }
  },
    
  rotate: function () {
    
    if(!this.canRotate()) {
      throw "Cannot rotate active shape";
    }
    
    switch(this.type) {
      case Tetris.Game.Shape.I:
        //TODO
        break;
      case Tetris.Game.Shape.J:
        //TODO
        break;
      case Tetris.Game.Shape.L:
        //TODO
        break;
      case Tetris.Game.Shape.O:
        //TODO
        break;
      case Tetris.Game.Shape.S:
        //TODO
        break;
      case Tetris.Game.Shape.Z:
        //TODO
        break;
      case Tetris.Game.Shape.T:
        //TODO
        break;
    }
  }
};

Tetris.Game.Block = function () {
  
  var color;
  var x;
  var y;
};

Tetris.Game.Block.prototype = {
  
  getSpriteXLocation: function () {
    
    //TODO
  },
  
  getSpriteYLocation: function () {
    
    //TODO
  },
  
  moveBlock: function (newX, newY) {
    this.x = newX;
    this.y = newY;
  },
  
  clean: function() {
    
    //TODO
  }
  
};
