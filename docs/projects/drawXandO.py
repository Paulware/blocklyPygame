import pygame
import time
import threading
pygame.init()
import math

column = None
row = None
x1 = None
x = None
surface = None
y1 = None
y = None
playing = None
x2 = None
y2 = None
turnX = None
event = None

# Describe this function...
def drawX(column, row):
  global x1, x, surface, y1, y, playing, x2, y2, turnX, event
  x1 = column * 110 + 5
  y1 = row * 110 + 5
  x2 = x1 + 100
  y2 = y1 + 100
  pygame.draw.line (surface,0X3366ff,((x1,y1)),((x2,y2)))
  pygame.display.update()
  y1 = y2
  y2 = row * 110 + 5
  pygame.draw.line (surface,0X3366ff,((x1,y1)),((x2,y2)))
  pygame.display.update()

# Describe this function...
def drawO(column, row):
  global x1, x, surface, y1, y, playing, x2, y2, turnX, event
  x = column * 110 + 55
  y = row * 110 + 55
  pygame.draw.circle(surface,0X3366ff,((x,y)),50,1)
  pygame.display.update()


pygame.display.set_caption('tic-tac-toe board')
surface = pygame.display.set_mode ((340,340), pygame.RESIZABLE)
playing = True
pygame.draw.line (surface,0X3366ff,((110,10)),((110,330)))
pygame.display.update()
pygame.draw.line (surface,0X3366ff,((220,10)),((220,330)))
pygame.display.update()
pygame.draw.line (surface,0X3366ff,((10,110)),((330,110)))
pygame.display.update()
pygame.draw.line (surface,0X3366ff,((10,220)),((330,220)))
pygame.display.update()
turnX = True
while playing:
  event = pygame.event.poll()
  if (event.type) == (pygame.QUIT):
    playing = False
  elif (event.type) == (pygame.MOUSEBUTTONUP):
    x = (pygame.mouse.get_pos())[0]# X
    y = (pygame.mouse.get_pos())[1]# Y
    column = math.floor(x / 110)
    row = math.floor(y / 110)
    if turnX:
      drawX(column, row)
    else:
      drawO(column, row)
    turnX = not turnX
