import pygame
class Button ():
   def __init__ (self, rect, value):
      self.screen = pygame.display.get_surface()
      self.user_text = value   
      self.color_active  = pygame.Color ('lightskyblue3')
      self.color_passive = pygame.Color ('chartreuse4') 
      self.color = self.color_passive
      self.rect = rect 
      self.active = False
      self.first = True 
      self.base_font = pygame.font.Font(None, 32)
      self.clicked = False
      self.released = False

   def update(self,event): 
      self.released = False # released is only True for 1 frame 
         
      gotUpdate = False    
      if event.type == pygame.MOUSEMOTION:
         mouse_position = pygame.mouse.get_pos() 
         
         if self.rect.collidepoint(mouse_position):      
            if not self.active: 
               self.active = True 
               gotUpdate = True 
               self.color = self.color_active
         elif self.active: 
            self.color = self.color_passive
            gotUpdate = True 
            self.active = False
            
      elif event.type == pygame.MOUSEBUTTONDOWN: 
         if self.active:
            self.clicked = True 

      elif event.type == pygame.MOUSEBUTTONUP:
         if self.active: 
            if self.clicked: 
               self.released = True 
            self.clicked = False 
            
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
         pygame.draw.rect(self.screen, self.color, self.rect)
         

         text_surface = self.base_font.render(self.user_text, True, (255, 255, 255))
         
         # render at position stated in arguments
         self.screen.blit(text_surface, (self.rect.x+5, self.rect.y+5))
         
         # set width of textfield so that text cannot get
         # outside of user's text input
         #self.rect.w = max(100, text_surface.get_width()+10)
         pygame.draw.rect(self.screen, (0,0,0), self.rect, width=2) 
         
   