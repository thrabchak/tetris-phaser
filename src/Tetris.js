/** @constructor */
var Tetris =
{
  TITLE: "Tetris",
  AUTHOR: "Tom Hrabchak",

  SCREEN_WIDTH: 510,
  SCREEN_HEIGHT: 950,

  titleStyle: { font: "72px Arial", fill: "#ffffff" },

  buttonTextColor: 0xffffff,
  buttonTextOverColor: 0xffff00,
  buttonStyle: { font: "32px Arial", fill: "#ffffff" },
  buttonActiveStyle: { font: "32px Arial", fill: "#ffffff", fontStyle: "italic" },
  
  // Asset Sizes
  BANNER_HEIGHT: 145,
  LINING_WIDTH: 5,
  BLOCK_WIDTH: 50,
  
  // Board Size
  BOARD_WIDTH: 10,
  BOARD_HEIGHT: 16,
  
  // Movement Directions
  DOWN: 0,
  LEFT: 1,
  RIGHT: 2,
    
  // Block colors
  NUM_COLORS: 4,
  GREEN:  0,
  RED:    1,
  BLUE:   2,
  YELLOW: 3,
  
  // Static Data for the position of Blocks within a Shape.
  // blockPositions[shapeType][orientation][blockNumber].x = (int) board positions away from Shape.centerX
  // in the x direction.
  shapesJSON: null,
  shapes: null,  
  
  // Declare the board.
  // board is a 2d array containing placed Blocks (active blocks are not in 
  // the board yet. It will be oriented with
  // blocks[0][0] in the top left and blocks[BOARD_HEIGHT-1][BOARD_WIDTH-1]
  // in the bottom right corner. Initialized in Tetris.Game.create(). 
  board: null
};

Tetris.run = function()
{
  // Create the Phaser game
  this.game = new Phaser.Game( this.SCREEN_WIDTH, this.SCREEN_HEIGHT,
                               Phaser.AUTO, "", this );

  // Add all the states to the game
  this.game.state.add( Tetris.Boot.stateKey, Tetris.Boot );
  this.game.state.add( Tetris.Preloader.stateKey, Tetris.Preloader );
  this.game.state.add( Tetris.MainMenu.stateKey, Tetris.MainMenu );
  this.game.state.add( Tetris.Game.stateKey, Tetris.Game );

  // Boot the game
  this.game.state.start( Tetris.Boot.stateKey );
};