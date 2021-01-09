import pygame
import time
import threading
import math
pygame.init()

surface = None
okImage = None
cancelImage = None
event = None
rect = None


pygame.display.set_caption('Detect mouse press on an image')
surface = pygame.display.set_mode ((500,400), pygame.RESIZABLE)
okImage = pygame.image.load ('ok.jpg').convert()
cancelImage = pygame.image.load ('cancel.jpg').convert()
surface.blit (okImage,(((100,300))[0]-okImage.get_size()[0]//2,((100,300))[1]-okImage.get_size()[1]//2))
pygame.display.update()
surface.blit (cancelImage,(((300,300))[0]-cancelImage.get_size()[0]//2,((300,300))[1]-cancelImage.get_size()[1]//2))
pygame.display.update()
while True:
  event = pygame.event.poll()
  if (event.type) == (pygame.QUIT):
    break
  elif (event.type) == (pygame.MOUSEBUTTONDOWN):
    rect = pygame.Rect(((100,300))[0]-okImage.get_size()[0]//2,((100,300))[1]-okImage.get_size()[1]//2,okImage.get_size()[0],okImage.get_size()[1])
    if rect.collidepoint((pygame.mouse.get_pos())):
      print('Ok Collision detected')
    rect = pygame.Rect(((300,300))[0]-cancelImage.get_size()[0]//2,((300,300))[1]-cancelImage.get_size()[1]//2,cancelImage.get_size()[0],cancelImage.get_size()[1])
    if rect.collidepoint((pygame.mouse.get_pos())):
      print('Cancel Collision detected')
