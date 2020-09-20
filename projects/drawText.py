import pygame
import time
import threading
pygame.init()

surface = None


surface = pygame.display.set_mode((600,400),pygame.RESIZABLE)
pygame.display.set_caption('Pygame Text Drawing')
_text = pygame.font.Font('freesansbold.ttf',24).render ('Hello BCC',True,pygame.Color('#3333ff'))
_rect = _text.get_rect()
_rect.x = 100
_rect.y = 200
surface.blit (_text,_rect)
pygame.display.update()
_quitEvent = False
while not _quitEvent:
   for event in (pygame.event.get()):
      if (event.type) == (pygame.QUIT):
         _quitEvent = True
         break
