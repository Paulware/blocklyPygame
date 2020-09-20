surface = None


import pygame
pygame.init()
surface = pygame.display.set_mode ((300,100), (pygame.RESIZABLE))
pygame.display.set_caption('Hello BCC')
_quitEvent = False
while not _quitEvent:
   for event in (pygame.event.get()):
      if (event.type) == (pygame.QUIT):
         _quitEvent = True
         break
