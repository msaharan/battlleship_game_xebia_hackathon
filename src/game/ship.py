class Ship:
    def __init__(self, length, coordinates):
        self.length = length
        self.coordinates = coordinates
        self.hits = set()

    def hit(self, x, y):
        coord = (x, y)
        if coord in self.coordinates:
            self.hits.add(coord)
            return True
        return False

    def is_sunk(self):
        return len(self.hits) == self.length