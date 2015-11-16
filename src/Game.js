Tetris.Game = function (game) {
  
  this.turnLength = 60;
  this.turnCounter = 0;
  
  this.isUpdatingAfterLineClear = false;
  
  this.nextShape = null;
  this.activeShape = null;
  
  this.cursors = null;
  
  this.completedRows = [];
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
    for(i = 0; i < Tetris.BOARD_HEIGHT; i++) {
      Tetris.board[i] = new Array(this.BOARD_WIDTH);
      for(j = 0; j < Tetris.BOARD_WIDTH; j++) {
        Tetris.board[i][j] = null;
      }
    }
            
    // Retrieve blockPositions
    Tetris.shapesJSON = this.game.cache.getJSON('shapes');
    Tetris.shapes = Tetris.shapesJSON.shapes;
    
    // Set turn length and counter
    this.isUpdatingAfterLineClear = false;
    this.turnLength = 60;
    this.turnCounter = 0;
    
    this.cursors = this.game.input.keyboard.createCursorKeys();
    
    // Create Shapes
    this.nextShape = new Tetris.Shape();
    this.nextShape.randomizeShape();
    this.nextShape.preview();
    
    this.activeShape = new Tetris.Shape();
    this.activeShape.randomizeShape();
    this.activeShape.activate();
  },
  
  update: function () {
    
    if(this.turnCounter >= this.turnLength) {
      
      if(this.activeShape !== null && this.activeShape.canMoveShape(Tetris.DOWN)) {
        this.activeShape.moveShape(Tetris.DOWN);
        
      } else {
        
        this.activeShape.placeShapeInBoard();
        this.completedRows = this.getCompleteRows();
        
        if (this.completedRows.length > 0) {
          
          this.clearRow(this.completedRows);
          this.isUpdatingAfterLineClear = true;
          
        } else {
          this.promoteShapes();
        }
        
        this.completedRows = [];
      }
      this.turnCounter = 0;
      
    } else if (this.isUpdatingAfterLineClear) {
      this.isUpdatingAfterLineClear = false;
      this.promoteShapes();
    } else {
      
      this.handleInput();
      this.turnCounter++;
    }
  },
  
  handleInput: function() {
    
    if (this.activeShape.isTweening) {
      
      this.activeShape.updateTween();
      
    } else if (this.cursors.up.isDown) {
      
      if (this.activeShape.canRotate()) {        
        this.activeShape.rotate();
      }
      
    } else if (this.cursors.left.isDown) {
      
      if (this.activeShape.canMoveShape(Tetris.LEFT)) {
        this.activeShape.moveShape(Tetris.LEFT);
        this.activeShape.isTweening = true;
      }
      
    } else if (this.cursors.right.isDown) {
      
      if (this.activeShape.canMoveShape(Tetris.RIGHT)) {        
        this.activeShape.moveShape(Tetris.RIGHT);
        this.activeShape.isTweening = true;
      }
      
    } else if (this.cursors.down.isDown) {
      
      this.turnCounter += this.turnLength/5;
    
    }
  },
  
  promoteShapes: function() {

    this.activeShape = null;

    this.nextShape.clearPreview();
    this.activeShape = this.nextShape;
    this.activeShape.activate();

    this.nextShape = new Tetris.Shape();
    this.nextShape.randomizeShape();
    this.nextShape.preview();
  },
  
  getCompleteRows: function() {
    var i, j, max;
    var completeRows = [];
    
    for(i = 0; i < Tetris.board.length; i++) {
      if (this.isRowFull(i)) {
        completeRows.push(i);
      }      
    }
    return completeRows;
  },
    
  isRowFull: function(row) {
    
    var i;
    
    for(i = 0; i < Tetris.board[row].length; i++) {
      if (Tetris.board[row][i] === null) {
        return false;
      }
    }
    
    return true;
  },
  
  clearRow: function(completedRows) {
    
    var i, j, h, row, block;
    
    for(i = 0; i < completedRows.length; i++) {
      row = Tetris.board[completedRows[i]];
      
      for(j = 0; j < row.length; j++) {
        Tetris.board[completedRows[i]][j].clean();
        Tetris.board[completedRows[i]][j] = null;
      }
    }
  },
  
  setupSounds: function () {
    
    //TODO
  }
  
};
