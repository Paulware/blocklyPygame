import pygame
import time
import threading
pygame.init()

screen = None


screen = pygame.display.set_mode((600,400),pygame.RESIZABLE)
pygame.display.set_caption('Hello BCC')
_quitEvent = False
while not _quitEvent:
   for event in (pygame.event.get()):
      if (event.type) == (pygame.QUIT):
         _quitEvent = True
         break
