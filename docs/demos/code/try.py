# C:\Users\Paul Richards\MPLABXProjects\repos\labjack\classInput.py
# import sys module
import pygame
import sys
import InputBox
import Label
import Button
import Modbus
import Checkbox 

def pause():
   ch = input ( 'Press enter to continue' )
   
def showInfo(): 
   global lastRxFreq
   global lastTxFreq
   rxFreq = modbus.addressToFloat ( RXADDRESS )
   rxBox.setValue (rxFreq)
   lastRxFreq = rxFreq # No update 
   txFreq = modbus.addressToFloat ( TXADDRESS )
   txBox.setValue (txFreq)
   lastTxFreq = txFreq # No update 
   amFm   = modbus.addressToFloat ( AMFMADDRESS )
   print ( 'Current frequencies: [tx,rx]: [' + str (txFreq) +  ',' + str (rxFreq) + ']' )
   print ( 'AM/FM: ' + str(amFm) )
   if amFm == 0.0: 
      checkbox.check()
   else:  
      checkbox.uncheck()

TXADDRESS        = 46000
RXADDRESS        = 46002
AMFMADDRESS      = 46004
XMTRKEYEDADDRESS = 46006
IPADDRESS = '172.17.100.178'

# pygame.init() will initialize all
# imported module
pygame.init()
clock = pygame.time.Clock()

# it will display on screen
screen = pygame.display.set_mode([600, 500])
pygame.display.set_caption ( 'Set Frequency and Mode' )

programIcon = pygame.image.load('rficon.png')
pygame.display.set_icon(programIcon)

screen.fill((255, 255, 255)) # Change background from black to white

infoLabel = Label.Label (pygame.Rect (10,100,240,32), 'Labjack IP Address' )
connect1Button = Button.Button (pygame.Rect (40, 135, 250,32), 'Connect 172.17.100.178')
connect2Button = Button.Button (pygame.Rect (40, 170, 250,32), 'Connect 192.168.1.207')

# Receive Frequency 
rxLabel  = Label.Label (pygame.Rect (10,250,160,32), 'Rx Frequency' )
rxBox    = InputBox.InputBox (pygame.Rect (200,250,140,32), '123.45' )
rxButton = Button.Button (pygame.Rect (340, 250, 100,32), 'Send')

# Transmit Frequency 
Label.Label (pygame.Rect (10,285,160,32), 'Tx Frequency' )
txBox    = InputBox.InputBox (pygame.Rect (200,285,140,32), '234.56' )
txButton = Button.Button (pygame.Rect (340, 285, 100,32), 'Send')
modbus = Modbus.Modbus ()

statusLabel = Label.Label (pygame.Rect (10,465,240,32), 'Labjack not connected' )

checkbox = Checkbox.Checkbox (50, 50, 'AM', False )

xmtrBox  = Checkbox.Checkbox (150, 50, 'Xmtr Keyed', False )

while True: 
   events = pygame.event.get()   
   for event in events:
      # Rx Frequency 
      rxBox.update(event)
      rxButton.update(event)  
      if rxButton.released:       
         if modbus.connected:
            modbus.floatToAddress (rxBox.asFloat(), RXADDRESS )
            print ( 'Rx Button was released' )
         else:
            print ( 'modbus is not connected' )
         
      txBox.update(event)
      txButton.update(event)
      if txButton.released:
         if modbus.connected:       
            modbus.floatToAddress (txBox.asFloat(), TXADDRESS )
            print ( 'Tx Button was released' )
         else:
            print ( 'modbus is not connected' ) 
         
      connect1Button.update(event)
      connect2Button.update(event)      
         
      if connect1Button.released: 
         modbus.connect ( '172.17.100.178' )
         if modbus.connected: 
            statusLabel.setValue ( 'Labjack connected at 172.17.100.178' ) 
            showInfo()
         
      if connect2Button.released: 
         modbus.connect ( '192.168.1.207' )
         if modbus.connected: 
            statusLabel.setValue ( 'Labjack connected at 192.168.1.207' ) 
            showInfo()
         
      # if user types QUIT then the screen will close
      if event.type == pygame.QUIT:
         pygame.quit()
         sys.exit()
         
      checkbox.update(event)
      if checkbox.released: 
         if checkbox.checked: 
            modbus.floatToAddress (0.0, AMFMADDRESS)
         else: 
            modbus.floatToAddress (1.0, AMFMADDRESS)
         print ( 'The checkbox has been clicked and .checked = ' + str(checkbox.checked) ) 
         
      xmtrBox.update(event)
      if xmtrBox.released: 
         if xmtrBox.checked:
            modbus.floatToAddress (1.0, XMTRKEYEDADDRESS)
         else:
            modbus.floatToAddress (0.0, XMTRKEYEDADDRESS)

   if len(events) > 0:    
      pygame.display.update()  
      
   # clock.tick(60) means that for every second at most
   # 60 frames should be passed.
   clock.tick(60)
   