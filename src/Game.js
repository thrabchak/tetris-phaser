Tetris.Game = function (game) {
  
  // Set turn length and counter
  this.turnCounter = 0;
  this.turnLength = 60;
  
  this.nextShape = null;
  this.activeShape = null;
  
  // Declare the board.
  // board is a 2d array containing Blocks. It will be oriented with
  // blocks[0][0] in the top left and blocks[BOARD_HEIGHT-1][BOARD_WIDTH-1]
  // in the bottom right corner.
  this.board = null;
};

Tetris.Game.stateKey = "Game";

Tetris.Game.prototype = {
    
  create: function () {
    
    // Create background
    this.stage.backgroundColor = 0x171642; 
    this.add.sprite(0,0,'background');
    
    // Create an empty board filled with nulls
    this.board = new Array(this.BOARD_HEIGHT);
    for (var i = 0; i < this.board.length; i++) {
      this.board[i] = new Array(this.BOARD_WIDTH);
      for (var j = 0; j < this.board[i].length; j++) {
        this.board[i][j] = null;
      }
    }
    
    // Retrieve blockPositions
    Tetris.blockPositionsJSON = this.game.cache.getJSON('blockPositions');
    Tetris.blockPositions = Tetris.blockPositionsJSON.blockPositions;
    
    // Set turn length and counter
    this.turnLength = 60;
    this.turnCounter = 0;
    
    // Create Shapes
    this.nextShape = new Tetris.Shape();
    this.nextShape.randomizeShape();
    
    this.activeShape = new Tetris.Shape();
    this.activeShape.randomizeShape();
    this.activeShape.activate();
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
        this.activeShape.activate();
        this.nextShape.randomizeShape();
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
