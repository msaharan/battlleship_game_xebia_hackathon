import random

def randomize_ship_placement(board_size, ship_length):
    orientation = 'horizontal' if random.random() < 0.5 else 'vertical'
    if orientation == 'horizontal':
        x = random.randint(0, board_size - ship_length)
        y = random.randint(0, board_size - 1)
    else:
        x = random.randint(0, board_size - 1)
        y = random.randint(0, board_size - ship_length)

    return {'x': x, 'y': y, 'orientation': orientation}

def validate_coordinates(x, y, board_size):
    return 0 <= x < board_size and 0 <= y < board_size