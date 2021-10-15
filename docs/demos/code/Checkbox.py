import pygame
from pygame.locals import *

class Checkbox():

   def draw (self): 
      pygame.draw.rect(self.screen, self.color, self.checkboxRect)
      if self.checked:
         pygame.draw.line ( self.screen, (75,75,75), (self.crossRect.left,self.crossRect.top), (self.crossRect.right, self.crossRect.bottom)) 
         pygame.draw.line ( self.screen, (75,75,75), (self.crossRect.left,self.crossRect.bottom), (self.crossRect.right, self.crossRect.top)) 
      self.screen.blit(self.textDisp, self.textRect)      
   
   def __init__(self, x, y, text, checked = False):
      self.screen = pygame.display.get_surface()
      self.checked = checked
      self.text = text
      self.active = False 
      self.color_active  = pygame.Color ('lightskyblue3')
      self.color_passive = pygame.Color ('chartreuse4') 
      self.color = self.color_passive
      
      self.checkboxRect = pygame.Rect(x, y, 15, 15)
      self.input_rect = self.checkboxRect
      self.crossRect = pygame.Rect(x + 2, y + 2, 11, 11)

      if pygame.font:
         font = pygame.font.Font(None, 22)
         self.textDisp = font.render(self.text, 1, (75, 75, 75))

      self.textRect = self.textDisp.get_rect(x = x + 25, centery = y + 9)
      self.draw()
    
   def check(self): 
      self.checked = True 
      self.draw () 
      
   def uncheck(self):
      self.checked = False 
      self.draw()
    
   def update(self, event):
      self.released = False # released is only True for 1 frame 
        
      if event.type == pygame.MOUSEMOTION:
         mouse_position = pygame.mouse.get_pos() 
         
         if self.input_rect.collidepoint(mouse_position):      
            if not self.active: 
               self.active = True                
               self.color = self.color_active
               self.draw()
               
         elif self.active: 
            self.color = self.color_passive
            gotUpdate = True 
            self.active = False
            self.draw()
            
      elif event.type == pygame.MOUSEBUTTONDOWN: 
         if self.active:
            self.clicked = True 

      elif event.type == pygame.MOUSEBUTTONUP:
         if self.active: 
            if self.clicked: 
               self.released = True
               self.checked = not self.checked
               self.draw()
            self.clicked = False   
            
   '''
   def onCheckbox(self, (x, y)):
      if x >= self.getX() and x <= (self.getX() + 25 + self.textRect.w) and y >= self.getY() and y <= (self.getY() + 15):
         return True
      else:
         return False

   def changeState(self):
      if self.isChecked():
         self.uncheck()
      else:
         self.check()

   def isChecked(self):
      return self.checked

   def check(self):
      self.checked = True

   def uncheck(self):
      self.checked = False

   def getX(self):
      return self.checkboxRect.x

   def getY(self):
      return self.checkboxRect.y
   '''