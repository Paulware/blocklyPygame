import pygame

def movePlayer(sprite, pressedKeys):
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