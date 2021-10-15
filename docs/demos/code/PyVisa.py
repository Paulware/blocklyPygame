import time
import pygame 

import pyvisa
class PyVisa (): 
   def __init__ (self):   
      self.rm = pyvisa.ResourceManager()
      self.rm.list_resources()   
      self.MINDB = -20
       
   def connect (self, id): 
      try: 
         self.device = self.rm.open_resource (id)
         self.device.query ( '*IDN?')
      except Exception as ex:
         print ( 'PyVisa.connect could not connect to : ' + id + ' because: ' + str(ex)) 
   
   def getPeak (self): 
      return self.device.query ( ':CALC:MARK:X?' )
   
   def centerPeak(self, frequency):   
      self.device.write ( ':SENS:FREQ:CENT ' + str(frequency) + 'e6')
      self.device.write ( ':SENS:FREQ:SPAN 100e3' )
      time.sleep (.3)
      self.device.write ( ':CALC:MARK:PEAK:THR' )
      time.sleep (.3)
      self.device.write ( ':CALC:MARK:MAX' )
      time.sleep (.3)
  
   # Set the amplitude and frequency of the current signal   
   def setSpectrum (self, frequency): 
      global spectrumAnalyzer

      self.centerPeak(frequency)   
      peak = self.device.query (':CALC:MARK:X?')  # Get the frequency of the signal 
      dbs  = self.device.query (':CALC:MARK1:Y?') # Get the amplitude of the signal
      if float(dbs) > self.MINDB: 
         print ( 'Got a peak of: ' +  peak + ' with amplitude: ' + dbs )
      else:
         print ( 'Got a peak of: ' +  peak + ' with amplitude: ' + dbs + '  *** TOO LOW! ***' )

   # print frequency and return it to just 2 decimal places.
   def printFrequency (self, frequency): 
      format_float = "{:.2f}".format(frequency)
      print ( '\n***Frequency: ' + format_float ) 
      return float (format_float) 
        
if __name__ == '__main__':
   pyv = PyVisa () 
   id = 'USB0::2391::65519::CN0163000759::0::INSTR'   
   pyv.connect (id) 
   screen = pygame.display.set_mode((800, 600))
   screen.fill((255,255,255))
   pygame.display.update(pygame.Rect(0,0,800,600))
   frequency = pyv.getPeak () 
   pyv.setSpectrum(frequency)
   
   while True:
       for event in pygame.event.get():
           if event.type == pygame.QUIT:
               pygame.quit()
               sys.exit()
       
