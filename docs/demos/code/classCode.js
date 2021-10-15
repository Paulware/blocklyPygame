function classInputbox () {
   return `
class Inputbox ():
   def __init__ (self, position, width):
      self.input_rect = pygame.Rect ( position[0], position[1], width, 35 ) 
      self.screen = pygame.display.get_surface()      
      self.user_text = ''   
      self.color_active  = pygame.Color ('lightskyblue3')
      self.color_passive = pygame.Color ('chartreuse4') 
      self.color = self.color_passive
      self.active = False
      self.first = True 
      self.base_font = pygame.font.Font(None, 32)
      
   def writeValue (self,value):
      self.user_text = str(value)
      pygame.draw.rect(self.screen, self.color, self.input_rect)               
      text_surface = self.base_font.render(self.user_text, True, (255, 255, 255))
      self.screen.blit(text_surface, (self.input_rect.x+5, self.input_rect.y+5))
      self.input_rect.w = max(100, text_surface.get_width()+10)

   def readFloat (self):
      if self.isFloat (): 
         val = float (self.user_text)
      else:
         print ( 'This value cannot be converted to floating point: ' + self.user_text )
         val = -1.0
         
      return val
            
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
         
   
`;
} 

function classLabel () {
 return `
 
class Label ():
   def __init__ (self, position, width, value):
      self.input_rect = pygame.Rect ( position [0], position [1], width, 35)
      self.screen = pygame.display.get_surface()      
      self.user_text = value   
      self.color_passive = pygame.Color ('chartreuse4') 
      self.color = self.color_passive
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
`
} 

function classButton() {
 return `
 
class Button ():
   def __init__ (self, position, width, value):
      self.screen = pygame.display.get_surface()
      self.user_text = value   
      self.color_active  = pygame.Color ('lightskyblue3')
      self.color_passive = pygame.Color ('chartreuse4') 
      self.color = self.color_passive
      self.rect = pygame.Rect ( position[0], position [1], width, 35)
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

`
 
}

function classCheckbox () {
 return `
class Checkbox():

   def draw (self): 
      pygame.draw.rect(self.screen, self.color, self.checkboxRect)
      if self.checked:
         pygame.draw.line ( self.screen, (75,75,75), (self.crossRect.left,self.crossRect.top), (self.crossRect.right, self.crossRect.bottom)) 
         pygame.draw.line ( self.screen, (75,75,75), (self.crossRect.left,self.crossRect.bottom), (self.crossRect.right, self.crossRect.top)) 
   
   def __init__(self, position):
      self.screen = pygame.display.get_surface()
      self.checked = False
      self.active = False 
      self.color_active  = pygame.Color ('lightskyblue3')
      self.color_passive = pygame.Color ('chartreuse4') 
      self.color = self.color_passive
      x = position[0]
      y = position[1]      
      self.checkboxRect = pygame.Rect(x, y, 15, 15)
      self.input_rect = self.checkboxRect
      self.crossRect = pygame.Rect(x + 2, y + 2, 11, 11)
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
 
`
}

function modbusClass () {
 return `
 
import struct
try: 
   from pymodbus.client.sync import ModbusTcpClient
except Exception as ex:
   print ( 'You will need to pip install pymodbus' )
   time.sleep (10) 
   exit()
   
class Modbus():

   def concatData(self,data):
      tVal = 0
      upper = True
      for reg in data:
         if upper:
            tVal = ((reg & 0xFFFF) << 16)
            upper = False
         else:
            tVal = tVal | (reg & 0xFFFF)
            upper = True
      return tVal

   def data_to_float32(self,data):
      return struct.unpack("=f", struct.pack("=I", self.concatData(data)))[0]

   def float2int(self, num):
      return struct.unpack("=i", struct.pack("=f", num))[0]

   def float32_to_data(self,num):
    intNum = self.float2int(num)
    data = [0, 0]
    data[0] = (intNum >> 16) & 0xFFFF
    data[1] = intNum & 0xFFFF
    return data


   def connect (self, ipAddress):
      print ( 'connect modbus to : ' + ipAddress )   
      isConnected = True 
      try: 
         self.client = ModbusTcpClient(ipAddress) # Labjack Ip address, displayed in Kipling, Network Settings
         rq = self.client.write_registers(46006, self.float32_to_data(0))
         self.connected = True 
      except Exception as ex:
         isConnected = False 
         self.connected = False 
         print ( 'Modbus.connect err: ' + str(ex) ) 
      return isConnected   

   def __init__ (self, ipAddress = None): 
      self.connected = False   
      if ipAddress != None: 
         if self.connect (ipAddress): 
            print ( 'Successfully connected to : ' + ipAddress)
            self.connected = True 
         else: 
            print ( 'Could not connect to : ' + ipAddress ) 
            self.connected = False
         
   def readFloatAddress (self, address): 
      rr = self.client.read_input_registers(address, 2)
      value = self.data_to_float32 (rr.registers)
      print ( 'readFloatAddress (' + str(address) + ')=' + str(value) ) 
      return value
        
   def writeFloatAddress (self, value, address): 
      rq = self.client.write_registers(address, self.float32_to_data(float(value)))
      print("Read back value %s" % self.readFloatAddress (address))
      
   def close(self):
      self.client.close()
      
      
`
}

function radioButtonClass() {
   return `
   
   class RadioButton:
    def __init__(self, surface, x, y, idnum, color=(230, 230, 230),
        caption="", outline_color=(0, 0, 0), check_color=(0, 0, 0),
        font_size=22, font_color=(0, 0, 0), 
    text_offset=(28, 1), font='Ariel Black'):
        self.surface = surface
        self.x = x
        self.y = y
        self.color = color
        self.caption = caption
        self.oc = outline_color
        self.cc = check_color
        self.fs = font_size
        self.fc = font_color
        self.to = text_offset
        self.ft = font

        #identification for removal and reorginazation
        self.idnum = idnum

        # checkbox object
        self.checkbox_obj = pygame.Rect(self.x, self.y, 12, 12)
        self.checkbox_outline = self.checkbox_obj.copy()

        # variables to test the different states of the checkbox
        self.checked = False

    def _draw_button_text(self):
        self.font = pygame.font.SysFont(self.ft, self.fs)
        self.font_surf = self.font.render(self.caption, True, self.fc)
        w, h = self.font.size(self.caption)
        self.font_pos = (self.x + self.to[0], self.y + 12 / 2 - h / 2 + 
        self.to[1])
        self.surface.blit(self.font_surf, self.font_pos)

    def render_checkbox(self):
        if self.checked:
            pygame.draw.rect(self.surface, self.color, self.checkbox_obj)
            pygame.draw.rect(self.surface, self.oc, self.checkbox_outline, 1)
            pygame.draw.circle(self.surface, self.cc, (self.x + 6, self.y + 6), 4)

        elif not self.checked:
            pygame.draw.rect(self.surface, self.color, self.checkbox_obj)
            pygame.draw.rect(self.surface, self.oc, self.checkbox_outline, 1)
        self._draw_button_text()

    def _update(self, event_object):
        x, y = pygame.mouse.get_pos()
        px, py, w, h = self.checkbox_obj
        if px < x < px + w and py < y < py + w:
            if self.checked:
                self.checked = False
            else:
                self.checked = True

    def update_checkbox(self, event_object):
        if event_object.type == pygame.MOUSEBUTTONDOWN:
            self.click = True
            self._update(event_object)
   
`
}

function sliderClass() {
   return `
   
class Slider ():
   def setValue (self, value): 
      pygame.draw.rect(self.screen,self.screenColor,(self.x,self.y,self.width,self.height))
      pygame.draw.rect(self.screen,self.sliderColor,(self.x,self.y+self.height/2-self.sliderBarHeight/2,self.width,self.sliderBarHeight))
      pygame.draw.rect(self.screen,self.buttonColor,(self.x+value*((self.width-self.buttonWidth)/self.maxValue),self.y,self.buttonWidth,self.height))
      if self.buttonBorderThickness != 0:
         pygame.draw.rect(self.screen,(0,0,0),(self.x+value*((self.width-self.buttonWidth)/self.maxValue),self.y,self.buttonWidth,self.height),self.buttonBorderThickness)
      if self.sliderBorderThickness != 0:
         pygame.draw.rect(self.screen,(0,0,0),(self.x,self.y+self.height/2-sliderBarHeight/2,self.width,self.sliderBarHeight),self.sliderBorderThickness)
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
      
   def update (self, event):
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
   `
} 

function databaseClass() {
   return `
   
import json
import os

class JsonDb(object):

    def __init__(self, location):
        self.location = os.path.expanduser(location)
        self.load(self.location)

    def load(self , location):
       if os.path.exists(location):
           self._load()
       else:
           self.db = {}
       return True

    def _load(self):
        self.db = json.load(open(self.location , "r"))

    def dumpdb(self):
        try:
            json.dump(self.db , open(self.location, "w+", encoding='ascii'))
            return True
        except:
            return False
    
    def createTable (self, tableName ):
        self.db[str(tableName)] = {}
        print ( 'db.' + tableName + ' was created ' )
       
    def add (self,key,value): 
        print ( "db.add ( " + key + "," + str(value) + ")")    
        try:
            list = self.db[str(key)]
            list.append ( value ) 
            self.db[str(key)] = list
            self.dumpdb()
        except Exception as e:
            print("Error Adding Value to Database : " + str(e))
            return False
     
    def set(self , key , value):
        print ( "db.set ( " + key + "," + str(value) + ")")    
        try:
            self.db[str(key)] = value
            self.dumpdb()
        except Exception as e:
            print("[X] Error Saving Values to Database : " + str(e))
            return False       

    def get(self,key):
        print ("Get [" + key + "]")
        value = None
        try:
            value = self.db[key]
        except KeyError:
            print("No Value Can Be Found for " + str(key))
        print ( "Get returning value: " + json.dumps(value)) 

        return value
        
    def read (self, tableName, key, field):
        value = None
        try: 
            table = self.db[tableName]
            value = table[key][field]
        except Exception as ex:
            print ( 'Could not db.read because: ' + str(ex)) 
        print ( 'read got the value: ' + str(value)) 
        return value
            
    def getNumber (self,key): 
        value = self.get (key)
        if value == None:
           value = 0
        return value
        
    def decodeItem (self,item): 
        value = item 
        if value != None: 
           value = value.replace ( '%20', ' ')
           value = value.replace ( '%22', '\"')
           value = value.replace ( '%7B', '{')
           value = value.replace ( '%7D', '}')
        return value
                
    def getRow (self, tableName, key): 
        value = None
        key = self.decodeItem (key)
        if tableName in self.db: 
           list  = self.db[tableName]
           value = None
           if key in list:    
              value = list[key]
           print ( 'getRow ' + tableName + '.' + key + ' found a value of: ' + json.dumps(value))
        else: 
           print ( 'table: ' + tableName + ' does not exist in the database yo' )
        return value
        
    def getField (self, tableName, key, field): 
        print ( 'getField [' + tableName + '][' + key + '][' + field + ']')
        key = self.decodeItem (key)
        row = self.getRow (tableName, key)
        value = None
        if row == None: 
           print ( tableName + '.' + key + ' was not found in the database ' )
        else: 
           field = self.decodeItem (field)
           if field in row:    
              value = row[field]
           print ( 'getField ' + tableName + '.' + key + '.' + field + ' found a value of: ' + json.dumps(value))
        returnValue = {}
        returnValue[field] = value
        return json.dumps(returnValue)
         
    def getList (self,key):
        value = self.get (key)
        if value == None:
           value = []
        return value
            
    def showKey ( self,key):
        value = self.get (key)
        print ( str(key) + ":" + str(value) )        

    def exists (self, key): 
        return key in self.db    
        
    def clean(self): 
        self.db = {} 
        self.dumpdb()
            
    def delete(self,key):
        if not key in self.db:
            print ( 'This table was not deleted because it does not exist in the database: ' + key )
        else:
            del self.db[key]
            self.dumpdb()
            print ( 'This table was deleted: ' + key)
            
    def renameKey (self, tableName, oldKey, newKey):
        self.db[tableName][newKey] = self.db[tableName][oldKey]
        del self.db[tableName][oldKey]
        print ( tableName + '.' + oldKey + ' renamed to: ' + tableName + '.' + newKey)
        self.dumpdb()
        
    def tables(self):
        return self.db   
        
    def resetdb(self):
        self.db={}
        self.dumpdb()
        return True
        
    def setField (self, tableName, key, field, value):
        print ( 'Insert ' + value + ' for ' + tableName + '.' + field )
        table = self.get (tableName)
        if table == None:
           self.createTable (tableName)
           table = self.get (tableName)
         
        print ( tableName + ' before we start: ' + json.dumps(table))          
        row = self.getRow ( tableName, key) 
        if row == None: 
           print ( "Insert the row into the table for key: " + key)
           table[key] = {}
           row = {}           
           
        if field != '':    
           row[field] = value
           
        table[key] = row         
        self.db[tableName] = table
        self.dumpdb()
       
        print ( 'Done in setField' ) 
        returnValue = {}
        returnValue[field] = value

        return json.dumps(returnValue)
   
`
}

function pyvisaClass() {
  return `
  
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
      print ( '***Frequency: ' + format_float ) 
      return float (format_float) 
  
  `
}

function esp32BluetoothClass() { 
  return `
  
# To use this code, open a serial communication application via BLE 
# on the android device (use the Serial Bluetooth Terminal).
from machine import Pin, Timer
from time import sleep_ms
import bluetooth
import struct 

class BLE():
   def __init__(self, name='ESP32#'):
      self.name = name
      ble = bluetooth.BLE()
      self._IRQ_CENTRAL_CONNECT = 1
      self._IRQ_CENTRAL_DISCONNECT = 2
      self._IRQ_GATTS_WRITE = 3

      _FLAG_READ = 0x0002
      _FLAG_WRITE_NO_RESPONSE = 0x0004
      _FLAG_WRITE = 0x0008
      _FLAG_NOTIFY = 0x0010
        
      _UART_UUID = bluetooth.UUID("6E400001-B5A3-F393-E0A9-E50E24DCCA9E")
      _UART_TX = (
         bluetooth.UUID("6E400003-B5A3-F393-E0A9-E50E24DCCA9E"),
         _FLAG_READ | _FLAG_NOTIFY,
      )
      _UART_RX = (
         bluetooth.UUID("6E400002-B5A3-F393-E0A9-E50E24DCCA9E"),
         _FLAG_WRITE | _FLAG_WRITE_NO_RESPONSE,
      )
      _UART_SERVICE = (
         _UART_UUID,
         (_UART_TX, _UART_RX),
      )      
      
      self._ble = ble
      self._ble.active(True)
      self._ble.irq(self._irq)
      ((self._handle_tx, self._handle_rx),) = self._ble.gatts_register_services((_UART_SERVICE,))
      self._connections = set()
      self.callback = None
      self._advertise()
        
   def _irq(self, event, data):
      print ( 'event: ' + str(event)) 
      if event == self._IRQ_CENTRAL_CONNECT:
         conn_handle, _, _ = data
         print("New connection", conn_handle)
         self._connections.add(conn_handle) 
         sleep_ms (999)
         self.send ( 'Welcome to ' + self.name )   
         if self.callback:
            self.callback ("Connected")           
      elif event == self._IRQ_CENTRAL_DISCONNECT:
         conn_handle, _, _ = data
         print("Disconnected", conn_handle)
         self._connections.remove(conn_handle)
         self._advertise()
         if self.callback:
            self.callback ("Disconnected")  
      elif event == self._IRQ_GATTS_WRITE:
         print ( 'Got a message 1...' )          
         buffer = self._ble.gatts_read(self._handle_rx)
         length = len(buffer) 
         print ( 'Got a buffer of length: ' + str(length)) 
         message = buffer.decode().strip()
         if self.callback: 
            self.callback (message)
         print ('Received: [' + message + ']')
         
   def setCallback (self,callback):
      self.callback = callback
                            
   def send(self, data):
      for conn_handle in self._connections:
         try: 
            print ( 'Sending: ' + data )
            self._ble.gatts_notify(conn_handle, self._handle_tx, data.encode ('UTF-8'))
         except: 
            pass
            
   def _advertise(self, interval_us=500000):
      print("Advertise " + self.name + " to allow a new connection")
      name = bytes(self.name, 'UTF-8')
      self._ble.gap_advertise(100, bytearray('\x02\x01\x02') + bytearray((len(name) + 1, 0x09)) + name)
`
}

function esp32Ssd1306Class () {
   return `
   
#MicroPython SSD1306 OLED driver, I2C and SPI interfaces created by Adafruit
import time
import framebuf
from machine import Pin, SoftI2C
# register definitions
SET_CONTRAST        = 0x81
SET_ENTIRE_ON       = 0xa4
SET_NORM_INV        = 0xa6
SET_DISP            = 0xae
SET_MEM_ADDR        = 0x20
SET_COL_ADDR        = 0x21
SET_PAGE_ADDR       = 0x22
SET_DISP_START_LINE = 0x40
SET_SEG_REMAP       = 0xa0
SET_MUX_RATIO       = 0xa8
SET_COM_OUT_DIR     = 0xc0
SET_DISP_OFFSET     = 0xd3
SET_COM_PIN_CFG     = 0xda
SET_DISP_CLK_DIV    = 0xd5
SET_PRECHARGE       = 0xd9
SET_VCOM_DESEL      = 0xdb
SET_CHARGE_PUMP     = 0x8d

class SSD1306:
    def __init__(self, width, height, external_vcc):
        self.width = width
        self.height = height
        self.external_vcc = external_vcc
        self.pages = self.height // 8
        # Note the subclass must initialize self.framebuf to a framebuffer.
        # This is necessary because the underlying data buffer is different
        # between I2C and SPI implementations (I2C needs an extra byte).
        self.poweron()
        self.init_display()
        self.lines = ['','','','','','']

    def init_display(self):
        for cmd in (
            SET_DISP | 0x00, # off
            # address setting
            SET_MEM_ADDR, 0x00, # horizontal
            # resolution and layout
            SET_DISP_START_LINE | 0x00,
            SET_SEG_REMAP | 0x01, # column addr 127 mapped to SEG0
            SET_MUX_RATIO, self.height - 1,
            SET_COM_OUT_DIR | 0x08, # scan from COM[N] to COM0
            SET_DISP_OFFSET, 0x00,
            SET_COM_PIN_CFG, 0x02 if self.height == 32 else 0x12,
            # timing and driving scheme
            SET_DISP_CLK_DIV, 0x80,
            SET_PRECHARGE, 0x22 if self.external_vcc else 0xf1,
            SET_VCOM_DESEL, 0x30, # 0.83*Vcc
            # display
            SET_CONTRAST, 0xff, # maximum
            SET_ENTIRE_ON, # output follows RAM contents
            SET_NORM_INV, # not inverted
            # charge pump
            SET_CHARGE_PUMP, 0x10 if self.external_vcc else 0x14,
            SET_DISP | 0x01): # on
            self.write_cmd(cmd)
        self.fill(0)
        self.show()
        
    def setLine (self, which, line): 
        self.lines[which] = line 
        self.show()

    def poweroff(self):
        self.write_cmd(SET_DISP | 0x00)

    def contrast(self, contrast):
        self.write_cmd(SET_CONTRAST)
        self.write_cmd(contrast)

    def invert(self, invert):
        self.write_cmd(SET_NORM_INV | (invert & 1))

    def show(self):
        x0 = 0
        x1 = self.width - 1
        if self.width == 64:
            # displays with width of 64 pixels are shifted by 32
            x0 += 32
            x1 += 32
        self.write_cmd(SET_COL_ADDR)
        self.write_cmd(x0)
        self.write_cmd(x1)
        self.write_cmd(SET_PAGE_ADDR)
        self.write_cmd(0)
        self.write_cmd(self.pages - 1)
        self.write_framebuf()

    def fill(self, col):
        self.framebuf.fill(col)

    def pixel(self, x, y, col):
        self.framebuf.pixel(x, y, col)

    def scroll(self, dx, dy):
        self.framebuf.scroll(dx, dy)

    def text(self, string, x, y, col=1):
        self.framebuf.text(string, x, y, col)
        
    def update (self): 
        self.fill ( 0)
        for i in range (6):
           y = i * 10
           if y == 50:
              y = 55
           line = self.lines[i]
           self.text (line, 0, y)
        self.show()
        
    def status (self,message):
        self.lines[5] = message
        self.update()
        
    def setLines (self,lines):
        self.lines = lines


class SSD1306_I2C(SSD1306):
    def __init__(self, width, height, scl, sda, addr=0x3c, external_vcc=False):       
        self.i2c = SoftI2C(scl=Pin(scl), sda=Pin(sda)) 
        self.addr = addr
        self.temp = bytearray(2)
        # Add an extra byte to the data buffer to hold an I2C data/command byte
        # to use hardware-compatible I2C transactions.  A memoryview of the
        # buffer is used to mask this byte from the framebuffer operations
        # (without a major memory hit as memoryview doesn't copy to a separate
        # buffer).
        self.buffer = bytearray(((height // 8) * width) + 1)
        self.buffer[0] = 0x40  # Set first byte of data buffer to Co=0, D/C=1
        self.framebuf = framebuf.FrameBuffer1(memoryview(self.buffer)[1:], width, height)
        super().__init__(width, height, external_vcc)

    def write_cmd(self, cmd):
        self.temp[0] = 0x80 # Co=1, D/C#=0
        self.temp[1] = cmd
        self.i2c.writeto(self.addr, self.temp)

    def write_framebuf(self):
        # Blast out the frame buffer using a single I2C transaction to support
        # hardware I2C interfaces.
        self.i2c.writeto(self.addr, self.buffer)

    def poweron(self):
        pass
     
   `
} 

function mqttClientClass() {
 
  return `
  
import network
import machine
import ubinascii
import time
import usocket as socket
import ustruct as struct
from ubinascii import hexlify
from machine import Pin, SoftI2C
import ssd1306
from time import sleep
from machine import UART

class MQTTClient:

    def __init__(self, client_id, server, port=1883, user=None, password=None, keepalive=0,
                 ssl=False, ssl_params={}):
        self.client_id = client_id
        self.sock = None
        self.server = server
        self.port = port
        self.ssl = ssl
        self.ssl_params = ssl_params
        self.pid = 0
        self.cb = None
        self.user = user
        self.pswd = password
        self.keepalive = keepalive
        self.lw_topic = None
        self.lw_msg = None
        self.lw_qos = 0
        self.lw_retain = False
        print ( 'Done in init' )

    def _send_str(self, s):
        self.sock.write(struct.pack("!H", len(s)))
        self.sock.write(s)

    def _recv_len(self):
        n = 0
        sh = 0
        while 1:
            b = self.sock.read(1)[0]
            n |= (b & 0x7f) << sh
            if not b & 0x80:
                return n
            sh += 7

    def set_callback(self, f):
        self.cb = f

    def set_last_will(self, topic, msg, retain=False, qos=0):
        assert 0 <= qos <= 2
        assert topic
        self.lw_topic = topic
        self.lw_msg = msg
        self.lw_qos = qos
        self.lw_retain = retain

    def connect1(self, clean_session=True):
        print ( 'Get socket' )
        
        self.sock = socket.socket()
        print ( 'get addr' )
        addr = socket.getaddrinfo(self.server, self.port)[0][-1]
        print ( 'Connect the sock...: ' + str(addr) ) 
        self.sock.connect(addr)
        print ( 'sock connected' )
        if self.ssl:
            print ( 'self.ssl is true' ) 
            import ussl
            self.sock = ussl.wrap_socket(self.sock, **self.ssl_params)
        premsg = bytearray(b"\x10\0\0\0\0\0")
        msg = bytearray(b"\x04MQTT\x04\x02\0\0")

        sz = 10 + 2 + len(self.client_id)
        msg[6] = clean_session << 1
        if self.user is not None:
            sz += 2 + len(self.user) + 2 + len(self.pswd)
            msg[6] |= 0xC0
        if self.keepalive:
            assert self.keepalive < 65536
            msg[7] |= self.keepalive >> 8
            msg[8] |= self.keepalive & 0x00FF
        if self.lw_topic:
            sz += 2 + len(self.lw_topic) + 2 + len(self.lw_msg)
            msg[6] |= 0x4 | (self.lw_qos & 0x1) << 3 | (self.lw_qos & 0x2) << 3
            msg[6] |= self.lw_retain << 5

        i = 1
        while sz > 0x7f:
            premsg[i] = (sz & 0x7f) | 0x80
            sz >>= 7
            i += 1
        premsg[i] = sz

        self.sock.write(premsg, i + 2)
        self.sock.write(msg)
        print(hex(len(msg)), hexlify(msg, ":"))
        self._send_str(self.client_id)
        if self.lw_topic:
            print ( 'send topic' + self.lw_topic)
            self._send_str(self.lw_topic)
            self._send_str(self.lw_msg)
        if self.user is not None:
            print ( 'send self and password' )
            self._send_str(self.user)
            self._send_str(self.pswd)
        resp = self.sock.read(4)
        print ( 'Got resp: ' + str(resp) ) 
        assert resp[0] == 0x20 and resp[1] == 0x02
     
        if resp[3] != 0:
            raise MQTTException(resp[3])
        return resp[2] & 1
        

    def disconnect(self):
        self.sock.write(b"\xe0\0")
        self.sock.close()

    def ping(self):
        self.sock.write(b"\xc0\0")

    def publish(self, topic, msg, retain=False, qos=0):
        pkt = bytearray(b"\x30\0\0\0")
        pkt[0] |= qos << 1 | retain
        sz = 2 + len(topic) + len(msg)
        if qos > 0:
            sz += 2
        assert sz < 2097152
        i = 1
        while sz > 0x7f:
            pkt[i] = (sz & 0x7f) | 0x80
            sz >>= 7
            i += 1
        pkt[i] = sz
        #print(hex(len(pkt)), hexlify(pkt, ":"))
        self.sock.write(pkt, i + 1)
        self._send_str(topic)
        if qos > 0:
            self.pid += 1
            pid = self.pid
            struct.pack_into("!H", pkt, 0, pid)
            self.sock.write(pkt, 2)
        self.sock.write(msg)
        if qos == 1:
            while 1:
                op = self.wait_msg()
                if op == 0x40:
                    sz = self.sock.read(1)
                    assert sz == b"\x02"
                    rcv_pid = self.sock.read(2)
                    rcv_pid = rcv_pid[0] << 8 | rcv_pid[1]
                    if pid == rcv_pid:
                        return
        elif qos == 2:
            assert 0

    def subscribe(self, topic, qos=0):
        assert self.cb is not None, "Subscribe callback is not set"
        pkt = bytearray(b"\x82\0\0\0")
        self.pid += 1
        struct.pack_into("!BH", pkt, 1, 2 + 2 + len(topic) + 1, self.pid)
        #print(hex(len(pkt)), hexlify(pkt, ":"))
        self.sock.write(pkt)
        self._send_str(topic)
        self.sock.write(qos.to_bytes(1, "little"))
        while 1:
            op = self.wait_msg()
            if op == 0x90:
                resp = self.sock.read(4)
                #print(resp)
                assert resp[1] == pkt[2] and resp[2] == pkt[3]
                if resp[3] == 0x80:
                    raise MQTTException(resp[3])
                return

    # Wait for a single incoming MQTT message and process it.
    # Subscribed messages are delivered to a callback previously
    # set by .set_callback() method. Other (internal) MQTT
    # messages processed internally.
    def wait_msg(self):
        res = self.sock.read(1)
        self.sock.setblocking(True)
        if res is None:
            return None
        if res == b"":
            raise OSError(-1)
        if res == b"\xd0":  # PINGRESP
            sz = self.sock.read(1)[0]
            assert sz == 0
            return None
        op = res[0]
        if op & 0xf0 != 0x30:
            return op
        sz = self._recv_len()
        topic_len = self.sock.read(2)
        topic_len = (topic_len[0] << 8) | topic_len[1]
        topic = self.sock.read(topic_len)
        sz -= topic_len + 2
        if op & 6:
            pid = self.sock.read(2)
            pid = pid[0] << 8 | pid[1]
            sz -= 2
        msg = self.sock.read(sz)
        self.cb(topic, msg)
        if op & 6 == 2:
            pkt = bytearray(b"\x40\x02\0\0")
            struct.pack_into("!H", pkt, 2, pid)
            self.sock.write(pkt)
        elif op & 6 == 4:
            assert 0

    # Checks whether a pending message from server is available.
    # If not, returns immediately with None. Otherwise, does
    # the same processing as wait_msg.
    def check_msg(self):
        self.sock.setblocking(False)
        return self.wait_msg()
  
  
  `
}

function esp32ButtonClass() {
   return `
   
from machine import Pin   
class Esp32Button(): 
   def __init__ (self,pin): 
      self.pin = Pin(pin, Pin.IN, Pin.PULL_UP)
      self.lastValue = self.pin.value()
      self.released = False
      self.pressed = False 
      
   def update(self): 
      self.pressed = False
      self.released = False 
      value = self.pin.value()
      if self.lastValue != value: 
         if value == 0: 
            self.pressed = True
         else:
            self.released = True 
      self.lastValue = value            
            
   `
} 

function displayClass() {
return `
import pygame
class Display(): 
  def __init__ (self, width, height, title):
     pygame.init()
     pygame.display.set_mode([width, height])
     pygame.display.set_caption ( title )   
     
  def update():
     pygame.display.update()
  
` 
}

function ssdMenuClass() {
   return `
   
   
class Ssd1306Menu (): 
   def __init__ (self,display):
       print ( 'SSD menu created' ) 
       self.state    = 0
       self.display  = display 
       self.pages    = {}
       self.callback = None
       self.ble      = None
       
   def setCallback (self, callback): 
       self.callback = callback 
    
   def listToDictionary (self,list): 
      dict = {} 
      for item in list: 
         data = item.split ( ':' )
         dict[data[0]] = int(data[1])
      # print ( 'listToDictionary creating: ' + str(dict)) 
      return dict         
    
   def addPage ( self, page, lines, resp):
       responses = self.listToDictionary (resp) 
       self.pages[page] = {"lines":lines, "responses":responses}    
       
   def makeLines (self,page,value):
       data = []
       lines = self.pages[page]['lines']
       for line in lines:
           if line.find ( '$value') > -1: 
               line = line.replace('$value', str(value))
           data.append (line)
       return data
                            
   def handleResponse(self,value):
       if value == 'Connected':     
           print ( 'Handling the connection event' )     
           self.display.lines = self.makeLines (1, '') 
           self.state = 1 
       elif value == 'Disconnected': 
           print ( 'Handling the disconnected event' )
           self.display.lines = self.makeLines(0, '' )
           self.state = 0 
       else:
           print ( 'Current state: ' + str(self.state))
           responses = self.pages[self.state]['responses']
           if value in responses.keys():               
               self.state = self.pages[self.state]['responses'][value]
           else:
               self.state = self.pages[self.state]['responses']['*']
           self.display.lines = self.makeLines(self.state, value)
       if self.callback:
           self.callback (self.state, value )         
       self.display.update() 
       if self.ble:
           self.ble.send ( str(chr(10)) ) 
           for line in self.display.lines:
               self.ble.send ( line + str(chr(10)))
   
   `
}

// Raspberry pi version (not tested) 
function piAdf4360Class () {
   return `
   
# For the raspberry pi
import RPi.GPIO as GPIO
import smbus
import spidev   
class ADF4360 (): 
   def __init__ (self, clock ,data, le, minFreq=300, maxFreq=400): 
      self.clock = clock
      self.data = data
      self.le = le
      GPIO.setwarnings (False)
      GPIO.setmode (GPIO.BCM)
      GPIO.setup (data, GPIO.OUT)  # MOSI/Data Pin 19
      GPIO.setup (clock, GPIO.OUT) # CLK       Pin 23
      GPIO.setup (le, GPIO.OUT)    # LE        Pin 26
      GPIO.output(le,0)            # LE = LOW       
      self.MINIMUMFREQUENCY = minFreq
      self.MAXIMUMFREQUENCY = maxFreq
      self.bCounter = 0
      self.div = 1
      self.REFERENCE_FREQUENCY=19.2
      self.lockDetectPrecision5 = False
      self.pfd = 50000
      self.printTimeout = 0
      
   def Print (self, value ): 
      if time.time() < self.printTimeout: 
         time.sleep (self.printTimeout - time.time() ) 
      print ( value )    
      self.printTimeout = time.time() + 0.01       
            
      
   def writeLatch (self, value): 
      mask = 0x800000
      for i in range (24): 
         if (mask & value ) != 0: 
            GPIO.output (self.data,1)
         else:
            GPIO.output (self.data,0)
         time.sleep (0.001)
         GPIO.output (self.clock,1)
         time.sleep (0.001)
         GPIO.output (self.clock,0)
         time.sleep (0.001)          
         mask = mask >> 1
      GPIO.output (self.le,1) #LE
      time.sleep (0.001)
      GPIO.output (self.le,0) #LE
      time.sleep (0.001)
      
   def isEvenValue (self,value): 
      even = (( value & 1) == 0) 
      return even
            
   def writeValues (self,):
      writeLatch (self.rValue)
      writeLatch (self.cValue)
      time.sleep (0.02)
      writeLatch (self.nValue)
      print ( 'wrote [r,c,n]: [' + hex(self.rValue) + ',' + hex(self.cValue) + ',' + hex(self.nValue) + ']' )   
      
   def computeNValue(self):
      self.bCounter = int(bCounter) 
      print ( '        div: ' + str(self.div) )
      if self.isEvenValue ( self.div ):
         self.nValue = (int(self.div) * 4 / 2)  
      else:       
         if self.div > 31:
            self.nValue = (int(self.div) * 4 / 2)
         else:
            self.nValue = (int(self.div) * 4)
         
      self.nValue = int(self.nValue)
      print ( 'Before adding bCounter, nValue: ' + hex(self.nValue) )
      print ( 'bCounter: ' + hex (self.bCounter) ) 
      self.nValue = int(self.nValue + 2 + (self.bCounter * 256))
      print ( 'After adding bCounter, self.nValue: ' + hex (self.nValue) )
      
   def computeRValue (self) :
      
      referenceCounter = self.REFERENCE_FREQUENCY / self.pfd
      self.rValue = 0x300000 + int( referenceCounter * 4) + 1 # Band select clock = 8
      if self.lockDetectPrecision5: 
         self.rValue = self.rValue + 0x40000
         print ( 'lock detect precision 5 in affect' )
      print ( 'computed rValue: ' + hex (self.rValue) + ' with pfd: ' + str(self.pfd)) 
            
`
} 

function adf4360Class () {
   return `
   
# esp32 ADF class
from machine import Pin
import time
import ubinascii
class ADF4360 (): 
   def __init__(self, clock, data, le, minFreq = 300, maxFreq = 400 ): 
      self.clock = Pin(clock, Pin.OUT)
      self.data = Pin(data, Pin.OUT)
      self.le = Pin(le, Pin.OUT)
      self.MINIMUMFREQUENCY     = minFreq
      self.MAXIMUMFREQUENCY     = maxFreq
      self.lockDetectPrecision5 = False
      self.pfd                  = 50000
      self.REFERENCE_FREQUENCY  = 19200000
      self.chargePumpActive     = True
      self.rfPDPolarity         = True
      self.muteTilLockEnabled   = False
      self.frequency            = 1.61
      self.outputFrequency      = 340000000
      self.bCounter             = int(self.outputFrequency / self.pfd )
      self.div                  = 34
      self.printTimeout         = 0  
      self.nValue = 0
      self.cValue = 0
      self.rValue = 0
      
   def writeLatch (self, value):
      mask = 0x800000
      for i in range (24):
         if (mask & value ) != 0:
            self.data.value(1)
         else:
            self.data.value(0)
         time.sleep (0.001)
         self.clock.value(1)
         time.sleep (0.001)
         self.clock.value(0)
         time.sleep (0.001)
         mask = mask >> 1
      self.le.value(1)
      time.sleep (0.001)
      self.le.value(0)
      time.sleep (0.001)  
      
   def isEvenValue (self,value):
      value = int (value )
      even = (( value & 1) == 0)
      return even

   def writeValues (self):
      self.writeLatch (self.rValue)
      self.writeLatch (self.cValue)
      time.sleep (0.02)
      self.writeLatch (self.nValue)  
      print ( 'Done writing [r,c,n]: [' + self.hex(self.rValue) + \
              ',' + self.hex(self.cValue) + ',' + self.hex(self.nValue) + ']' )
   
   def computeNValue(self):
      print ( "computeNValue [div,bCounter]: [" + str(self.div) + ',' + \
              self.hex(self.bCounter) + ']' )    
      if self.isEvenValue ( self.div ):
         self.nValue = (int(self.div) * 4 / 2) 
      else:
         if self.div > 31:
            self.nValue = (int(self.div) * 4 / 2)
         else:
            self.nValue = (int(self.div) * 4)
      
      self.nValue = int(self.nValue)      
      self.nValue = self.nValue + 2 + (self.bCounter * 256)
      print ( "Computed nValue: " + self.hex (self.nValue) )
   
   def to_bytes(self,x):
     return bytes((x & 0xff, (x >> 8) & 0xff, (x >> 16) & 0xff))
   
   def hex (self, val):  # data is already form of bytes 
      data = adf4360.to_bytes ( val )
      value = ubinascii.hexlify(data).decode()    
      #print ( 'hex got a value: ' + value )
      reversed = ''
      count = 0 
      byteVal = ''
      for i in range(len(value)):  
         ch = value [i:i+1]
         if count & 1 != 0: 
            byteVal = byteVal + ch
            reversed = byteVal + reversed
            byteVal = ''
         else:
            byteVal = ch + byteVal
         count = count + 1
      #print ( 'reversed: ' + reversed )
      return '0x' + reversed 
      
   def computeRValue (self): 
      referenceCounter = self.REFERENCE_FREQUENCY / self.pfd
      self.rValue = 0x300000 + int( referenceCounter * 4) + 1 # Band select clock = 8
      if self.lockDetectPrecision5:
         self.rValue = self.rValue + 0x40000
      print ( "computed rValue: " + self.hex (self.rValue) + " with pfd: " + str(self.pfd))

   def findHighestDiv (self):
      frequency = self.frequency 
      d = 0 # invalid
      foundDiv = False
      for i in range (2,62):
         d =  64 - i
         outFrequency = float(frequency * d)
         if outFrequency > self.MAXIMUMFREQUENCY:
            pass
            # print ( "too high" )
         elif outFrequency < self.MINIMUMFREQUENCY:
            pass
            #print ( "too low" )
         elif not self.isEvenValue (d) and (d > 31):
            pass
            #print ( "illegal odd value above 31" )
         else:
            #print ( "findHighestDiv [self.div,outFrequency]: [' + str(d) + ',' + str(outFrequency) + ']' )
            foundDiv = True
            break
        
      if not foundDiv:
         print ( "Could not find a solution for frequency: " + str(frequency))
         d = -1
      else:
         print ( "findHighestDiv found a solution div of: " + str(d))
      
      return d
   
   def setCValue(self):
      if self.isEvenValue (self.div): #  div > 31:
         self.cValue = 0x4FF0a4 # Div by 2   , lsb of 8 for increae core power
      else:
         self.cValue = 0x4FF0c4

      # c command
      if self.chargePumpActive:
         self.cValue = self.cValue + 0x000
      else:
         self.cValue = self.cValue + 0x200

      # e command
      if self.rfPDPolarity:
         self.cValue = self.cValue + 0x100
      else:
         self.cValue = self.cValue + 0x000

      # m command
      if self.muteTilLockEnabled:
         self.cValue = self.cValue + 0x800
      else:
         self.cValue = self.cValue + 0x00

      #self.Print ( "setCValue " + str (self.cValue) )

   def findBCounter(self,calculateDiv):     
      if calculateDiv:
         self.div = self.findHighestDiv ()
      
      if self.div == -1:
         self.Print ( "div is bad: " + str(self.div ) )
      else:
         outFreq = self.div * self.frequency
                  
         if outFreq < self.MINIMUMFREQUENCY:
            print ( 'outFreq ' + str(outFreq) + ' < MINIMUM ' ) 
         elif outFreq > self.MAXIMUMFREQUENCY: 
            print ( 'outFreq ' + str(outFreq) + ' > MAXIMUM ' )
         else:
            outputFrequency = outFreq * 1000000
            #self.Print ( "New outputFrequency calculation: " + str(outputFrequency/1000000) + " Mhz" )
            bCounter = outputFrequency / self.pfd
            bCounter = round (bCounter)
            print ( " bCounter: " + str(bCounter))
            self.bCounter = bCounter
         

   def findDivRange (self,frequency):
      dRange = []
      for i in range (2,62):
         d = i
         outFrequency = frequency * d
         if (float(outFrequency) < self.MAXIMUMFREQUENCY) and (float (outFrequency) > self.MINIMUMFREQUENCY):
            if (d < 32) or ((d & 1 ) == 0):
               dRange.append (d)
      self.Print ( "findDivRange returning: " + str(dRange))
      return dRange
   
   def setFrequency (self, frequency ):
      format_float = "{:.2f}".format(frequency)
      self.frequency = float ( format_float )
      self.findBCounter (True) 
      self.computeNValue()
      self.computeRValue()
      self.setCValue()
      self.writeValues()
       
      
`
} 