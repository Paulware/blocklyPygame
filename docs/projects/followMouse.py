startTime = None
surface = None
elapsedTime = None
x = None
event = None
pos = None


import pygame
import time
import threading
pygame.init()
pygame.display.set_caption('Follow Mouse Application')
startTime = time.time()
surface = pygame.display.set_mode ((400,200), (pygame.RESIZABLE))
elapsedTime = 0
x = 100
while elapsedTime < 10:
  for event in (pygame.event.get()):
    if (event.type) == (pygame.MOUSEMOTION):
      pos = pygame.mouse.get_pos()
      print(str(pos))
  elapsedTime = time.time() - startTime
