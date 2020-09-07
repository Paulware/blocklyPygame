surface = None


import pygame
pygame.init()
pygame.display.set_caption('Line Circle Application')
surface = pygame.display.set_mode ((400,200), (pygame.RESIZABLE))
pygame.draw.circle(surface,0Xffff00,((100,100)),50)
pygame.display.update()
pygame.event.clear()
_quitEvent = False
while not _quitEvent:
   for event in (pygame.event.get()):
      if (event.type) == (pygame.VIDEORESIZE):
         _quitEvent = True
         break
