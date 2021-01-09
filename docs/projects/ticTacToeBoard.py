import pygame
import time
import threading
pygame.init()

surface = None


pygame.display.set_caption('tic-tac-toe board')
surface = pygame.display.set_mode ((340,340), pygame.RESIZABLE)
pygame.draw.line (surface,0X3366ff,((110,10)),((110,330)))
pygame.display.update()
pygame.draw.line (surface,0X3366ff,((220,10)),((220,330)))
pygame.display.update()
pygame.draw.line (surface,0X3366ff,((10,110)),((330,110)))
pygame.display.update()
pygame.draw.line (surface,0X3366ff,((10,220)),((330,220)))
pygame.display.update()
_quitEvent = False
while not _quitEvent:
   for event in (pygame.event.get()):
      if (event.type) == (pygame.MOUSEBUTTONUP):
         _quitEvent = True
         break
