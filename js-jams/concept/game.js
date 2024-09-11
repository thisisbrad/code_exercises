// Get the canvas element
const canvas = document.getElementById("gameCanvas");
console.log(">>>", canvas);
const ctx = canvas.getContext("2d");

// Game objects
const player = {
  x: 50,
  y: 50,
  size: 20,
  speed: 15,
};

const enemy = {
  x: 200,
  y: 200,
  size: 20,
  speed: 0.3,
};

const point = {
  x: 150,
  y: 150,
  size: 10,
};

let score = 0;

// Event listener for keyboard input
document.addEventListener("keydown", movePlayer);

// Game loop
function gameLoop() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update game state
  updateEnemyPosition();
  checkCollisions();

  // Draw game objects
  drawPlayer();
  drawEnemy();
  drawPoint();

  // Draw score
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText(`Score: ${score}`, 10, 30);

  // Continue the game loop
  requestAnimationFrame(gameLoop);
}

// Function to move the player
function movePlayer(e) {
  switch (e.key) {
    case "ArrowUp":
      if (player.y > 0) player.y -= player.speed;
      break;
    case "ArrowDown":
      if (player.y < canvas.height - player.size) player.y += player.speed;
      break;
    case "ArrowLeft":
      if (player.x > 0) player.x -= player.speed;
      break;
    case "ArrowRight":
      if (player.x < canvas.width - player.size) player.x += player.speed;
      break;
  }
}

// Function to update enemy position
function updateEnemyPosition() {
  // Move towards the player
  const dx = player.x - enemy.x;
  const dy = player.y - enemy.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance > 0) {
    enemy.x += (dx / distance) * enemy.speed;
    enemy.y += (dy / distance) * enemy.speed;
  }
}

// Function to check collisions
function checkCollisions() {
  // Check if player collects point
  if (distance(player, point) < (player.size + point.size) / 2) {
    score++;
    respawnPoint();
  }

  // Check if enemy catches player
  if (distance(player, enemy) < (player.size + enemy.size) / 2) {
    alert("Game Over! Your score: " + score);
    resetGame();
  }
}

// Helper function to calculate distance between two objects
function distance(obj1, obj2) {
  const dx = obj1.x - obj2.x;
  const dy = obj1.y - obj2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

// Function to respawn the point
function respawnPoint() {
  point.x = Math.random() * (canvas.width - point.size);
  point.y = Math.random() * (canvas.height - point.size);
}

// Function to reset the game
function resetGame() {
  player.x = 50;
  player.y = 50;
  enemy.x = 200;
  enemy.y = 200;
  score = 0;
  respawnPoint();
}

// Drawing functions
function drawPlayer() {
  ctx.fillStyle = "blue";
  ctx.fillRect(player.x, player.y, player.size, player.size);
}

function drawEnemy() {
  ctx.fillStyle = "red";
  ctx.fillRect(enemy.x, enemy.y, enemy.size, enemy.size);
}

function drawPoint() {
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(point.x, point.y, point.size / 2, 0, Math.PI * 2);
  ctx.fill();
}

// Start the game loop
gameLoop();
