Tetris.Game = function (game) {
  
  // Set turn length and counter
  this.turnLength = 60;
  this.turnCounter = 0;
  
  this.nextShape = null;
  this.activeShape = null;
};

Tetris.Game.stateKey = "Game";

Tetris.Game.prototype = {
    
  create: function () {
    
    var i, j;
    
    // Create background
    this.stage.backgroundColor = 0x171642; 
    this.add.sprite(0,0,'background');
    this.add.sprite(0,0,'banner');
    
    // Create an empty board filled with nulls
    Tetris.board = new Array(Tetris.BOARD_HEIGHT);
    for(i = 0; i < Tetris.BOARD_HEIGHT; i++) 
    {
      Tetris.board[i] = new Array(this.BOARD_WIDTH);
      for (j = 0; j < Tetris.BOARD_WIDTH; j++) {
        Tetris.board[i][j] = null;
      }
    }
    
    //TODO: Create groups of unused block sprites
    for(i = 0; i < Tetris.NUM_COLORS; i++) {
      Tetris.unusedBlocks[i] = null;
    }
        
    // Retrieve blockPositions
    Tetris.shapesJSON = this.game.cache.getJSON('shapes');
    Tetris.shapes = Tetris.shapesJSON.shapes;
    
    // Set turn length and counter
    this.turnLength = 10;
    this.turnCounter = 0;
    
    // Create Shapes
    this.nextShape = new Tetris.Shape();
    this.nextShape.randomizeShape();
    this.nextShape.preview();
    
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
        // Handle horizontal line clearing
        this.clearHorizontalLines();
        
        // Make the next shape active and create a new next shape
        this.activeShape.placeShapeInBoard();
        this.activeShape.clearActive();
        this.activeShape = null;

        this.nextShape.clearPreview();
        this.activeShape = this.nextShape;
        this.activeShape.activate();

        this.nextShape = new Tetris.Shape();
        this.nextShape.randomizeShape();
        this.nextShape.preview();
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
