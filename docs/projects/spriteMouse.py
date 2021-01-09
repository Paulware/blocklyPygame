surface = None
obstacle = None
rect = None
playerImage = None
image = None
drawList = None
obstacleList = None
event = None
hitList = None


import pygame
pygame.init()
pygame.display.set_caption('Sprite Application')
surface = pygame.display.set_mode ((800,600), (pygame.RESIZABLE))
obstacle = pygame.sprite.Sprite()
obstacle.image=(pygame.Surface([((100,100))[0],((100,100))[1]]))
(obstacle.image).fill(pygame.Color('#33cc00'));
rect = pygame.Rect(((200,10)),(((300,110))[0]-((200,10))[0],((300,110))[1]-((200,10))[1]))
obstacle.rect=rect
playerImage = pygame.sprite.Sprite()
image = pygame.image.load ('cannon.jpg').convert()
playerImage.image=image
playerImage.rect=(image.get_rect())
drawList = pygame.sprite.Group()
obstacleList = pygame.sprite.Group()
drawList.add(playerImage)
drawList.add(obstacle)
obstacleList.add(obstacle)
from movePlayer import *
while True:
  event = pygame.event.poll()
  if (event.type) == (pygame.QUIT):
    break
  elif (event.type) == (pygame.KEYDOWN) or (event.type) == (pygame.KEYUP):
    movePlayer(event,playerImage)
  drawList.draw(surface)
  pygame.display.update()
  hitList = pygame.sprite.spritecollide(playerImage,obstacleList,False)
  if len(hitList) > 0:
    print('We got a collision')
    break
