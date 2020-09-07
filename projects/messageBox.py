message = None
surface = None
text = None
rect = None
okImage = None
quit2 = None
event = None

# Describe this function...
def messageBox(message):
  global surface, text, rect, okImage, quit2, event
  surface.fill (0Xffffff)
  pygame.display.update()
  text = pygame.font.Font('freesansbold.ttf', 32).render (message,True,pygame.Color('#ff0000'))
  rect = text.get_rect()
  surface.blit (text,rect)
  pygame.display.update()
  okImage = pygame.image.load ('ok.jpg').convert()
  surface.blit (okImage,(((100,300))[0]-okImage.get_size()[0]//2,((100,300))[1]-okImage.get_size()[1]//2))
  pygame.display.update()
  quit2 = False
  while not quit2:
    for event in (pygame.event.get()):
      if (event.type) == (pygame.QUIT):
        quit2 = True
      elif (event.type) == (pygame.MOUSEBUTTONDOWN):
        rect = pygame.Rect(((100,300))[0]-okImage.get_size()[0]//2,((100,300))[1]-okImage.get_size()[1]//2,okImage.get_size()[0],okImage.get_size()[1])
        if rect.collidepoint((pygame.mouse.get_pos())):
          quit2 = True
          print('Ok Collision detected')


import pygame
pygame.init()
import pygame
import math
import time
import threading
from math import atan2, degrees, pi
pygame.display.set_caption('Message Box')
surface = pygame.display.set_mode ((500,400), (pygame.DOUBLEBUF))
messageBox('Hello From Message Box Yo')
