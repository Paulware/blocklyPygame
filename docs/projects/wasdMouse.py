import pygame
import time
import threading
import math
pygame.init()

surface = None
image = None
cannonX = None
cannonY = None
degree = None
taskTimer = None
event = None
mousePosition = None
ch = None
img = None
wPressed = None
aPressed = None
sPressed = None
dPressed = None


pygame.display.set_caption('Point image at mouse, move via wasd')
surface = pygame.display.set_mode ((600,600), pygame.RESIZABLE)
image = pygame.image.load ('cannon.jpg').convert()
cannonX = 100
cannonY = 100
degree = 0
taskTimer = time.time()
while True:
  event = pygame.event.poll()
  if (event.type) == (pygame.MOUSEMOTION):
    mousePosition = pygame.mouse.get_pos()
    degree = math.degrees(math.atan2(-(mousePosition[1] - ((cannonX,cannonY))[1]),mousePosition[0]-((cannonX,cannonY))[0]) % (2*math.pi))
    img = pygame.transform.rotate(image,degree)
    surface.blit (img,(((cannonX,cannonY))[0]-img.get_size()[0]//2,((cannonX,cannonY))[1]-img.get_size()[1]//2))
    pygame.display.update()
  elif (event.type) == (pygame.KEYDOWN):
    ch = chr(event.key)
    if ch == 'w':
      wPressed = True
    elif ch == 'a':
      aPressed = True
    elif ch == 's':
      sPressed = True
    elif ch == 'd':
      dPressed = True
  elif (event.type) == (pygame.QUIT):
    break
  elif (event.type) == (pygame.KEYUP):
    ch = chr(event.key)
    if ch == 'w':
      wPressed = False
    elif ch == 'a':
      aPressed = False
    elif ch == 's':
      sPressed = False
    elif ch == 'd':
      dPressed = False
  if (time.time()) - taskTimer > 0.1:
    taskTimer = time.time()
    if wPressed:
      cannonY = cannonY - 10
    if aPressed:
      cannonX = cannonX - 10
    if sPressed:
      cannonY = cannonY + 10
    if dPressed:
      cannonX = cannonX + 10
    surface.blit (img,(((cannonX,cannonY))[0]-img.get_size()[0]//2,((cannonX,cannonY))[1]-img.get_size()[1]//2))
    pygame.display.update()
