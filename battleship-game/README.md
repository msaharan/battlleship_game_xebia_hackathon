# Battleship Game

## Overview
Battleship is a classic strategy game where players try to sink each other's ships by guessing their locations on a grid. This project is a digital version of the game, implemented in TypeScript.

## Project Structure
```
battleship-game
├── src
│   ├── main.ts          # Entry point of the application
│   ├── game
│   │   ├── board.ts     # Manages the game board
│   │   ├── ship.ts      # Represents a ship in the game
│   │   └── player.ts    # Represents a player in the game
│   └── utils
│       └── helpers.ts   # Utility functions for the game
├── package.json         # npm configuration file
├── tsconfig.json        # TypeScript configuration file
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites
- Node.js
- npm

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/battleship-game.git
   ```
2. Navigate to the project directory:
   ```
   cd battleship-game
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Game
To start the game, run:
```
npm start
```

### How to Play
1. Each player places their ships on the board.
2. Players take turns guessing the location of the opponent's ships.
3. The game continues until one player sinks all of the opponent's ships.

### Note on Input Duplication
When specifying the coordinates for your ships, you may notice that characters are duplicated. For example, when you try to input the position `5 5 h`, it may display as `55 55 hh`. This is a known bug that we accept for now. Please continue with your input as usual.

## Contributing
Feel free to submit issues or pull requests to improve the game!

## License
This project is licensed under the MIT License.