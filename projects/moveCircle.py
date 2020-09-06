startTime = None
surface = None
elapsedTime = None
x = None


import pygame
import time
import threading
pygame.init()
pygame.display.set_caption('Move Circle Application')
startTime = time.time()
surface = pygame.display.set_mode ((400,200), (pygame.RESIZABLE))
elapsedTime = 0
x = 100
while elapsedTime < 10:
  elapsedTime = time.time() - startTime
  x = x + 1
  surface.fill (0X333300)
  pygame.display.update()
  pygame.draw.circle(surface,0Xffff00,((x,100)),50)
  pygame.display.update()
  threading.Event().wait (0.04)
