import pygame
import time
import threading
pygame.init()

surface = None


pygame.display.set_caption('Line Draw Application')
surface = pygame.display.set_mode ((400,200), pygame.RESIZABLE)
pygame.draw.line (surface,0X3366ff,((10,10)),((100,100)))
pygame.display.update()
pygame.draw.line (surface,0X3366ff,((100,10)),((10,100)))
pygame.display.update()
_quitEvent = False
while not _quitEvent:
   for event in (pygame.event.get()):
      if (event.type) == (pygame.MOUSEBUTTONUP):
         _quitEvent = True
         break
