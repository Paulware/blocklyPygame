import pygame
import time
import threading
import math
pygame.init()

screen = None
message = None
question = None
boxX = None
response = None
surface = None
boxY = None
answer = None
boxText = None
ch = None
boxRect = None

# Describe this function...
def display_box(screen, message):
  global question, boxX, response, surface, boxY, answer, boxText, ch, boxRect
  boxX = (surface.get_width()) / 2 - 102
  boxY = (surface.get_height()) / 2 - 12
  if len(message) > 0:
    boxText = pygame.font.Font('freesansbold.ttf',12).render (message,True,pygame.Color('#3366ff'))
    boxRect = boxText.get_rect()
    boxRect = boxRect.move (((boxX,boxY))[0],((boxX,boxY))[1])
    pygame.draw.rect(surface,0Xffff66,(boxRect.inflate (((50,0))[0],((50,0))[1])))
    pygame.display.update()
    surface.blit (boxText,boxRect)
    pygame.display.update()

# Describe this function...
def ask(screen, question):
  global message, boxX, response, surface, boxY, answer, boxText, ch, boxRect
  response = ''
  while ch != (chr(pygame.K_RETURN)):
    display_box(surface, str(question) + str(response))
    ch = get_key()
    print('got key:' + str(ch))
    if ch == (chr(pygame.K_BACKSPACE)):
      response = response[ : -1]
      print('Got a backspace yo')
    else:
      response = str(response) + str(ch)
  return response


def get_key():
   src  = r"`1234567890-=qwertyuiop[]\asdfghjkl;'zxcvbnm,./"
   dest = r'~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?'
   while 1:
      try:
         event = pygame.event.poll()
         if event.type == pygame.KEYDOWN:
            _ch = chr(event.key)
            if ord(_ch) != 304:
               pressed = pygame.key.get_pressed()
               if pressed[pygame.K_RSHIFT] or pressed[pygame.K_LSHIFT] and _ch in src:
                  _ch = dest[src.index(_ch)]
               break
      except Exception as ex:
         pass
   return _ch
surface = pygame.display.set_mode ((423,333), pygame.RESIZABLE)
answer = ask(surface, 'What is up yo?')
print('Answer:' + str(answer))
