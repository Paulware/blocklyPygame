surface = None
obstacle = None
rect = None
playerImage = None
image = None
drawList = None
obstacleList = None
event = None
ch = None
hitList = None


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
pygame.display.set_caption('Sprite Application')
surface = pygame.display.set_mode ((800,600), (pygame.RESIZABLE))
obstacle = pygame.sprite.Sprite()
obstacle.image=(pygame.Surface([((100,100))[0],((100,100))[1]]))
(obstacle.image).fill(pygame.Color('#33cc00'));
rect = pygame.Rect(((200,10)),(((300,110))[0]-((200,10))[0],((300,110))[1]-((200,10))[1]))
obstacle.rect=rect
playerImage = pygame.sprite.Sprite()
image = pygame.image.load ('cannon.jpg').convert()
playerImage.image=image
playerImage.rect=(image.get_rect())
drawList = pygame.sprite.Group()
obstacleList = pygame.sprite.Group()
drawList.add(playerImage)
drawList.add(obstacle)
obstacleList.add(obstacle)
while True:
  event = pygame.event.poll()
  if (event.type) == (pygame.QUIT):
    break
  elif (event.type) == (pygame.KEYDOWN):
    ch = get_key()
    if ch == 'd':
      playerImage.rect.x=((playerImage.rect.x) + 10)
  drawList.draw(surface)
  pygame.display.update()
  hitList = pygame.sprite.spritecollide(playerImage,obstacleList,False)
  if len(hitList) > 0:
    print('We got a collision')
    break
