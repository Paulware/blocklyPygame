import pygame
wPressed = None
aPressed = None
sPressed = None
dPressed = None
def movePlayer(event, sprite):
  global wPressed, aPressed, sPressed, dPressed
  if (event.type) == (pygame.KEYDOWN):
    ch = chr(event.key)
    if ch == 'w':
      wPressed = True
    if ch == 'a':
      aPressed = True
    if ch == 's':
      sPressed = True
    if ch == 'd':
      dPressed = True
    if wPressed:
      sprite.rect.y=((sprite.rect.y) - 10)
    if aPressed:
      sprite.rect.x=((sprite.rect.x) - 10)
    if sPressed:
      sprite.rect.y=((sprite.rect.y) + 10)
    if dPressed:
      sprite.rect.x=((sprite.rect.x) + 10)
  elif (event.type) == (pygame.KEYUP):
    ch = chr(event.key)
    if ch == 'w':
      wPressed = False
    if ch == 'a':
      aPressed = False
    if ch == 's':
      sPressed = False
    if ch == 'd':
      dPressed = False
