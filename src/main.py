import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from game.player import Player
from game.board import Board
from game.ship import Ship

class Game:
    def __init__(self, player_name, board_size):
        self.board = Board(board_size)
        self.player = Player(player_name)
        self.initialize_game()

    def initialize_game(self):
        self.board.initialize_board()
        self.place_ships()

    def place_ships(self):
        ships = [
            {'length': 5, 'name': 'Carrier'},
            {'length': 4, 'name': 'Battleship'},
            {'length': 3, 'name': 'Cruiser'},
            {'length': 3, 'name': 'Submarine'},
            {'length': 2, 'name': 'Destroyer'}
        ]

        def place_next_ship(index):
            if index >= len(ships):
                self.start_game_loop()
                return

            ship = ships[index]
            input_str = input(f"Place your {ship['name']} (length {ship['length']}). Enter start coordinates (x y) and orientation (h/v): ")
            x, y, orientation = input_str.split()
            start_x = int(x)
            start_y = int(y)
            is_horizontal = orientation == 'h'

            if self.board.place_ship(start_x, start_y, ship['length'], is_horizontal):
                self.player.add_ship(Ship(ship['length'], self.get_ship_coordinates(start_x, start_y, ship['length'], is_horizontal)))
                place_next_ship(index + 1)
            else:
                print('Invalid placement. Try again.')
                place_next_ship(index)

        place_next_ship(0)

    def get_ship_coordinates(self, start_x, start_y, length, is_horizontal):
        coordinates = []
        for i in range(length):
            coordinates.append((start_x + i, start_y) if is_horizontal else (start_x, start_y + i))
        return coordinates

    def display_board(self):
        board_state = self.board.get_board_state()
        print('  ' + ' '.join(map(str, range(self.board.size))))
        for y, row in enumerate(board_state):
            print(f"{y} " + ' '.join(row))

    def start_game_loop(self):
        self.display_board()
        input_str = input('Enter coordinates to attack (x y): ')
        x, y = map(int, input_str.split())
        hit = self.player.make_move(self.board, (x, y))

        print('Hit!' if hit else 'Miss!')
        if self.player.check_win():
            print('You win!')
        else:
            self.start_game_loop()

if __name__ == "__main__":
    player_name = input("Enter your name: ") or "Player"
    board_size = 10
    game = Game(player_name, board_size)