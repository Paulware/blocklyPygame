import pygame
import struct
try: 
   from pymodbus.client.sync import ModbusTcpClient
except Exception as ex:
   print ( 'You will need to pip install pymodbus' )
   exit()
   
class Modbus ():

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
         
   def addressToFloat (self, address): 
      rr = self.client.read_input_registers(address, 2)
      return self.data_to_float32 (rr.registers)
        
   def floatToAddress (self, value, address): 
      rq = self.client.write_registers(address, self.float32_to_data(float(value)))
      print("Read back value %s" % self.addressToFloat (address))
      
   def close(self):
      self.client.close()
      
      