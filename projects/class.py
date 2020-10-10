import pygame
import time
import threading
import math
try:
   import pymunk
   import pymunk.pygame_util
except:
   pass
pygame.init()

screen = None
img = None


screen = pygame.display.set_mode((600,600),pygame.RESIZABLE)
pygame.display.set_caption('drawing Text')
_text = pygame.font.Font('freesansbold.ttf',24).render ('Hello from BCC',True,pygame.Color('#ffcc00'))
_rect = _text.get_rect()
_rect.x = 100
_rect.y = 200
screen.blit (_text,_rect)
pygame.display.update()
img = pygame.image.load ('vangogh.jpg').convert()
screen.blit (img,(((300,300))[0]-img.get_size()[0]//2,((300,300))[1]-img.get_size()[1]//2))
pygame.display.update()
_quitEvent = False
while not _quitEvent:
   for event in (pygame.event.get()):
      if (event.type) == (pygame.QUIT):
         _quitEvent = True
         break
