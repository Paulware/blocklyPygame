import math

surface = None
obstacle = None
rect = None
playerImage = None
cannonBallImage = None
image = None
img = None
cannonBall = None
drawList = None
obstacleList = None
cannonBallMoveTime = None
event = None
mousePosition = None
position = None
degree = None
hitList = None


import time
import math
import pygame
pygame.init()
from movePlayer import *
pygame.display.set_caption('Blasteroids')
surface = pygame.display.set_mode ((800,600), )
obstacle = pygame.sprite.Sprite()
obstacle.image=(pygame.Surface([((100,100))[0],((100,100))[1]]))
(obstacle.image).fill(pygame.Color('#33cc00'));
rect = pygame.Rect(((200,10)),(((300,110))[0]-((200,10))[0],((300,110))[1]-((200,10))[1]))
obstacle.rect=rect
playerImage = pygame.sprite.Sprite()
cannonBallImage = pygame.sprite.Sprite()
image = pygame.image.load ('ship.jpg').convert()
img = pygame.image.load ('ship.jpg').convert()
cannonBall = pygame.image.load ('cannonBall.jpg').convert()
playerImage.image=img
playerImage.rect=(img.get_rect())
playerImage.image=cannonBall
cannonBallImage.rect=(cannonBall.get_rect())
cannonBallImage.image=cannonBall
cannonBallImage.deltaX=0
cannonBallImage.deltaY=0
drawList = pygame.sprite.Group()
obstacleList = pygame.sprite.Group()
drawList.add(playerImage)
drawList.add(obstacle)
obstacleList.add(obstacle)
cannonBallMoveTime = time.time()
while True:
  event = pygame.event.poll()
  if (event.type) == (pygame.QUIT):
    break
  elif (event.type) == (pygame.KEYDOWN) or (event.type) == (pygame.KEYUP):
    if (event.type) == (pygame.KEYDOWN) and (chr(event.key)) == ' ':
      cannonBallImage.deltaX=(math.cos(degree / 180.0 * math.pi) * 10)
      cannonBallImage.deltaY=(math.sin((degree + 180) / 180.0 * math.pi) * 10)
      cannonBallImage.rect.y=(playerImage.rect.center[1])
      cannonBallImage.rect.x=(playerImage.rect.center[0])
      drawList.add(cannonBallImage)
      print("deltaX: " + str(cannonBallImage.deltaX))
      print("deltaY: " + str(cannonBallImage.deltaY))
    else:
      movePlayer(event,playerImage)
      surface.fill (0Xffffff)
      pygame.display.update()
      drawList.draw(surface)
      pygame.display.update()
      hitList = pygame.sprite.spritecollide(playerImage,obstacleList,False)
      if len(hitList) > 0:
        print('We got a collision')
        break
  elif (event.type) == (pygame.MOUSEMOTION):
    mousePosition = pygame.mouse.get_pos()
    position = (playerImage.rect).center
    degree = math.degrees(math.atan2(-(mousePosition[1] - position[1]),mousePosition[0]-position[0]) % (2*math.pi))
    playerImage.image=(pygame.transform.rotate(image,degree))
    drawList.draw(surface)
    pygame.display.update()
  elif (time.time() - cannonBallMoveTime) > 0.01:
    cannonBallMoveTime = time.time()
    cannonBallImage.rect.x=((cannonBallImage.rect.x) + (cannonBallImage.deltaX))
    cannonBallImage.rect.y=((cannonBallImage.rect.y) + (cannonBallImage.deltaY))
    drawList.draw(surface)
    pygame.display.update()
from movePlayer import *
