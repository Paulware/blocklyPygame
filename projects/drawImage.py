surface = None
image = None


import pygame
import time
import threading
pygame.init()
pygame.display.set_caption('Van Gogh self portrait')
surface = pygame.display.set_mode ((600,600), (pygame.RESIZABLE))
image = pygame.image.load ('vangogh.jpg').convert()
surface.blit(image,(10,10))
pygame.display.update()
threading.Event().wait (10)
