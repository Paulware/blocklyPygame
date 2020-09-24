import pygame
import time
import threading
pygame.init()

startTime = None
surface = None
quit2 = None
event = None


pygame.display.set_caption('Move Circle Application')
startTime = time.time()
surface = pygame.display.set_mode ((400,200), pygame.RESIZABLE)
quit2 = False
while not quit2:
  event = pygame.event.poll()
  if (event.type) == (pygame.MOUSEMOTION):
    surface.fill (0X333300)
    pygame.display.update()
    pygame.draw.circle(surface,0Xffff00,(pygame.mouse.get_pos()),50,1)
    pygame.display.update()
  elif (event.type) == (pygame.QUIT):
    quit2 = True
