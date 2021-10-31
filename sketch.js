//let sketch = function(){

	// How many blocks On Th
	let totalBlocks = 20;

	// Size of each block
	let blockSize = 20;

	// Snack head position
	let posX = 0
	let posY = 0

	// Snack speed
	let speedX = 0
	let speedY = 0

	// The max long of snake
	let numOfTails = 3

	// Tails Array
	let tails = []

	// Position of Target
	let targetPosX = 0
	let targetPosY = 0


	// Score
	let score = 0
	let highscore = 0

	// Colors
	let colors = ['#ed143d', "#4ECDC4", "#4286F4"]
	let randomColor = colors[0]

	function respawnTarget(){
		targetPosX = round(random(0, totalBlocks - 1))
		targetPosY = round(random(0, totalBlocks - 1))
	}

	function respawnSnack(){
		// Set the position of snake to the center of the screen
		posX = totalBlocks/2 
		posY  = totalBlocks/2
	}

	function restart(){
		respawnSnack()
		respawnTarget()

		speedX = 0
		speedY = 0

		numOfTails = 3
		tails = []

		score = 0
	}

	function updateHighScore(){
		if(score >= highscore)
			highscore = score
	}

	function setup() {
		createCanvas(400,400)
		frameRate(10)
		// Respawn Snack
		respawnSnack()
		// Respawn Target
		respawnTarget()
	}

	function draw() {

	  // Set the background to black
	  background(50,50,51)

	  // Change color to the white
	  fill("white")
	  /*
	  	Draw A rectangle with rect()
	  	rect accept 4 paras
	  		=> position X 
	  		=> position Y
	  		=> height
	  		=> width
	  */
	  rect(posX * blockSize , posY * blockSize , blockSize , blockSize)

	  // Update the position of the snake 
	  posX += speedX;
	  posY += speedY;

	  /*
	  	Check if the snake is outside the screen
	  	Then Change his position
	  */
	  	if(posY > totalBlocks)
	  		posY = 0

	  	if(posX > totalBlocks)
	  		posX = 0

	  	if(posY < 0)
	  		posY = totalBlocks

	  	if(posX < 0)
	  		posX = totalBlocks

	  // Add new position of snake to the tails
	  tails.push({x:posX , y:posY})

	  // Remove Tile from snake
	  while(tails.length > numOfTails)
	  	 tails.shift()

	  // Draw Tails 
	  for(let tail of tails){
	  	rect(tail.x * blockSize , tail.y * blockSize , blockSize, blockSize)
	  }


	  // Pick random color
	  randomColor = colors[round(random(0 , colors.length - 1))]
	  //console.log
	  // Change color to the randomColor
	  fill(randomColor)

	  // Draw Target
	  rect(targetPosX * blockSize , targetPosY * blockSize , blockSize, blockSize)

	  // When snake collides with target reposition it
	  if(posX == targetPosX && posY == targetPosY){
	  	respawnTarget()
	  	numOfTails++
	  }

	  /*
	  	When the snack is moving 
	  	Check for the collistions
	  */
	  /*if(speedX != 0 || speedY != 0){
	  	 for(let tail of tails){
		   // When snake collides with target reposition it
			 if(posX == tail.x && posY == tail.y){
			  	updateHighScore()
			  	restart() // Restart The game
			 }
		 }
	  }*/

	  // SH

	}

	function keyPressed(){
		/*switch(key){
			case "z" , "up":
				speedX = 0
				speedY = 1
			break;

			case "s" , "down":
				speedX = 0
				speedY = -1
			break;

			case "q", "left":
				speedX = -1
				speedY = 0
			break;

			case "d", "right":
				speedX = 1
				speedY = 0
			break;
		}*/

		if(key == "z" || keyCode == DOWN_ARROW){
			speedX = 0
			speedY = 1
		}else if(key == "s" || keyCode == UP_ARROW){
			speedX = 0
			speedY = -1
		}else if(key == "d" || keyCode == RIGHT_ARROW){
			speedX = 1
			speedY = 0
		}else if(key == "q" || keyCode == LEFT_ARROW){
			speedX = -1
			speedY = 0
		}
	}
