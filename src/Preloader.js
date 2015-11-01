/** @constructor */
Tetris.Preloader = function()
{
  this.soundList = [];
  this.numberOfDecodedSounds = 0;
};

Tetris.Preloader.stateKey = "Preloader";

Tetris.Preloader.prototype.init = function()
{
  
};

Tetris.Preloader.prototype.preload = function()
{
  this.stage.backgroundColor = 0x111111;

  // Setup preloader 'loading' bar
  var preloaderWidth = ( this.game.width * 0.67 / 2.0 ) | 0;
  var preloaderHeight = 32;
  var bmd = this.game.add.bitmapData( preloaderWidth, preloaderHeight );
  bmd.ctx.fillStyle = "#999999";
  bmd.ctx.fillRect( 0, 0, preloaderWidth, preloaderHeight );

  this.preloader = this.game.add.sprite( 0, 0, bmd );
  this.preloader.anchor.setTo( 0.5, 0.5 );
  this.preloader.position.setTo( this.world.centerX,
                                 this.world.height - this.preloader.height * 2 );
  this.load.setPreloadSprite( this.preloader );

  // Load audio
  //this.load.audio( "bell2", "assets/sounds/bell2.wav" );
};

Tetris.Preloader.prototype.create = function()
{
  this.stage.backgroundColor = 0x222222;

  this.numberOfDecodedSounds = 0;

  // Add the loaded audio to the game
  //var bell2 = this.game.add.audio( "bell2" );
  //this.soundList.push( bell2 );

  // Apply callback to decoding sounds.
  for( var i = 0; i < this.soundList.length; i++ )
  {
    this.soundList[i].onDecoded.add( this.soundDecoded, this );
  }

  this.sound.setDecodedCallback( this.soundList, this.allSoundsDecoded, this );
};

Tetris.Preloader.prototype.soundDecoded = function()
{
  // Start scaling the preloader sprite towards 200% for audio decoding.
  this.numberOfDecodedSounds++;
  this.preloader.scale.set( 1.0 + ( this.numberOfDecodedSounds / this.soundList.length ), 1.0 );
};

Tetris.Preloader.prototype.allSoundsDecoded = function()
{
  this.start();
};

Tetris.Preloader.prototype.start = function()
{
  // Proceed to main menu, as usual.
  this.state.start( Tetris.MainMenu.stateKey );
};
