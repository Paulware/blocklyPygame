import pygame
import sys

class Slider ():
   def setValue (self, value): 
      pygame.draw.rect(self.screen,self.screenColor,(self.x,self.y,self.width,self.height))
      pygame.draw.rect(self.screen,self.sliderColor,(self.x,self.y+self.height/2-self.sliderBarHeight/2,self.width,self.sliderBarHeight))
      pygame.draw.rect(self.screen,self.buttonColor,(self.x+value*((self.width-self.buttonWidth)/self.maxValue),self.y,self.buttonWidth,self.height))
      if self.buttonBorderThickness != 0:
         pygame.draw.rect(self.screen,(0,0,0),(self.x+value*((self.width-self.buttonWidth)/self.maxValue),self.y,self.buttonWidth,self.height),self.buttonBorderThickness)
      if self.sliderBorderThickness != 0:
         pygame.draw.rect(self.screen,(0,0,0),(self.x,self.y+self.height/2-sliderBarHeight/2,self.width,self.sliderBarHeight),self.sliderBorderThickness)
      pygame.display.update(pygame.Rect(self.x,self.y,self.width,self.height))
      self.sliderValue = value
      print ( value ) 

   def __init__ (self, x,y,width,height):   
      sx = x
      sy = y
      self.x = x
      self.y = y
      self.screen = pygame.display.get_surface() 
      self.width = width
      self.height = height 
      self.buttonColor = (255,255,255)
      self.sliderColor = (220,220,220)
      self.screenColor = (255,255,255)
      self.buttonBorderThickness = 1
      self.sliderBorderThickness = 0
      self.buttonWidth = 25
      self.sliderBarHeight = 10
      self.maxValue = 100
      
      self.setValue (50) 
      
   def update (self):
      mouse = pygame.mouse.get_pos()
      click = pygame.mouse.get_pressed()      
      if (mouse[0] > self.x) and (mouse[0] < self.x+self.width) and (mouse[1] > self.y) and (mouse[1] < self.y+self.height):
         if click[0] == 1: # mouse is held down 
            mouseX = mouse[0] - 5
            if mouseX < self.x:
               mouseX = self.x
            elif mouseX > self.x+self.width-self.buttonWidth:
               mouseX = self.x+self.width-self.buttonWidth
               
            sliderValue = (mouseX-self.x)/((self.width-self.buttonWidth)/self.maxValue)
            self.setValue(sliderValue)
            
   def getValue (self): 
      return self.sliderValue 
      
if __name__ == '__main__':
   pygame.init()
   screen = pygame.display.set_mode((800, 600))
   screen.fill((255,255,255))
   pygame.display.update(pygame.Rect(0,0,800,600))
   
   slider1 = Slider ( 100, 50, 600, 50 )
   slider2 = Slider ( 100, 120, 600, 50) 
   while True:
       for event in pygame.event.get():
           if event.type == pygame.QUIT:
               pygame.quit()
               sys.exit()
           elif event.type == pygame.KEYDOWN:
               if event.key == pygame.K_ESCAPE:
                   pygame.quit()
                   sys.exit()
       
       slider1.update() 
       slider2.update()       
