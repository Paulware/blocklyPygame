surface = None
ch = None


import pygame
pygame.init()
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
surface = pygame.display.set_mode ((123,123), (pygame.RESIZABLE))
while ch != 'q':
  ch = get_key()
  print('got key:' + str(ch))
