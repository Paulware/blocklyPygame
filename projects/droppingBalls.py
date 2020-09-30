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
clock = None
balls = None
drawOptions = None
ticks_to_next_ball = None
event = None
ball_shape = None

# Describe this function...
def add_ball(space):
  global surface, clock, balls, drawOptions, ticks_to_next_ball, event, ball_shape
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
