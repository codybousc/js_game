var worldSize = 8;

var player = {
  x: 1,
  y: 1
}

//create 2D array
var world = new Array(worldSize);
for (var i = 0; i < worldSize; i++) {
  world[i] = new Array(worldSize);
}

//populate 2D array
for (var x = 0; x < worldSize; x++ )  {
  for (var y = 0; y < worldSize; y++) {
    if (x === 0 || y === 0 || x === worldSize - 1 || y === worldSize - 1)  {
      world[x][y] = true;
    }
    else {
      if (Math.random() > .20) {
      world[x][y] = false;
    } else
      world[x][y] = true;
    }
  }
}


$(document).ready(function() {

function createWorld() {

  
}

function drawWorld() {
  for (var x = 0; x < worldSize; x++) {
    for (var y = 0; y < worldSize; y++) {
      if (world[x][y] === true)
      $("td#" + x + "-" + y).text("#");
      else
      $("td#" + x + "-" + y).text(".");
    }
  }
  $("td#" + player.x + "-" + player.y).text("@");
}

drawWorld();

$("#up").click(function() {
  if (world[player.x][player.y - 1] === false) {
    player.y -= 1;
    drawWorld();
  }
  else {

    alert("You've just hit a wall")
}
});

$("#down").click(function() {
  if (world[player.x][player.y + 1] === false) {
    player.y += 1;
    drawWorld();
  }
  else {
    alert("You've just hit a wall")
  }
});

$("#right").click(function() {
  if (world[player.x + 1][player.y] === false) {
  player.x += 1;
  drawWorld();
}
else {
  alert("You've just hit a wall")
}

});

$("#left").click(function() {
  if (world[player.x - 1][player.y] === false) {
  player.x -= 1;
  drawWorld();
}
else {
  alert("You've just hit a wall")

}
});





});

//https://api.jquery.com/click/
//player.x = new value
//drawWorld;
