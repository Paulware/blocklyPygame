import pygame
import time
import threading
pygame.init()

surface = None


pygame.display.set_caption('Line Circle Application')
surface = pygame.display.set_mode ((400,200), pygame.RESIZABLE)
pygame.draw.circle(surface,0Xffff00,((100,100)),50)
pygame.display.update()
_quitEvent = False
while not _quitEvent:
   for event in (pygame.event.get()):
      if (event.type) == (pygame.MOUSEBUTTONDOWN):
         _quitEvent = True
         break
