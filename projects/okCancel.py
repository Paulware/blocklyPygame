import pygame
import time
import threading
import math
pygame.init()

msg = None
message = None
ok = None
surface = None
text = None
textRect = None
event = None
okImage = None
okRect = None
cancelRect = None
cancelImage = None

# Describe this function...
def initOkCancel(msg):
  global message, ok, surface, text, textRect, event, okImage, okRect, cancelRect, cancelImage
  surface.fill (0Xffffff)
  pygame.display.update()
  text = pygame.font.Font('freesansbold.ttf',12).render (msg,True,pygame.Color('#ff0000'))
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
  ok = False

# Describe this function...
def okCancel(message):
  global msg, ok, surface, text, textRect, event, okImage, okRect, cancelRect, cancelImage
  initOkCancel(message)
  while True:
    event = pygame.event.poll()
    if (event.type) == (pygame.QUIT):
      break
    elif (event.type) == (pygame.MOUSEBUTTONDOWN):
      if okRect.collidepoint((pygame.mouse.get_pos())):
        ok = True
        break
      elif cancelRect.collidepoint((pygame.mouse.get_pos())):
        break
  return ok


pygame.display.set_caption('Ok-Cancel Box')
surface = pygame.display.set_mode ((500,400), pygame.RESIZABLE)
if okCancel('Continue?'):
  print('You would like to continue')
else:
  print('You are done')
