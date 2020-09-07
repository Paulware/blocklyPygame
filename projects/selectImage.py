surface = None
okImage = None
cancelImage = None
quit2 = None
event = None
mouseRect = None
rect = None


import pygame
pygame.init()
import pygame
import math
import time
import threading
from math import atan2, degrees, pi
pygame.display.set_caption('Detect mouse press on an image')
surface = pygame.display.set_mode ((500,400), (pygame.RESIZABLE))
surface.fill (0Xffffff)
pygame.display.update()
okImage = pygame.image.load ('ok.jpg').convert()
cancelImage = pygame.image.load ('cancel.jpg').convert()
surface.blit (okImage,(((100,300))[0]-okImage.get_size()[0]//2,((100,300))[1]-okImage.get_size()[1]//2))
pygame.display.update()
surface.blit (cancelImage,(((300,300))[0]-cancelImage.get_size()[0]//2,((300,300))[1]-cancelImage.get_size()[1]//2))
pygame.display.update()
quit2 = False
while not quit2:
  for event in (pygame.event.get()):
    if (event.type) == (pygame.QUIT):
      quit2 = True
    elif (event.type) == (pygame.MOUSEBUTTONDOWN):
      mouseRect = pygame.Rect(((100,300)),(((300,300))[0]-((100,300))[0],((300,300))[1]-((100,300))[1]))
      rect = pygame.Rect(((100,300))[0]-okImage.get_size()[0]//2,((100,300))[1]-okImage.get_size()[1]//2,okImage.get_size()[0],okImage.get_size()[1])
      if rect.collidepoint((pygame.mouse.get_pos())):
        print('Ok Collision detected')
      rect = pygame.Rect(((300,300))[0]-cancelImage.get_size()[0]//2,((300,300))[1]-cancelImage.get_size()[1]//2,cancelImage.get_size()[0],cancelImage.get_size()[1])
      if rect.collidepoint((pygame.mouse.get_pos())):
        print('Cancel Collision detected')
