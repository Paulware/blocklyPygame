import pygame
class InputBox ():
   def __init__ (self, rect, value):
      self.screen = pygame.display.get_surface()      
      self.user_text = value   
      self.color_active  = pygame.Color ('lightskyblue3')
      self.color_passive = pygame.Color ('chartreuse4') 
      self.color = self.color_passive
      self.input_rect = rect 
      self.active = False
      self.first = True 
      self.base_font = pygame.font.Font(None, 32)
      
   def setValue (self,value):
      self.user_text = str(value)
      pygame.draw.rect(self.screen, self.color, self.input_rect)               
      text_surface = self.base_font.render(self.user_text, True, (255, 255, 255))
      self.screen.blit(text_surface, (self.input_rect.x+5, self.input_rect.y+5))
      self.input_rect.w = max(100, text_surface.get_width()+10)
            
   def isFloat (self):
      canConvert = True 
      try: 
         value = float (self.user_text) 
      except Exception as ex:
         print ( 'isFloat cannot convert because: ' + str(ex)) 
         canConvert = False 
      return canConvert 
      
   def asFloat (self): 
      value = 0.0 
      try: 
         value = float (self.user_text)
         print ( 'Inputbox.asFloat got value: ' + str(value)) 
      except Exception as ex:
         print ( 'Could not determine float value from : ' + self.user_text) 
         
      return value
      
   def update(self,event): 
         
      gotUpdate = False    
      if event.type == pygame.MOUSEMOTION:
         mouse_position = pygame.mouse.get_pos() 
         
         if self.input_rect.collidepoint(mouse_position):      
            if not self.active: 
               self.active = True 
               gotUpdate = True 
               self.color = self.color_active
         elif self.active: 
            self.color = self.color_passive
            gotUpdate = True 
            self.active = False
            
      elif (event.type == pygame.KEYDOWN) and self.active:
         if event.key == pygame.K_BACKSPACE:
            # get text input from 0 to -1 i.e. end.
            self.user_text = self.user_text[:-1]
            gotUpdate = True 
         # Unicode standard is used for string
         # formation
         else:
            self.user_text += event.unicode
            gotUpdate = True 
      
      if gotUpdate or self.first:
         self.first = False      
         # draw rectangle and argument passed which should
         # be on screen
         pygame.draw.rect(self.screen, self.color, self.input_rect)
         

         text_surface = self.base_font.render(self.user_text, True, (255, 255, 255))
         
         # render at position stated in arguments
         self.screen.blit(text_surface, (self.input_rect.x+5, self.input_rect.y+5))
         
         # set width of textfield so that text cannot get
         # outside of user's text input
         self.input_rect.w = max(100, text_surface.get_width()+10)
         
   