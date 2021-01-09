surface = None
rect = None
event = None
quit2 = None
mousePosition = None
dragging = None
firstOffset = None
offset = None


import pygame
pygame.init()
pygame.display.set_caption('Rect Draw Application')
surface = pygame.display.set_mode ((800,600), (pygame.RESIZABLE))
rect = pygame.Rect(((10,10)),(((100,100))[0]-((10,10))[0],((100,100))[1]-((10,10))[1]))
pygame.draw.rect(surface,0Xcc0000,rect)
pygame.display.update()
while not quit2:
  event = pygame.event.poll()
  if (event.type) == (pygame.QUIT):
    quit2 = True
  elif (event.type) == (pygame.MOUSEBUTTONDOWN):
    if rect.collidepoint(mousePosition):
      dragging = True
      firstOffset = (mousePosition[0]-((rect.left,rect.top))[0],mousePosition[1]-((rect.left,rect.top))[1])
      print('First Offset' + str(str(firstOffset)))
  elif (event.type) == (pygame.MOUSEBUTTONUP):
    print('Stop Dragging')
    dragging = False
  elif (event.type) == (pygame.MOUSEMOTION):
    mousePosition = pygame.mouse.get_pos()
    if dragging:
      offset = (mousePosition[0]-((rect.left,rect.top))[0],mousePosition[1]-((rect.left,rect.top))[1])
      offset = (offset[0]-firstOffset[0],offset[1]-firstOffset[1])
      print('offset' + str(str(offset)))
      rect = rect.move (offset[0],offset[1])
      pygame.draw.rect(surface,0Xcc0000,rect)
      pygame.display.update()
