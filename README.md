## Tetris built with Phaser
A phaser based version of tetris.

### Requirements
- [git](https://help.github.com/articles/set-up-git/)
- [node](https://nodejs.org/en/download/)
- [python 2.7](https://www.python.org/downloads/) - optional if you already know how to run the game on a local server

Currently the game is not hosted on a website, you will need to get the source code in order to run the game. The easiest way to do so is cloning the project from GitHub using [git](https://help.github.com/articles/set-up-git/).

This project uses npm and bower to manage project dependencies. If you do not have nodejs installed, you can download it [here](https://nodejs.org/en/download/). 

Because this is a web based game, the source code will need to be run on a server in order to play the game. A simple way to run a local server is by using python's [SimpleHTTPServer](https://docs.python.org/2/library/simplehttpserver.html). To do this, you should have python 2.7 installed. You can download python 2.7 [here](https://www.python.org/downloads/).

### Setup Instructions
To get the game up and running on your own machine perform the following commands in a terminal.

First, clone from GitHub:

    git clone https://github.com/thrabchak/tetris-phaser.git

Next, install the project dependencies:

    npm install
    bower install

Finally start your server:

    python -m SimpleHTTPServer 8081 .

Now you can navigate to http://localhost:8081 to play the game :)		

### Acknowledgements
The following free, open sourced projects helped make this project possible:

- [Phaser](https://github.com/photonstorm/phaser) - The game engine.
- [gjweb](https://github.com/puzzud/gjweb) - This project provided the basic structure used when starting this project. 
