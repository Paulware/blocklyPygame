image = None
angle = None
rotated_image = None
startTime = None
surface = None
elapsedTime = None
degree = None
img = None

# Describe this function...
def rotate(image, angle):
  global rotated_image, startTime, surface, elapsedTime, degree, img
  w, h       = image.get_size()
  originPos  = (w//2,h//2)
  box        = [pygame.math.Vector2(p) for p in [(0, 0), (w, 0), (w, -h), (0, -h)]]
  box_rotate = [p.rotate(angle) for p in box]
  min_box    = (min(box_rotate, key=lambda p: p[0])[0], min(box_rotate, key=lambda p: p[1])[1])
  max_box    = (max(box_rotate, key=lambda p: p[0])[0], max(box_rotate, key=lambda p: p[1])[1])
  pivot        = pygame.math.Vector2(originPos[0], -originPos[1])
  pivot_rotate = pivot.rotate(angle)
  pivot_move   = pivot_rotate - pivot
  rotated_image = pygame.transform.rotate(image, angle)
  return rotated_image


import pygame
import time
import threading
pygame.init()
pygame.display.set_caption('Rotate Image Application')
startTime = time.time()
surface = pygame.display.set_mode ((600,600), (pygame.RESIZABLE))
elapsedTime = 0
image = pygame.image.load ('vangogh.jpg').convert()
surface.blit(image,(10,10))
pygame.display.update()
degree = 0
while elapsedTime < 10:
  degree = degree + 30
  elapsedTime = time.time() - startTime
  img = rotate(image, degree)
  surface.blit(img,(10,10))
  pygame.display.update()
  threading.Event().wait (1)
