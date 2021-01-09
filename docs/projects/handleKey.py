import pygame
import time
import threading
import math
pygame.init()

event = None
pressedKeys = None
surface = None
ch = None

# Describe this function...
def handleKey(event, pressedKeys):
  global surface, ch
  if pressedKeys is None:
    pressedKeys = [False, False, False, False]
  if (event.type) == (pygame.KEYDOWN):
    ch = chr(event.key)
    if ch == 'w':
      pressedKeys[0] = True
    elif ch == 'a':
      pressedKeys[1] = True
    elif ch == 's':
      pressedKeys[2] = True
    elif ch == 'd':
      pressedKeys[3] = True
  elif (event.type) == (pygame.KEYUP):
    ch = chr(event.key)
    if ch == 'w':
      pressedKeys[0] = False
    elif ch == 'a':
      pressedKeys[1] = False
    elif ch == 's':
      pressedKeys[2] = False
    elif ch == 'd':
      pressedKeys[3] = False
  return pressedKeys


if __name__ == "__main__":
  pressedKeys = [False, False, False, False]
  surface = pygame.display.set_mode((123,123),pygame.RESIZABLE)
  while True:
    event = pygame.event.poll()
    if (event.type) == (pygame.QUIT):
      break
    elif (event.type) == (pygame.KEYDOWN) or (event.type) == (pygame.KEYUP):
      print(str(pressedKeys))
