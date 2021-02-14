var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allracers;
var distance = 0;
var database;

var form, player, game;
var racer1,racer2,racers;

function setup(){
  database = firebase.database();
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
 background(204,67,255)

  if(playerCount === 2){
    game.update(1); 
  }
  if(gameState === 1){
    clear()
    game.play()
  }
  
}
