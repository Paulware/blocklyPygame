sprite = None
degree = None
speed = None
surface = None
lastMoveTime = None
cannonBallPosition = None

# Describe this function...
def moveCannonBall(sprite, degree, speed, surface, lastMoveTime):
  global cannonBallPosition
  import time
  if (time.time() - lastMoveTime) > 0.05:
    cannonBallPosition = (sprite.get_rect()).center
    sprite = (cannonBallPosition[0]+(10*math.cos(((degree/180.0*3.1415927)))),cannonBallPosition[1]-(10*math.sin(((degree/180.0*3.1415927)))))
    sprite.image=(pygame.transform.rotate((sprite.image),degree))
    surface.blit (sprite,(cannonBallPosition[0]-sprite.get_size()[0]//2,cannonBallPosition[1]-sprite.get_size()[1]//2))
    pygame.display.update()
