/** @constructor */
Tetris.Boot = function()
{
  
};

Tetris.Boot.stateKey = "Boot";

Tetris.Boot.prototype.init = function()
{
  this.stage.backgroundColor = 0x000000;
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
