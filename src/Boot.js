/** @constructor */
Tetris.Boot = function()
{
  
};

Tetris.Boot.stateKey = "Boot";

Tetris.Boot.prototype.init = function()
{
  this.stage.backgroundColor = 0x000000;
  this.stage.disableVisibilityChange = false;
  this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  this.scale.minWidth = ( this.screenWidth / 2 ) | 0;
  this.scale.minHeight = ( this.screenHeight / 2 ) | 0;
  this.scale.pageAlignHorizontally = true;
  this.scale.pageAlignVertically = true;
  this.stage.forcePortrait = true;
};

Tetris.Boot.prototype.preload = function()
{
  // load assets needed for the preloader here 
};

Tetris.Boot.prototype.create = function()
{ 
  // Go straight to the Preloader
  this.state.start( Tetris.Preloader.stateKey );
};
