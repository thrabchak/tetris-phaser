Tetris.Block = function () {

  this.color = null;
  this.x = null;
  this.y = null;
  
  this.sprite = null;
  
  return this;
};

Tetris.Block.prototype = {
  
  makeBlock: function (newX, newY, newColor) {

    this.x = newX;
    this.y = newY;
    this.color = newColor;
    
    var spriteLocation = this.getSpriteLocation();
    
    this.sprite = Tetris.game.add.sprite(spriteLocation.x, spriteLocation.y, 'block', this.color);
  },
  
  clean: function() {
    
    this.x = null;
    this.y = null;
    this.color = null;
    this.sprite.destroy();
    this.sprite = null;
  },
  
  getSpriteLocation: function () {
    
    var spriteX, spriteY;
    
    spriteX = Tetris.LINING_WIDTH + (this.x * Tetris.BLOCK_WIDTH);
    spriteY = Tetris.BANNER_HEIGHT + (this.y * Tetris.BLOCK_WIDTH);
    
    return {"x": spriteX, "y": spriteY};
  },
  
  moveBlock: function(newX, newY) {
    
    this.x = newX;
    this.y = newY;
    
    var spriteLocation = this.getSpriteLocation(newX, newY);
    
    this.sprite.x = spriteLocation.x;
    this.sprite.y = spriteLocation.y;
  }
};
