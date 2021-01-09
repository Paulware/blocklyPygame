import pygame
import time
import threading
import math
pygame.init()

event = None
surface = None
ch = None
image = None
cannonX = None
wPressed = None
aPressed = None
sPressed = None
dPressed = None
cannonY = None
quit2 = None
degree = None
taskTimer = None

# Describe this function...
def handleKey(event):
  global surface, ch, image, cannonX, wPressed, aPressed, sPressed, dPressed, cannonY, quit2, degree, taskTimer
  if (event.type) == (pygame.KEYDOWN):
    ch = chr(event.key)
    if ch == 'w':
      wPressed = True
    elif ch == 'a':
      aPressed = True
    elif ch == 's':
      sPressed = True
    elif ch == 'd':
      dPressed = True
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

# Describe this function...
def initVariables():
  global event, surface, ch, image, cannonX, wPressed, aPressed, sPressed, dPressed, cannonY, quit2, degree, taskTimer
  surface = pygame.display.set_mode ((600,600), pygame.RESIZABLE)
  image = pygame.image.load ('cannon.jpg').convert()
  cannonX = 100
  cannonY = 100
  degree = 0
  taskTimer = time.time()


pygame.display.set_caption('Move image based on wasd')
initVariables()
while not quit2:
  event = pygame.event.poll()
  if (event.type) == (pygame.QUIT):
    quit2 = True
  handleKey(event)
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
    surface.blit (image,(((cannonX,cannonY))[0]-image.get_size()[0]//2,((cannonX,cannonY))[1]-image.get_size()[1]//2))
    pygame.display.update()
