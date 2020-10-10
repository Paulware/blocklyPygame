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
image = None


print('asdf')
print('I like trains')
screen = pygame.display.set_mode((600,600),pygame.RESIZABLE)
pygame.display.set_caption('Hello Class')
image = pygame.image.load ('vangogh.jpg').convert()
screen.blit (image,(((300,300))[0]-image.get_size()[0]//2,((300,300))[1]-image.get_size()[1]//2))
pygame.display.update()
_text = pygame.font.Font('freesansbold.ttf',26).render ('Hello Again',True,pygame.Color('#cc33cc'))
_rect = _text.get_rect()
_rect.x = 100
_rect.y = 100
screen.blit (_text,_rect)
pygame.display.update()
_quitEvent = False
while not _quitEvent:
   for event in (pygame.event.get()):
      if (event.type) == (pygame.QUIT):
         _quitEvent = True
         break
