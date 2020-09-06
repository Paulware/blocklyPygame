startTime = None
surface = None
elapsedTime = None
image = None
degree = None
event = None
mousePosition = None
img = None
rect = None


import pygame
import time
import threading
pygame.init()
from math import atan2, degrees, pi
pygame.display.set_caption('Rotate Image pointed at Mouse')
startTime = time.time()
surface = pygame.display.set_mode ((600,600), (pygame.RESIZABLE))
elapsedTime = 0
image = pygame.image.load ('cannon.jpg').convert()
degree = degrees(atan2(-(((10,180))[1] - ((10,10))[1]),((10,180))[0]-((10,10))[0]) % (2*pi))
while elapsedTime < 10:
  elapsedTime = time.time() - startTime
  for event in (pygame.event.get()):
    if (event.type) == (pygame.MOUSEMOTION):
      mousePosition = pygame.mouse.get_pos()
      img = pygame.transform.rotate(image,degree)
      rect = img.get_rect()
      degree = degrees(atan2(-(mousePosition[1] - ((100,100))[1]),mousePosition[0]-((100,100))[0]) % (2*pi))
      surface.blit (img,(((100,100))[0]-img.get_size()[0]//2,((100,100))[1]-img.get_size()[1]//2))
      pygame.display.update()
