surface = None
image = None


import pygame
pygame.init()
import pygame
import math
import time
import threading
from math import atan2, degrees, pi
pygame.display.set_caption('Van Gogh self portrait')
surface = pygame.display.set_mode ((600,600), (pygame.RESIZABLE))
image = pygame.image.load ('vangogh.jpg').convert()
surface.blit (image,(((300,300))[0]-image.get_size()[0]//2,((300,300))[1]-image.get_size()[1]//2))
pygame.display.update()
_quitEvent = False
while not _quitEvent:
   for event in (pygame.event.get()):
      if (event.type) == (pygame.MOUSEBUTTONDOWN):
         _quitEvent = True
         break
