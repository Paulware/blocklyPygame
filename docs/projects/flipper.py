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

screen = None
clock = None
space = None
draw_options = None
balls = None
bdy = None
static_lines = None
line = None
fp = None
mass = None
moment = None
r_flipper_body = None
r_flipper_shape = None
r_flipper_joint_body = None
j = None
s = None
l_flipper_body = None
l_flipper_shape = None
l_flipper_joint_body = None
event = None
ch = None
unit = None
inertia = None
dt = None
body = None
x = None
shape = None


screen = pygame.display.set_mode((600,600),pygame.RESIZABLE)
clock= pygame.time.Clock()
space=pymunk.Space()
space.gravity=((0,(-900)))
draw_options = pymunk.pygame_util.DrawOptions(screen)
balls = []
bdy = space.static_body
static_lines = [pymunk.Segment(bdy,((150,100)),((50,550)),1)
, pymunk.Segment(bdy,((450,100)),((550,550)),1)
, pymunk.Segment(bdy,((50,550)),((300,600)),1)
, pymunk.Segment(bdy,((300,600)),((550,550)),1)
, pymunk.Segment(bdy,((300,420)),((400,400)),1)
]
for line in static_lines:
  line.elasticity=0.7
  line.group=1
space.add (static_lines)
fp = [(20,(-20)), ((-120),0), (20,20)]
mass = 100
moment = pymunk.moment_for_poly(mass,fp)
# Create the right flipper
r_flipper_body=pymunk.Body(mass,moment)
r_flipper_body.position=((450,100))
r_flipper_shape = pymunk.Poly(r_flipper_body,fp)
space.add (r_flipper_body)
space.add (r_flipper_shape)
r_flipper_joint_body=pymunk.Body(body_type=(pymunk.Body.KINEMATIC))
r_flipper_joint_body.position=(r_flipper_body.position)
j=pymunk.PinJoint(r_flipper_body,r_flipper_joint_body,((0,0)),((0,0)))
s = pymunk.DampedRotarySpring(r_flipper_body,r_flipper_joint_body,0.15,20000000,900000)

space.add (j)
space.add (s)
r_flipper_shape.elasticity=0
# Create left flipper
l_flipper_body=pymunk.Body(mass,moment)
l_flipper_body.position=((150,100))
fp = [((-20),(-20)), (120,0), ((-20),20)]
l_flipper_shape = pymunk.Poly(l_flipper_body,fp)
space.add (l_flipper_body)
space.add (l_flipper_shape)
l_flipper_joint_body=pymunk.Body(body_type=(pymunk.Body.KINEMATIC))
l_flipper_joint_body.position=(l_flipper_body.position)
j=pymunk.PinJoint(l_flipper_body,l_flipper_joint_body,((0,0)),((0,0)))
s = pymunk.DampedRotarySpring(l_flipper_body,l_flipper_joint_body,(-0.15),20000000,900000)

space.add (j)
space.add (s)
l_flipper_shape.elasticity=0
while True:
  event = pygame.event.poll()
  if (event.type) == (pygame.QUIT):
    break
  elif (event.type) == (pygame.KEYDOWN):
    ch = chr(event.key)
    if ch == 'j':
      unit = pymunk.Vec2d.unit()
      r_flipper_body.apply_impulse_at_local_point ((unit * 40000),(((-100),0)))
    elif ch == 'f':
      unit = pymunk.Vec2d.unit()
      l_flipper_body.apply_impulse_at_local_point ((unit * -40000),(((-100),0)))
    elif ch == 'b':
      inertia = pymunk.moment_for_circle(1,0,25,(0,0))
      body=pymunk.Body(1,inertia)
      x = random.randint(350, 450)
      body.position=((x,400))
      shape = pymunk.Circle(body,25)
      shape.elasticity=0.95
      space.add (body)
      space.add (shape)
      balls.append (shape)
  screen.fill (0Xffffff)
  space.debug_draw(draw_options)
  dt = 1 / 60
  dt = dt / 5
  for count in range(5):
    space.step(dt)
  pygame.display.update()
  clock.tick(50)
