import pygame
class Label ():
   def __init__ (self, rect, value):
      self.screen = pygame.display.get_surface()      
      self.user_text = value   
      self.color_passive = pygame.Color ('chartreuse4') 
      self.color = self.color_passive
      self.input_rect = rect 
      self.base_font = pygame.font.Font(None, 32)
      self.draw()

   def draw(self):                   
      # draw rectangle and argument passed which should
      # be on screen
      pygame.draw.rect(self.screen, self.color, self.input_rect)         

      text_surface = self.base_font.render(self.user_text, True, (255, 255, 255))
      
      # render at position stated in arguments
      self.screen.blit(text_surface, (self.input_rect.x+5, self.input_rect.y+5))
      
      # set width of textfield so that text cannot get
      # outside of user's text input
      #self.input_rect.w = max(100, text_surface.get_width()+10)
   
   
   def setValue (self, message):
      self.user_text = message
      text_surface = self.base_font.render(self.user_text, True, (255, 255, 255))
      self.input_rect.w = max(100, text_surface.get_width()+10)
      self.draw()