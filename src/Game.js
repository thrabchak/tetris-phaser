/** @constructor */
Tetris.Game = function()
{
};

Tetris.Game.stateKey = "Game";

Tetris.Game.prototype = {
  
  init: function () {},
  
  create: function () {
    // Create background
    this.stage.backgroundColor = 0x171642; 
    this.add.sprite(0,0,'background');
  },
  
  setupSounds: function () {},
  
  update: function () {}
  
};
