import pygame
import time
import threading
pygame.init()

startTime = None
surface = None
elapsedTime = None
event = None
pos = None


pygame.display.set_caption('Mouse Move Application')
startTime = time.time()
surface = pygame.display.set_mode ((400,200), pygame.RESIZABLE)
elapsedTime = 0
while elapsedTime < 10:
  for event in (pygame.event.get()):
    if (event.type) == (pygame.MOUSEMOTION):
      pos = pygame.mouse.get_pos()
      print(str(pos))
  elapsedTime = time.time() - startTime
