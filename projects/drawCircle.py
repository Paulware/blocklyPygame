surface = None


import pygame
import time
import threading
pygame.init()
pygame.display.set_caption('Line Circle Application')
surface = pygame.display.set_mode ((400,200), (pygame.RESIZABLE))
pygame.draw.circle(surface,0Xffff00,((100,100)),50)
pygame.display.update()
threading.Event().wait (5)
