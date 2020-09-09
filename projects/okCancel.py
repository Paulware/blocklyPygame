message = None
msg = None
ok = None
surface = None
text = None
textRect = None
event = None
quit2 = None
okImage = None
okRect = None
cancelRect = None
cancelImage = None

# Describe this function...
def initOkCancel(message):
  global msg, ok, surface, text, textRect, event, quit2, okImage, okRect, cancelRect, cancelImage
  surface.fill (0Xffffff)
  pygame.display.update()
  text = pygame.font.Font('freesansbold.ttf', 32).render (message,True,pygame.Color('#ff0000'))
  textRect = text.get_rect()
  textRect.center = (200,100)
  surface.blit (text,textRect)
  pygame.display.update()
  okImage = pygame.image.load ('ok.jpg').convert()
  surface.blit (okImage,(((100,300))[0]-okImage.get_size()[0]//2,((100,300))[1]-okImage.get_size()[1]//2))
  pygame.display.update()
  okRect = pygame.Rect(((100,300))[0]-okImage.get_size()[0]//2,((100,300))[1]-okImage.get_size()[1]//2,okImage.get_size()[0],okImage.get_size()[1])
  cancelImage = pygame.image.load ('cancel.jpg').convert()
  surface.blit (cancelImage,(((300,300))[0]-cancelImage.get_size()[0]//2,((300,300))[1]-cancelImage.get_size()[1]//2))
  pygame.display.update()
  cancelRect = pygame.Rect(((300,300))[0]-cancelImage.get_size()[0]//2,((300,300))[1]-cancelImage.get_size()[1]//2,cancelImage.get_size()[0],cancelImage.get_size()[1])
  quit2 = False

# Describe this function...
def okCancel(msg):
  global message, ok, surface, text, textRect, event, quit2, okImage, okRect, cancelRect, cancelImage
  initOkCancel(msg)
  while not quit2:
    for event in (pygame.event.get()):
      if (event.type) == (pygame.QUIT):
        quit2 = True
      elif (event.type) == (pygame.MOUSEBUTTONDOWN):
        if okRect.collidepoint((pygame.mouse.get_pos())):
          quit2 = True
          ok = True
        elif cancelRect.collidepoint((pygame.mouse.get_pos())):
          quit2 = True
  return ok


import pygame
pygame.init()
import pygame
import math
import time
import threading
from math import atan2, degrees, pi
pygame.display.set_caption('Message Box')
surface = pygame.display.set_mode ((500,400), (pygame.RESIZABLE))
if okCancel('Continue?'):
  print('You would like to continue')
else:
  print('You are done')
