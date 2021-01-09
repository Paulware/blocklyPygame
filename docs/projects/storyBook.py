import pygame
import time
import threading
pygame.init()

surface = None
image = None


pygame.display.set_caption('Mario and Luigi Story')
surface = pygame.display.set_mode ((800,600), pygame.RESIZABLE)
image = pygame.image.load ('marioLuigi.png').convert()
surface.blit (image,(((300,300))[0]-image.get_size()[0]//2,((300,300))[1]-image.get_size()[1]//2))
pygame.display.update()
_quitEvent = False
while not _quitEvent:
   for event in (pygame.event.get()):
      if (event.type) == (pygame.MOUSEBUTTONDOWN):
         _quitEvent = True
         break
surface.fill (0X000000)
pygame.display.update()
_text = pygame.font.Font('freesansbold.ttf',24).render ('Plumber brothers Mario and Luigi from Brooklyn',True,pygame.Color('#33ffff'))
_rect = _text.get_rect()
_rect.x = 10
_rect.y = 10
surface.blit (_text,_rect)
pygame.display.update()
image = pygame.image.load ('brooklyn.jpg').convert()
surface.blit (image,(((300,300))[0]-image.get_size()[0]//2,((300,300))[1]-image.get_size()[1]//2))
pygame.display.update()
_quitEvent = False
while not _quitEvent:
   for event in (pygame.event.get()):
      if (event.type) == (pygame.MOUSEBUTTONDOWN):
         _quitEvent = True
         break
surface.fill (0X000000)
pygame.display.update()
_text = pygame.font.Font('freesansbold.ttf',24).render ('have just arrived in an outlandish realm ',True,pygame.Color('#33ffff'))
_rect = _text.get_rect()
_rect.x = 10
_rect.y = 10
surface.blit (_text,_rect)
pygame.display.update()
_text = pygame.font.Font('freesansbold.ttf',24).render ('called the Mushroom Kingdom',True,pygame.Color('#33ffff'))
_rect = _text.get_rect()
_rect.x = 10
_rect.y = 35
surface.blit (_text,_rect)
pygame.display.update()
image = pygame.image.load ('mushroomKingdom.png').convert()
surface.blit (image,(((300,350))[0]-image.get_size()[0]//2,((300,350))[1]-image.get_size()[1]//2))
pygame.display.update()
_quitEvent = False
while not _quitEvent:
   for event in (pygame.event.get()):
      if (event.type) == (pygame.MOUSEBUTTONDOWN):
         _quitEvent = True
         break
surface.fill (0X000000)
pygame.display.update()
_text = pygame.font.Font('freesansbold.ttf',24).render ('To save princess Peach',True,pygame.Color('#33ffff'))
_rect = _text.get_rect()
_rect.x = 10
_rect.y = 10
surface.blit (_text,_rect)
pygame.display.update()
image = pygame.image.load ('princessPeach.jpg').convert()
surface.blit (image,(((300,400))[0]-image.get_size()[0]//2,((300,400))[1]-image.get_size()[1]//2))
pygame.display.update()
_quitEvent = False
while not _quitEvent:
   for event in (pygame.event.get()):
      if (event.type) == (pygame.MOUSEBUTTONDOWN):
         _quitEvent = True
         break
surface.fill (0X000000)
pygame.display.update()
_text = pygame.font.Font('freesansbold.ttf',24).render ('But Bowser had other ideas',True,pygame.Color('#33ffff'))
_rect = _text.get_rect()
_rect.x = 10
_rect.y = 10
surface.blit (_text,_rect)
pygame.display.update()
image = pygame.image.load ('bowser.png').convert()
surface.blit (image,(((300,400))[0]-image.get_size()[0]//2,((300,400))[1]-image.get_size()[1]//2))
pygame.display.update()
_quitEvent = False
while not _quitEvent:
   for event in (pygame.event.get()):
      if (event.type) == (pygame.MOUSEBUTTONDOWN):
         _quitEvent = True
         break
surface.fill (0X000000)
pygame.display.update()
image = pygame.image.load ('toBeContinued.jpg').convert()
surface.blit (image,(((300,350))[0]-image.get_size()[0]//2,((300,350))[1]-image.get_size()[1]//2))
pygame.display.update()
_quitEvent = False
while not _quitEvent:
   for event in (pygame.event.get()):
      if (event.type) == (pygame.MOUSEBUTTONDOWN):
         _quitEvent = True
         break
