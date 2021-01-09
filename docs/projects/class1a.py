text = None
rect = None
surface = None


import pygame
pygame.init()
import threading
pygame.display.set_caption('Something cool')
text = pygame.font.Font('freesansbold.ttf',32).render ('Hello BCC',True,pygame.Color('#339999'))
rect = text.get_rect()
rect.center = (100,100)
surface = pygame.display.set_mode ((600,400), (pygame.RESIZABLE))
surface.blit (text,rect)
pygame.display.update()
threading.Event().wait (15)
