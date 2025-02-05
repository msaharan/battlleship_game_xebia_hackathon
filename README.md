# Battleship Game

## Overview
Battleship is a classic strategy game where players try to sink each other's ships by guessing their locations on a grid. This project is a digital version of the game, implemented in Python.

## Getting Started

### Prerequisites
- Python 3.x

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/battleship-game.git
   ```
2. Navigate to the project directory:
```
cd battleship-game
```
## Running the Game
To start the game, run:
```
python src/main.py
```
## How to Play
Each player places their ships on the board.
Players take turns guessing the location of the opponent's ships.
The game continues until one player sinks all of the opponent's ships.

## Example
```
Enter your name: Player1
Place your Carrier (length 5). Enter start coordinates (x y) and orientation (h/v): 0 0 h
Place your Battleship (length 4). Enter start coordinates (x y) and orientation (h/v): 1 0 h
Place your Cruiser (length 3). Enter start coordinates (x y) and orientation (h/v): 2 0 h
Place your Submarine (length 3). Enter start coordinates (x y) and orientation (h/v): 3 0 h
Place your Destroyer (length 2). Enter start coordinates (x y) and orientation (h/v): 4 0 h
  0 1 2 3 4 5 6 7 8 9
0 X X X X X          
1 X X X X            
2 X X X              
3 X X X              
4 X X                
5                    
6                    
7                    
8                    
9                    
Enter coordinates to attack (x y): 0 0
Hit!
  0 1 2 3 4 5 6 7 8 9
0 X X X X X          
1 X X X X            
2 X X X              
3 X X X              
4 X X                
5                    
6                    
7                    
8                    
9                    
Enter coordinates to attack (x y): 5 5
Miss!
  0 1 2 3 4 5 6 7 8 9
0 X X X X X          
1 X X X X            
2 X X X              
3 X X X              
4 X X                
5         O          
6                    
7                    
8                    
9                    
```
## Contributing
Feel free to submit issues or pull requests to improve the game!

## License
This project is licensed under the MIT License. See the LICENSE file for details.