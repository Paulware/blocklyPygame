import pygame
import time
import threading
pygame.init()

startTime = None
surface = None
elapsedTime = None
image = None
degree = None
img = None


pygame.display.set_caption('Rotate Image Application')
startTime = time.time()
surface = pygame.display.set_mode ((600,600), pygame.RESIZABLE)
elapsedTime = 0
image = pygame.image.load ('vangogh.jpg').convert()
degree = 0
while elapsedTime < 10:
  degree = degree + 30
  elapsedTime = time.time() - startTime
  img = pygame.transform.rotate(image,degree)
  surface.blit (img,(((300,300))[0]-img.get_size()[0]//2,((300,300))[1]-img.get_size()[1]//2))
  pygame.display.update()
  threading.Event().wait (1)
