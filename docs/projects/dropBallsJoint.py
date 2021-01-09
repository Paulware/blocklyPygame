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

space = None
surface = None
rotation_limit_body = None
clock = None
rotation_center_body = None
balls = None
body = None
drawOptions = None
ticks_to_next_ball = None
l1 = None
event = None
l2 = None
rotation_center_joint = None
rotation_limit_joint = None
ball_shape = None

# Describe this function...
def addSegmentsAndJoints(space):
  global surface, rotation_limit_body, clock, rotation_center_body, balls, body, drawOptions, ticks_to_next_ball, l1, event, l2, rotation_center_joint, rotation_limit_joint, ball_shape
  rotation_limit_body=pymunk.Body(body_type=(pymunk.Body.STATIC))
  rotation_limit_body.position=((200,300))
  rotation_center_body=pymunk.Body(body_type=(pymunk.Body.STATIC))
  rotation_center_body.position=((300,300))
  body=pymunk.Body(10,10000)
  body.position=((300,300))
  space.add (body)
  l1=pymunk.Segment(body,(((-150),0)),((255,0)),5)
  space.add (l1)
  l2=pymunk.Segment(body,(((-150),0)),(((-150),50)),5)
  space.add (l2)
  rotation_center_joint=pymunk.PinJoint(body,rotation_center_body, (0,0), (0,0))
  space.add (rotation_center_joint)
  rotation_limit_joint = pymunk.SlideJoint(body,rotation_limit_body,(((-100),0)),((0,0)),0,25)

  space.add (rotation_limit_joint)

# Describe this function...
def add_ball(space):
  global surface, rotation_limit_body, clock, rotation_center_body, balls, body, drawOptions, ticks_to_next_ball, l1, event, l2, rotation_center_joint, rotation_limit_joint, ball_shape
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
pygame.display.set_caption('Drop Balls on Line Segments and Joints')
clock= pygame.time.Clock()
space=pymunk.Space()
space.gravity=((0,(-999)))
addSegmentsAndJoints(space)
balls = []
drawOptions = pymunk.pygame_util.DrawOptions(surface)
ticks_to_next_ball = 10
while True:
  event = pygame.event.poll()
  if (event.type) == (pygame.QUIT):
    break
  ticks_to_next_ball = ticks_to_next_ball - 1
  if ticks_to_next_ball == 0:
    ticks_to_next_ball = 10
    ball_shape = add_ball(space)
    balls.append (ball_shape)
  space.step(0.02)
  surface.fill (0Xffffff)
  space.debug_draw(drawOptions)
  pygame.display.update()
  clock.tick(40)
