surface = None
event = None
quit2 = None


import pygame
pygame.init()
import pygame
import math
import time
import threading
from math import atan2, degrees, pi
surface = pygame.display.set_mode ((600,400), (pygame.RESIZABLE))
while not quit2:
  for event in (pygame.event.get()):
    if (event.type) == (pygame.MOUSEBUTTONDOWN):
      pygame.mixer.Sound('doorTrek.wav').play()
    elif (event.type) == (pygame.QUIT):
      quit2 = True
