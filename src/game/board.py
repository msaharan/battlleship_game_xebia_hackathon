from .ship import Ship

class Board:
    def __init__(self, size=10):
        self.size = size
        self.ships = []
        self.hits = set()
        self.misses = set()

    def initialize_board(self):
        pass

    def place_ship(self, x, y, length, is_horizontal):
        coordinates = []
        for i in range(length):
            coord = (x + i, y) if is_horizontal else (x, y + i)
            if coord[0] >= self.size or coord[1] >= self.size:
                return False
            coordinates.append(coord)

        new_ship = Ship(length, coordinates)
        self.ships.append(new_ship)
        return True

    def check_hit(self, x, y):
        for ship in self.ships:
            if ship.hit(x, y):
                self.hits.add((x, y))
                return True
        self.misses.add((x, y))
        return False

    def get_board_state(self):
        board_state = [[' ' for _ in range(self.size)] for _ in range(self.size)]

        for x, y in self.hits:
            board_state[y][x] = 'X'

        for x, y in self.misses:
            board_state[y][x] = 'O'

        return board_state