import pygame
import time
import threading
import math
pygame.init()

message = None
surface = None
text = None
rect = None
okImage = None
event = None
quit2 = None

# Describe this function...
def messageBox(message):
  global surface, text, rect, okImage, event, quit2
  surface.fill (0Xffffff)
  pygame.display.update()
  text = pygame.font.Font('freesansbold.ttf',12).render (message,True,pygame.Color('#ff0000'))
  rect = text.get_rect()
  rect.center = (200,100)
  surface.blit (text,rect)
  pygame.display.update()
  okImage = pygame.image.load ('ok.jpg').convert()
  surface.blit (okImage,(((100,300))[0]-okImage.get_size()[0]//2,((100,300))[1]-okImage.get_size()[1]//2))
  pygame.display.update()
  while True:
    event = pygame.event.poll()
    if (event.type) == (pygame.QUIT):
      quit2 = True
    elif (event.type) == (pygame.MOUSEBUTTONDOWN):
      rect = pygame.Rect(((100,300))[0]-okImage.get_size()[0]//2,((100,300))[1]-okImage.get_size()[1]//2,okImage.get_size()[0],okImage.get_size()[1])
      if rect.collidepoint((pygame.mouse.get_pos())):
        print('Ok Collision detected')
        break


pygame.display.set_caption('Message Box')
surface = pygame.display.set_mode ((500,400), pygame.RESIZABLE)
messageBox('Hello From Message Box Yo')
