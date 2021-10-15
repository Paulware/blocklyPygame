import pygame
import sys
pygame.init()
screen = pygame.display.set_mode((800, 600))
# screen = pygame.display.set_mode((0, 0), pygame.FULLSCREEN)
screenColor = (255,255,255)
screen.fill(screenColor)
pygame.display.update(pygame.Rect(0,0,800,600))

def slider(sx,sy,action,width,height,buttonColor,sliderColor,buttonBorderThickness,sliderBorderThickness,buttonWidth,sliderBarHeight,maxValue):
    if mouse[0] > sx and mouse[0] < sx+width and mouse[1] > sy and mouse[1] < sy+height:
        if click[0] == 1:
            mouseX = mouse[0] - 5
            if mouseX < sx:
                mouseX = sx
            elif mouseX > sx+width-buttonWidth:
                mouseX = sx+width-buttonWidth
            pygame.draw.rect(screen,screenColor,(sx,sy,width,height))
            pygame.draw.rect(screen,sliderColor,(sx,sy+height/2-sliderBarHeight/2,width,sliderBarHeight))
            pygame.draw.rect(screen,buttonColor,(mouseX,sy,buttonWidth,height))
            if buttonBorderThickness != 0:
                pygame.draw.rect(screen,(0,0,0),(mouseX,sy,buttonWidth,height),buttonBorderThickness)
            if sliderBorderThickness != 0:
                pygame.draw.rect(screen,(0,0,0),(sx,sy+height/2-sliderBarHeight/2,width,sliderBarHeight),sliderBorderThickness)
            pygame.display.update(pygame.Rect(sx,sy,width,height))
            
            if action == "test1":
                sliderValue = (mouseX-sx)/((width-buttonWidth)/maxValue)
                print("test1:")
                print(sliderValue)
            elif action == "test2":
                sliderValue = (mouseX-sx)/((width-buttonWidth)/maxValue)
                print("test2:")
                print(sliderValue)

def sliderInit(sx,sy,width,height,buttonColor,sliderColor,buttonBorderThickness,sliderBorderThickness,buttonWidth,sliderBarHeight,maxValue,startValue):
        pygame.draw.rect(screen,screenColor,(sx,sy,width,height))
        pygame.draw.rect(screen,sliderColor,(sx,sy+height/2-sliderBarHeight/2,width,sliderBarHeight))
        pygame.draw.rect(screen,buttonColor,(sx+startValue*((width-buttonWidth)/maxValue),sy,buttonWidth,height))
        if buttonBorderThickness != 0:
            pygame.draw.rect(screen,(0,0,0),(sx+startValue*((width-buttonWidth)/maxValue),sy,buttonWidth,height),buttonBorderThickness)
        if sliderBorderThickness != 0:
            pygame.draw.rect(screen,(0,0,0),(sx,sy+height/2-sliderBarHeight/2,width,sliderBarHeight),sliderBorderThickness)
        pygame.display.update(pygame.Rect(sx,sy,width,height))

firstLoop = True

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_ESCAPE:
                pygame.quit()
                sys.exit()
    mouse = pygame.mouse.get_pos()
    click = pygame.mouse.get_pressed()
    
    if firstLoop == True:
        sliderInit(100,50,600,50,(255,255,255),(220,220,220),1,0,25,10,100,50)
        sliderInit(100,120,600,50,(255,255,255),(220,220,220),1,0,25,10,100,50)
        firstLoop = False
    
    slider(100,50,"test1",600,50,(255,255,255),(220,220,220),1,0,25,10,100)
    slider(100,120,"test2",600,50,(255,255,255),(220,220,220),1,0,25,10,100)