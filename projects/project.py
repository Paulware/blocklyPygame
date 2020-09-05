surface = None
image = None
w = None
h = None
continue2 = None
event = None


import pygame
pygame.init()
print('start')
surface = pygame.display.set_mode ((0, 0), pygame.FULLSCREEN)
image = pygame.image.load ('hello.jpg').convert()
w = image.get_size()[0]
h = image.get_size()[1]
continue2 = True
surface.blit(image,(10,10))
pygame.display.update();
while continue2:
  for event in (pygame.event.get()):
    if (event.type) == (pygame.MOUSEBUTTONDOWN):
      continue2 = False
      break
print('done')

10
