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
import math

space = None
_position = None
_p = None
body = None
_x = None
bodies = None
_y = None
surface = None
shape = None
clock = None
color = None
mouse_body = None
moment = None
newX = None
event = None
position = None
point = None
p = None
hit = None
selected = None
c = None
rest_length = None
pv1 = None
ball = None
ds = None
pv2 = None
fps = None
p1 = None
iterations = None
p2 = None
dt = None
pj = None

# Describe this function...
def reset_bodies(space):
  global _position, _p, body, _x, bodies, _y, surface, shape, clock, color, mouse_body, moment, newX, event, position, point, p, hit, selected, c, rest_length, pv1, ball, ds, pv2, fps, p1, iterations, p2, dt, pj
  for body in (space.bodies):
    body.position=(pymunk.Vec2d((body.start_position)))
    body.force=((0,0))
    body.torque=0
    body.velocity=((0,0))
    body.angular_velocity=0
  color = random.choice(list(pygame.color.THECOLORS.values()))
  for shape in (space.shapes):
    shape.color=color

# Describe this function...
def to_pygame(_position):
  global space, _p, body, _x, bodies, _y, surface, shape, clock, color, mouse_body, moment, newX, event, position, point, p, hit, selected, c, rest_length, pv1, ball, ds, pv2, fps, p1, iterations, p2, dt, pj
  _x = int((_position.x))
  _y = int((600 - (_position.y)))
  _position = (_x,_y)
  return _position

# Describe this function...
def from_pygame(_p):
  global space, _position, body, _x, bodies, _y, surface, shape, clock, color, mouse_body, moment, newX, event, position, point, p, hit, selected, c, rest_length, pv1, ball, ds, pv2, fps, p1, iterations, p2, dt, pj
  return to_pygame(_p)


import random
bodies = []
surface = pygame.display.set_mode((600,600),pygame.RESIZABLE)
clock= pygame.time.Clock()
space=pymunk.Space()
space.gravity=((0,(-1900)))
space.damping=0.999
mouse_body=pymunk.Body(body_type=(pymunk.Body.KINEMATIC))
for _x in range(-100, 151, 50):
  moment = pymunk.moment_for_circle(10,0,25,(0,0))
  body=pymunk.Body(10,moment)
  newX = _x + 300
  position = (newX,(-125 + 300))
  body.position=position
  body.start_position =(pymunk.Vec2d((body.position)))
  shape = pymunk.Circle(body,25)
  shape.elasticity =0.9999999
  space.add (body)
  space.add (shape)
  bodies.append (body)
  pj=pymunk.PinJoint((space.static_body),body,((newX,(125 + 300))),((0,0)))
  space.add (pj)
reset_bodies(space)
while True:
  event = pygame.event.poll()
  if (event.type) == (pygame.QUIT):
    break
  elif (event.type) == (pygame.MOUSEBUTTONDOWN):
    point = from_pygame(pymunk.Vec2d((pygame.mouse.get_pos())))
    hit = space.point_query_nearest(point,0,pymunk.ShapeFilter())
    if not (hit is None):
      shape = hit.shape
      rest_length = (mouse_body.position).get_distance(((shape.body).position))
      ds = pymunk.DampedSpring(mouse_body,(shape.body),((0,0)),((0,0)),rest_length,10000,10)

      space.add (ds)
      selected = ds
  elif (event.type) == (pygame.MOUSEBUTTONUP):
    if not (selected is None):
      space.remove (selected)
      selected = None
  p = from_pygame(pymunk.Vec2d((pygame.mouse.get_pos())))
  mouse_body.position=p
  surface.fill (0X000000)
  for c in (space.constraints):
    pv1 = (c.a.position) + (c.anchor_a)
    pv2 = (c.b.position) + (c.anchor_b)
    p1 = to_pygame(pv1)
    p2 = to_pygame(pv2)
    pygame.draw.aalines(surface, pygame.color.THECOLORS["lightgray"], False, [p1,p2])
  for ball in (space.shapes):
    p = to_pygame(ball.body.position)
    pygame.draw.circle(surface,(ball.color),p,(math.floor(ball.radius)),1)
    pygame.display.update()
  fps = 50
  iterations = 25
  dt = 1 / (float(fps))
  dt = dt / (float(iterations))
  for count in range(int(iterations)):
    space.step(dt)
  pygame.display.update()
  clock.tick(fps)
