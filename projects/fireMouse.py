elapsedTime = None
quit2 = None
event = None
startTime = None
ballFired = None
moveBallTime = None
surface = None
cannonBallPosition = None
mousePosition = None
img = None
degree = None
image = None
cannonBall = None

# Describe this function...
def initialize():
  global elapsedTime, quit2, event, startTime, ballFired, moveBallTime, surface, cannonBallPosition, mousePosition, img, degree, image, cannonBall
  import pygame
  import math
  import time
  import threading
  from math import atan2, degrees, pi
  import pygame
  pygame.init()
  pygame.display.set_caption('Rotate Image pointed at Mouse and fire on key down')
  startTime = time.time()
  moveBallTime = time.time()
  surface = pygame.display.set_mode ((300,300), (pygame.RESIZABLE))
  elapsedTime = 0
  image = pygame.image.load ('cannon.jpg').convert()
  cannonBall = pygame.image.load ('cannonBall.jpg').convert()
  degree = 0
  ballFired = False
  quit2 = False

# Describe this function...
def moveBall():
  global elapsedTime, quit2, event, startTime, ballFired, moveBallTime, surface, cannonBallPosition, mousePosition, img, degree, image, cannonBall
  import pygame
  import math
  import time
  import threading
  from math import atan2, degrees, pi
  if (time.time() - moveBallTime) > 0.05:
    if ballFired:
      surface.fill (0Xffffff)
      pygame.display.update()
      cannonBallPosition = (cannonBallPosition[0]+(10*math.cos(((degree/180.0*3.1415927)))),cannonBallPosition[1]-(10*math.sin(((degree/180.0*3.1415927)))))
      moveBallTime = time.time()
      img = pygame.transform.rotate(image,degree)
      surface.blit (img,(((100,100))[0]-img.get_size()[0]//2,((100,100))[1]-img.get_size()[1]//2))
      pygame.display.update()
      surface.blit (cannonBall,(cannonBallPosition[0]-cannonBall.get_size()[0]//2,cannonBallPosition[1]-cannonBall.get_size()[1]//2))
      pygame.display.update()


initialize()
import pygame
import math
import time
import threading
from math import atan2, degrees, pi
while not quit2:
  elapsedTime = time.time() - startTime
  for event in (pygame.event.get()):
    if (event.type) == (pygame.MOUSEMOTION):
      mousePosition = pygame.mouse.get_pos()
      img = pygame.transform.rotate(image,degree)
      degree = math.degrees(math.atan2(-(mousePosition[1] - ((100,100))[1]),mousePosition[0]-((100,100))[0]) % (2*math.pi))
      surface.blit (img,(((100,100))[0]-img.get_size()[0]//2,((100,100))[1]-img.get_size()[1]//2))
      pygame.display.update()
    elif (event.type) == (pygame.KEYUP):
      cannonBallPosition = (100,100)
      moveBallTime = time.time()
      ballFired = True
    elif (event.type) == (pygame.QUIT):
      quit2 = True
  moveBall()
