text = None
rect = None
surface = None
continue2 = None
event = None


import pygame
pygame.init()
print('start')
pygame.display.set_caption('My First PyGame Application')
text = pygame.font.Font('freesansbold.ttf', 32).render ('Hello World',True,((0,0,128)))
rect = text.get_rect()
rect.center = (200,100)
surface = pygame.display.set_mode ((400,200), (pygame.RESIZABLE))
continue2 = True
surface.blit (text,rect)
pygame.display.update()
while continue2:
  for event in (pygame.event.get()):
    if (event.type) == (pygame.MOUSEBUTTONDOWN):
      continue2 = False
      break
print('done')
