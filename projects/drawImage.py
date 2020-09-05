surface = None
image = None
continue2 = None
event = None


import pygame
pygame.init()
surface = pygame.display.set_mode ((600,600), (pygame.RESIZABLE))
image = pygame.image.load ('vangogh.jpg').convert()
surface.blit(image,(10,10))
pygame.display.update()
continue2 = True
while continue2:
  for event in (pygame.event.get()):
    if (event.type) == (pygame.MOUSEBUTTONDOWN):
      continue2 = False
      break
