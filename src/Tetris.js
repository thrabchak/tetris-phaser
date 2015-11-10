/** @constructor */
var Tetris =
{
  title: "Tetris",
  author: "Tom Hrabchak",

  screenWidth: 510,
  screenHeight: 950,

  titleStyle: { font: "72px Arial", fill: "#ffffff" },

  buttonTextColor: 0xffffff,
  buttonTextOverColor: 0xffff00,
  buttonStyle: { font: "32px Arial", fill: "#ffffff" },
  buttonActiveStyle: { font: "32px Arial", fill: "#ffffff", fontStyle: "italic" },
  
  BOARD_WIDTH: 10,
  BOARD_HEIGHT: 40,
  
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
  blockPositionsJSON: null,
  blockPositions: null,  
  
  unusedBlocks: []
};

Tetris.run = function()
{
  // Create the Phaser game
  this.game = new Phaser.Game( this.screenWidth, this.screenHeight,
                               Phaser.AUTO, "", this );

  // Add all the states to the game
  this.game.state.add( Tetris.Boot.stateKey, Tetris.Boot );
  this.game.state.add( Tetris.Preloader.stateKey, Tetris.Preloader );
  this.game.state.add( Tetris.MainMenu.stateKey, Tetris.MainMenu );
  this.game.state.add( Tetris.Game.stateKey, Tetris.Game );

  // Boot the game
  this.game.state.start( Tetris.Boot.stateKey );
};