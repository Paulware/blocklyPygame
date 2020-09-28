import pygame
import time
import threading
import math
pygame.init()

pressedKeys = None
sprite = None
ch = None
event = None
wPressed = None
aPressed = None
sPressed = None
dPressed = None

# Describe this function...
def movePlayerSprite(pressedKeys, sprite):
  global ch, event, wPressed, aPressed, sPressed, dPressed
  if pressedKeys is None:
    pressedKeys = [False, False, False, False]
  if pressedKeys[0]:
    sprite.rect.y=((sprite.rect.y) - 10)
  if pressedKeys[1]:
    sprite.rect.x=((sprite.rect.x) - 10)
  if pressedKeys[2]:
    sprite.rect.y=((sprite.rect.y) + 10)
  if pressedKeys[3]:
    sprite.rect.x=((sprite.rect.x) + 10)
