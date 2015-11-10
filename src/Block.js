Tetris.Block = function () {

  this.color = null;
  this.x = null;
  this.y = null;
  
  return this;
};

Tetris.Block.prototype = {
  
  makeBlock: function (newX, newY, newColor) {

    //TODO
    this.x = newX;
    this.y = newY;
    this.color = newColor;
    
    this.game.add.sprite();
  },
  
  clean: function() {
    
    //TODO
  },
  
  getSpriteXLocation: function () {
    
    //TODO
  },
  
  getSpriteYLocation: function () {
    
    //TODO
  },
  
  moveBlock: function (newX, newY) {
    
    // move sprite
    
    this.x = newX;
    this.y = newY;
  }
  
};
