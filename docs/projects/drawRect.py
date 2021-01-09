surface = None
rect = None


import pygame
pygame.init()
pygame.display.set_caption('Rect Draw Application')
surface = pygame.display.set_mode ((400,200), (pygame.RESIZABLE))
rect = pygame.Rect(((10,10)),(((100,100))[0]-((10,10))[0],((100,100))[1]-((10,10))[1]))
pygame.draw.rect(surface,0Xcc0000,rect)
pygame.display.update()
_quitEvent = False
while not _quitEvent:
   for event in (pygame.event.get()):
      if (event.type) == (pygame.KEYDOWN):
         _quitEvent = True
         break
