Blockly.Python['loadimage'] = function(block) {
  var filename = Blockly.Python.valueToCode(block, "FILENAME", Blockly.Python.ORDER_ATOMIC) 
  var code = 'pygame.image.load (' + filename + ').convert()';
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['imagesize'] = function(block) {
  var image = Blockly.Python.valueToCode(block, "IMAGE", Blockly.Python.ORDER_ATOMIC)
  var widthheight = block.getFieldValue ("WIDTHHEIGHT");  
  var code = image + '.' + widthheight;
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['pygameinit'] = function(block) {  
  var code = 'import pygame\npygame.init()\n';
  return code;
};

Blockly.Python['fullscreen'] = function(block) {  
  var code = 'pygame.display.set_mode ((0, 0), pygame.FULLSCREEN)';
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['pygameevent'] = function(block) {  
  var code = 'pygame.event.get()';
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['eventtype'] = function(block) {  
  var event = Blockly.Python.valueToCode(block, "EVENT", Blockly.Python.ORDER_ATOMIC)
  var code = event + '.type';
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['events'] = function(block) {
  var event = block.getFieldValue ("EVENT");  
  var code = 'pygame.' + event;
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['drawimage'] = function(block) {  
  var image = Blockly.Python.valueToCode(block, "IMAGE", Blockly.Python.ORDER_ATOMIC)
  var surface = Blockly.Python.valueToCode(block, "SURFACE", Blockly.Python.ORDER_ATOMIC)
  var x = Blockly.Python.valueToCode(block, "X", Blockly.Python.ORDER_ATOMIC)
  var y = Blockly.Python.valueToCode(block, "Y", Blockly.Python.ORDER_ATOMIC) 
  var code = surface + '.blit(' + image + ',(' + x + ',' + y + '))\npygame.display.update();\n';
  return code;
};
