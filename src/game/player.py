from .ship import Ship
from .board import Board

class Player:
    def __init__(self, name):
        self.name = name
        self.ships = []

    def make_move(self, board, coordinates):
        return board.check_hit(coordinates[0], coordinates[1])

    def check_win(self):
        return all(ship.is_sunk() for ship in self.ships)

    def add_ship(self, ship):
        self.ships.append(ship)