import pygame
import time
import threading
import math
try:
   import pymunk
   import pymunk.pygame_util
except:
   pass
pygame.init()
import random

point1 = None
point2 = None
width = None
space = None
surface = None
lineSegment = None
body = None
clock = None
l1 = None
l2 = None
balls = None
drawOptions = None
ticks_to_next_ball = None
event = None
ball_shape = None

# Describe this function...
def add_static_l(point1, point2, width, space):
  global surface, lineSegment, body, clock, l1, l2, balls, drawOptions, ticks_to_next_ball, event, ball_shape
  body=pymunk.Body(body_type=(pymunk.Body.STATIC))
  body.position=((300,300))
  lineSegment=pymunk.Segment(body,point1,point2,width)
  space.add (lineSegment)
  return lineSegment

# Describe this function...
def add_ball(space):
  global point1, point2, width, surface, lineSegment, body, clock, l1, l2, balls, drawOptions, ticks_to_next_ball, event, ball_shape
  mass = 1
  radius = 14
  _x=(((random.randint(120, 380)),550))[0]
  _y=(((random.randint(120, 380)),550))[1]
  moment = pymunk.moment_for_circle(mass,0,14)
  body = pymunk.Body(mass,moment)
  body.position = _x,_y
  shape = pymunk.Circle(body,14)
  space.add(body,shape)
  return space


surface = pygame.display.set_mode((600,600),pygame.RESIZABLE)
pygame.display.set_caption('Dropping Balls')
clock= pygame.time.Clock()
space=pymunk.Space()
space.gravity=((0,(-999)))
l1 = add_static_l(((-150),0), (255,0), 5, space)
l2 = add_static_l(((-150),0), ((-150),50), 5, space)
balls = []
drawOptions = pymunk.pygame_util.DrawOptions(surface)
ticks_to_next_ball = 10
while True:
  event = pygame.event.poll()
  if (event.type) == (pygame.QUIT):
    break
  ticks_to_next_ball = ticks_to_next_ball - 1
  if ticks_to_next_ball == 0:
    ticks_to_next_ball = 25
    ball_shape = add_ball(space)
    balls.append (ball_shape)
  space.step(0.02)
  surface.fill (0Xffffff)
  space.debug_draw(drawOptions)
  pygame.display.update()
  clock.tick(40)
