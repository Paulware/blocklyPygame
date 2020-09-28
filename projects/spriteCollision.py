import pygame
import time
import threading
import math
pygame.init()

surface = None
playerHit = None
obs = None
hitList = None
obstacleList = None
playerImage = None
asteroid1 = None
frameTime = None

# Describe this function...
def playerWasHit():
  global surface, playerHit, obs, hitList, obstacleList, playerImage, asteroid1, frameTime
  playerHit = False
  hitList = pygame.sprite.spritecollide(playerImage,obstacleList,False)
  if len(hitList) > 0:
    playerImage.kill()
    surface.fill (0Xffffff)
    _text = pygame.font.Font('freesansbold.ttf',26).render ('Asteroid Collision Detected',True,pygame.Color('#000099'))
    _rect = _text.get_rect()
    _rect.x = 100
    _rect.y = 100
    surface.blit (_text,_rect)
    pygame.display.update()
    pygame.mixer.Sound('bangLarge.wav').play()
    threading.Event().wait (3)
    playerHit = True
  return playerHit

# Describe this function...
def drawAsteroids():
  global surface, playerHit, obs, hitList, obstacleList, playerImage, asteroid1, frameTime
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


surface = pygame.display.set_mode ((800,600), pygame.RESIZABLE)
pygame.display.set_caption('Sprite Collision')
playerImage = pygame.sprite.Sprite()
playerImage.image = (pygame.image.load ('ship.jpg').convert())
playerImage.baseImage = playerImage.image
playerImage.rect = (playerImage.image.get_rect())
playerImage.rect.left = 0
playerImage.rect.top = 0
playerImage.newX = 0
playerImage.deltaAngle = 0
playerImage.deltaX = 0
playerImage.deltaY = 0
playerImage.rotation = 0
playerImage.rectOffset = (0,0)
playerImage.newY = 0
playerImage.newX =((0,300))[0]
playerImage.newY  =((0,300))[1]
playerImage.rect.left =((0,300))[0]
playerImage.rect.top  =((0,300))[1]
asteroid1 = pygame.sprite.Sprite()
asteroid1.image = (pygame.image.load ('asteroidSmall.png').convert())
asteroid1.baseImage = asteroid1.image
asteroid1.rect = (asteroid1.image.get_rect())
asteroid1.rect.left = 0
asteroid1.rect.top = 0
asteroid1.newX = 0
asteroid1.deltaAngle = 0
asteroid1.deltaX = 0
asteroid1.deltaY = 0
asteroid1.rotation = 0
asteroid1.rectOffset = (0,0)
asteroid1.newY = 0
asteroid1.rotation = 0
# Set rotation to 0.5 yo
asteroid1.deltaAngle = 0.5
asteroid1.newX =((200,10))[0]
asteroid1.newY  =((200,10))[1]
asteroid1.rect.left =((200,10))[0]
asteroid1.rect.top  =((200,10))[1]
asteroid1.newX = asteroid1.rect.left
asteroid1.newY = asteroid1.rect.top
asteroid1.deltaX = (-0.5)
asteroid1.deltaY = 0.5
obstacleList = pygame.sprite.Group()
obstacleList.add(asteroid1)
while not ((pygame.event.poll()).type) == (pygame.QUIT):
  if (time.time()) > frameTime:
    surface.fill (0Xffffff)
    frameTime = (time.time()) + 0.01
    if playerWasHit():
      break
    else:
      drawAsteroids()
      if not hasattr (playerImage, 'rectOffset'):
         playerImage.rectOffset = (0,0)
      playerImage.rect.left = playerImage.rect.left + playerImage.rectOffset[0]
      playerImage.rect.top = playerImage.rect.top + playerImage.rectOffset[1]
      surface.blit (playerImage.image, (playerImage.rect.left,playerImage.rect.top ))
      playerImage.rect.left = playerImage.rect.left - playerImage.rectOffset[0]
      playerImage.rect.top = playerImage.rect.top - playerImage.rectOffset[1]
    pygame.display.update()
