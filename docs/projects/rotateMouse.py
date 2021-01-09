import pygame
import time
import threading
import math
pygame.init()

startTime = None
surface = None
image = None
degree = None
event = None
mousePosition = None
img = None


pygame.display.set_caption('Rotate Image pointed at Mouse')
startTime = time.time()
surface = pygame.display.set_mode ((600,600), pygame.RESIZABLE)
image = pygame.image.load ('cannon.jpg').convert()
degree = math.degrees(math.atan2(-(((10,180))[1] - ((10,10))[1]),((10,180))[0]-((10,10))[0]) % (2*math.pi))
while True:
  event = pygame.event.poll()
  if (event.type) == (pygame.MOUSEMOTION):
    mousePosition = pygame.mouse.get_pos()
    img = pygame.transform.rotate(image,degree)
    degree = math.degrees(math.atan2(-(mousePosition[1] - ((100,100))[1]),mousePosition[0]-((100,100))[0]) % (2*math.pi))
    surface.blit (img,(((100,100))[0]-img.get_size()[0]//2,((100,100))[1]-img.get_size()[1]//2))
    pygame.display.update()
  elif (event.type) == (pygame.QUIT):
    break
