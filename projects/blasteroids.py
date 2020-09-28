import pygame
import time
import threading
import math
pygame.init()
import math

surface = None
quitDetected = None
playerHit = None
obs = None
event = None
obstacleList = None
cannonBallImage = None
hitList = None
hit = None
pressedKeys = None
mousePosition = None
frameTime = None
playerImage = None
position = None
asteroid1 = None
degree = None
asteroid2 = None

# Describe this function...
def init():
  global surface, quitDetected, playerHit, obs, event, obstacleList, cannonBallImage, hitList, hit, pressedKeys, mousePosition, frameTime, playerImage, position, asteroid1, degree, asteroid2
  surface = pygame.display.set_mode ((800,600), pygame.RESIZABLE)
  pygame.display.set_caption('Blasteroids')
  cannonBallImage = pygame.sprite.Sprite()
  cannonBallImage.image = (pygame.image.load ('cannonBall.jpg').convert())
  cannonBallImage.baseImage = cannonBallImage.image
  cannonBallImage.rect = (cannonBallImage.image.get_rect())
  cannonBallImage.rect.left = 0
  cannonBallImage.rect.top = 0
  cannonBallImage.newX = 0
  cannonBallImage.deltaAngle = 0
  cannonBallImage.deltaX = 0
  cannonBallImage.deltaY = 0
  cannonBallImage.rotation = 0
  cannonBallImage.rectOffset = (0,0)
  cannonBallImage.newY = 0
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
  asteroid2 = pygame.sprite.Sprite()
  asteroid2.image = (pygame.image.load ('asteroidSmall.png').convert())
  asteroid2.baseImage = asteroid2.image
  asteroid2.rect = (asteroid2.image.get_rect())
  asteroid2.rect.left = 0
  asteroid2.rect.top = 0
  asteroid2.newX = 0
  asteroid2.deltaAngle = 0
  asteroid2.deltaX = 0
  asteroid2.deltaY = 0
  asteroid2.rotation = 0
  asteroid2.rectOffset = (0,0)
  asteroid2.newY = 0
  asteroid2.rotation = 0
  # Set rotation to 0.5 yo
  asteroid2.deltaAngle = 0.5
  asteroid2.newX =((400,50))[0]
  asteroid2.newY  =((400,50))[1]
  asteroid2.rect.left =((400,50))[0]
  asteroid2.rect.top  =((400,50))[1]
  asteroid2.newX = asteroid2.rect.left
  asteroid2.newY = asteroid2.rect.top
  asteroid2.deltaX = 0.5
  asteroid2.deltaY = (-0.5)
  obstacleList = pygame.sprite.Group()
  obstacleList.add(asteroid1)
  obstacleList.add(asteroid2)

# Describe this function...
def quitEventDetected():
  global surface, quitDetected, playerHit, obs, event, obstacleList, cannonBallImage, hitList, hit, pressedKeys, mousePosition, frameTime, playerImage, position, asteroid1, degree, asteroid2
  quitDetected = False
  event = pygame.event.poll()
  if (event.type) == (pygame.QUIT):
    quitDetected = True
  elif (event.type) == (pygame.KEYDOWN) or (event.type) == (pygame.KEYUP):
    pressedKeys = handleKey(event,pressedKeys)
    if (event.type) == (pygame.KEYDOWN) and (chr(event.key)) == ' ':
      pygame.mixer.Sound('fire.wav').play()
      cannonBallImage.newX =(playerImage.rect.center)[0]
      cannonBallImage.newY  =(playerImage.rect.center)[1]
      cannonBallImage.rect.left =(playerImage.rect.center)[0]
      cannonBallImage.rect.top  =(playerImage.rect.center)[1]
      cannonBallImage.newX = cannonBallImage.rect.left
      cannonBallImage.newY = cannonBallImage.rect.top
      cannonBallImage.deltaX = (math.cos(degree / 180.0 * math.pi) * 10)
      cannonBallImage.deltaY = (math.sin((degree + 180) / 180.0 * math.pi) * 10)
  elif (event.type) == (pygame.MOUSEMOTION):
    mousePosition = pygame.mouse.get_pos()
    position = (playerImage.rect).center
    degree = math.degrees(math.atan2(-(mousePosition[1] - position[1]),mousePosition[0]-position[0]) % (2*math.pi))
    playerImage.image      = pygame.transform.rotate (playerImage.baseImage,degree)
    playerImage.rectOffset = playerImage.image.get_rect(center=playerImage.baseImage.get_rect().center)
  return quitDetected

# Describe this function...
def playerWasHit():
  global surface, quitDetected, playerHit, obs, event, obstacleList, cannonBallImage, hitList, hit, pressedKeys, mousePosition, frameTime, playerImage, position, asteroid1, degree, asteroid2
  playerHit = False
  movePlayerSprite(pressedKeys,playerImage)
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
  global surface, quitDetected, playerHit, obs, event, obstacleList, cannonBallImage, hitList, hit, pressedKeys, mousePosition, frameTime, playerImage, position, asteroid1, degree, asteroid2
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
    obs.rotation = obs.rotation + obs.deltaAngle
    obs.image      = pygame.transform.rotate (obs.baseImage,obs.rotation)
    obs.rectOffset = obs.image.get_rect(center=obs.baseImage.get_rect().center)
    obs.rect.left = obs.rect.left + obs.rectOffset[0]
    obs.rect.top = obs.rect.top + obs.rectOffset[1]
    surface.blit (obs.image, (obs.rect.left,obs.rect.top ))
    obs.rect.left = obs.rect.left - obs.rectOffset[0]
    obs.rect.top = obs.rect.top - obs.rectOffset[1]

# Describe this function...
def drawCannonBall():
  global surface, quitDetected, playerHit, obs, event, obstacleList, cannonBallImage, hitList, hit, pressedKeys, mousePosition, frameTime, playerImage, position, asteroid1, degree, asteroid2
  cannonBallImage.rotation = cannonBallImage.rotation + cannonBallImage.deltaAngle
  cannonBallImage.image      = pygame.transform.rotate (cannonBallImage.baseImage,cannonBallImage.rotation)
  cannonBallImage.rectOffset = cannonBallImage.image.get_rect(center=cannonBallImage.baseImage.get_rect().center)
  cannonBallImage.newX = cannonBallImage.newX + cannonBallImage.deltaX
  cannonBallImage.newY = cannonBallImage.newY + cannonBallImage.deltaY
  cannonBallImage.rect.left = cannonBallImage.newX
  cannonBallImage.rect.top = cannonBallImage.newY
  if not hasattr (cannonBallImage, 'rectOffset'):
     cannonBallImage.rectOffset = (0,0)
  cannonBallImage.rect.left = cannonBallImage.rect.left + cannonBallImage.rectOffset[0]
  cannonBallImage.rect.top = cannonBallImage.rect.top + cannonBallImage.rectOffset[1]
  surface.blit (cannonBallImage.image, (cannonBallImage.rect.left,cannonBallImage.rect.top ))
  cannonBallImage.rect.left = cannonBallImage.rect.left - cannonBallImage.rectOffset[0]
  cannonBallImage.rect.top = cannonBallImage.rect.top - cannonBallImage.rectOffset[1]
  hitList = pygame.sprite.spritecollide(cannonBallImage,obstacleList,False)
  for hit in hitList:
    hit.kill()
    pygame.mixer.Sound('bangLarge.wav').play()
  if len(obstacleList) == 0:
    _text = pygame.font.Font('freesansbold.ttf',26).render ('Level Cleared',True,pygame.Color('#000099'))
    _rect = _text.get_rect()
    _rect.x = 100
    _rect.y = 100
    surface.blit (_text,_rect)
    pygame.display.update()
    threading.Event().wait (3)


from movePlayerSprite import *
from handleKey import *
init()
pressedKeys = [False, False, False, False]
frameTime = time.time()
while not quitEventDetected():
  if (time.time()) > frameTime:
    surface.fill (0Xffffff)
    frameTime = (time.time()) + 0.01
    if playerWasHit():
      break
    else:
      drawAsteroids()
      drawCannonBall()
      if len(obstacleList) == 0:
        break
      if not hasattr (playerImage, 'rectOffset'):
         playerImage.rectOffset = (0,0)
      playerImage.rect.left = playerImage.rect.left + playerImage.rectOffset[0]
      playerImage.rect.top = playerImage.rect.top + playerImage.rectOffset[1]
      surface.blit (playerImage.image, (playerImage.rect.left,playerImage.rect.top ))
      playerImage.rect.left = playerImage.rect.left - playerImage.rectOffset[0]
      playerImage.rect.top = playerImage.rect.top - playerImage.rectOffset[1]
    pygame.display.update()
