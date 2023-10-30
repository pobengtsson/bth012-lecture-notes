NOTE GAME EXAMPLE


Lets make a simple adventure game with a simple 2D map 

Purpose of the game is to find a hidden gem without getting killed first

	create class:
		Tile
			terrain: dessert, forest, mountain, Swamp
			visited: if the player has visited the tile
			items:
				armour - decreases monster damage
				food - increases the health
				weapon - increases the players damage
			npc actions: (arrow functions) that gets executed when player visits the tile representing npc
				monster  - attacks player reducing health
				friend - gets clue as to where to find gem
				magician - changes tiles in the map
			player action options:  list of (arrow functions) that the player can choose to do at the tile
				dig,
				climb,
				fight


first step:

*	create a player
	has
		position in the map
		health level (0-100)
		armour level (0-100)
		damage level (0-100)
		name

*	create the tile class
		constructor
			symbol 
			terrain type
			visited 
			
*	map renderer function
		render(map, player)
		prints the map representation to the console
			visited tiles are shown with terrain symbols
			not visited tiles are masked
			tiles adjacent to the players position is visible
			player is shown instead of the tile at players position

* 

4	create a game 
	in state setup
		initializes a map of tiles
		puts the player at a starting position
		then switches to state ready
	state ready	
		asks to start the game or quit
		if player chooses to quit exit the program
	state game on
		loops
			prints the map 
			prints the meny of options (movement in directions east, west, north, south) 
			prompts for player input:
			processes the input (moves the player)
			if player chooses to quit, the ask for confirmation and exit the program
			if player dies change to state game over
			if player finds gem change state to player one
	state game over
		prints game over  
		then prints the make uncloaked and shows the position of the gem
		and then changes state to setup
	state player won
		prints player won
		the changes the state to setup
	