import pygame
import time
import threading
pygame.init()
import math

column = None
row = None
surface = None
playing = None
x1 = None
y1 = None
x2 = None
y2 = None
event = None
x = None
y = None

# Describe this function...
def drawX(column, row):
  global surface, playing, x1, y1, x2, y2, event, x, y
  print('drawX')
  print('[column,row]: [' + str(column) + ',' + str(row) + ']')
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
while playing:
  event = pygame.event.poll()
  if (event.type) == (pygame.QUIT):
    playing = False
  elif (event.type) == (pygame.MOUSEBUTTONUP):
    x = (pygame.mouse.get_pos())[0]# X
    y = (pygame.mouse.get_pos())[1]# Y
    column = math.floor(x / 110)
    row = math.floor(y / 110)
    drawX(column, row)
