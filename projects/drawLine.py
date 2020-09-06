surface = None


import pygame
import time
import threading
pygame.init()
pygame.display.set_caption('Line Draw Application')
surface = pygame.display.set_mode ((400,200), (pygame.RESIZABLE))
pygame.draw.line (surface,0X3366ff,((10,10)),((100,100)))
pygame.display.update()
threading.Event().wait (5)
