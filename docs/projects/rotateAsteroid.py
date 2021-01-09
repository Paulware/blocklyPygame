import pygame
import time
import threading
import math
pygame.init()

surface = None
obstacle = None
obstacleList = None
frameTime = None
event = None
obs = None


pygame.display.set_caption('Rotate and move Asteroid')
surface = pygame.display.set_mode ((800,600), pygame.RESIZABLE)
obstacle = pygame.sprite.Sprite()
obstacle.rotation = 0
obstacle.deltaAngle = 0.5
obstacle.image=(pygame.image.load ('asteroidSmall.png').convert())
obstacle.baseImage=(pygame.image.load ('asteroidSmall.png').convert())
obstacle.rect=(pygame.image.load ('asteroidSmall.png').convert()).get_rect()
obstacle.newX =((200,10))[0]
obstacle.newY  =((200,10))[1]
obstacle.rect.left =((200,10))[0]
obstacle.rect.top  =((200,10))[1]
obstacle.newX = obstacle.rect.left
obstacle.newY = obstacle.rect.top
obstacle.deltaX = (-0.5)
obstacle.deltaY = 0.5
obstacleList = pygame.sprite.Group()
obstacleList.add(obstacle)
frameTime = time.time()
while True:
  event = pygame.event.poll()
  if (event.type) == (pygame.QUIT):
    break
  if (time.time()) > frameTime:
    frameTime = (time.time()) + 0.01
    surface.fill (0Xffffff)
    for obs in obstacleList:
      obs.rotation = obs.rotation + obs.deltaAngle
      obs.image      = pygame.transform.rotate (obs.baseImage,obs.rotation)
      obs.rectOffset = obs.image.get_rect(center=obs.baseImage.get_rect().center)
      obs.newX = obs.newX + obs.deltaX
      obs.newY = obs.newY + obs.deltaY
      obs.rect.left = obs.newX
      obs.rect.top = obs.newY
      if not hasattr (obs, 'rectOffset'):
         obs.rectOffset = (0,0)
      obs.rect.left = obs.rect.left + obs.rectOffset[0]
      obs.rect.top = obs.rect.top + obs.rectOffset[1]
      surface.blit (obs.image, (obs.rect.left,obs.rect.top ))
      obs.rect.left = obs.rect.left - obs.rectOffset[0]
      obs.rect.top = obs.rect.top - obs.rectOffset[1]
      if (obs.rect.left) < 0:
        obs.newX=(surface.get_width())
      elif (obs.rect.left) > (surface.get_width()):
        obs.newX=0
      elif (obs.rect.top) > (surface.get_height()):
        obs.newY=0
      elif (obs.rect.top) < 0:
        obs.newY=(surface.get_height())
    pygame.display.update()
