import pygame
import time
import threading
import math
try:
   import pymunk
   import pymunk.pygame_util
except:
   pass
import os
os.chdir (os.path.dirname(os.path.abspath(__file__)))
pygame.init()

surface = None
image = None


surface = pygame.display.set_mode((600,600),pygame.RESIZABLE)
image = pygame.image.load ('vangogh.jpg').convert()
surface.blit (image,(((300,300))[0]-image.get_size()[0]//2,((300,300))[1]-image.get_size()[1]//2))
pygame.display.update()
