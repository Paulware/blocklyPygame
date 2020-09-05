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
  var code = surface + '.blit(' + image + ',(' + x + ',' + y + '))\npygame.display.update()\n';
  return code;
};

Blockly.Python['partialscreen'] = function(block) {  
  var width = Blockly.Python.valueToCode(block, "WIDTH", Blockly.Python.ORDER_ATOMIC)
  var height = Blockly.Python.valueToCode(block, "HEIGHT", Blockly.Python.ORDER_ATOMIC)
  var mode = Blockly.Python.valueToCode(block, "MODE", Blockly.Python.ORDER_ATOMIC)
  var code = 'pygame.display.set_mode ((' + width + ',' + height + '), ' + mode + ')';
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['screenmode'] = function(block) {
  var screenMode = block.getFieldValue ("MODE");  
  var code = 'pygame.' + screenMode;
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['setcaption'] = function(block) {  
  var title = Blockly.Python.valueToCode(block, "TITLE", Blockly.Python.ORDER_ATOMIC)
  var code = 'pygame.display.set_caption(' + title + ')\n';
  return code;
};

Blockly.Python['colors'] = function(block) {
  var color = block.getFieldValue ("COLOR");  
  var code = '(' + color + ')'
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['rendertext'] = function(block) {
  var text  = Blockly.Python.valueToCode(block, "TEXT", Blockly.Python.ORDER_ATOMIC)
  var color = Blockly.Python.valueToCode(block, "COLOR", Blockly.Python.ORDER_ATOMIC)
  
  var code = 'pygame.font.Font(\'freesansbold.ttf\', 32).render (' + text + ',True,' + color + ')' 
  return [code, Blockly.Python.ORDER_NONE]; 
};


Blockly.Python['getrect'] = function(block) {
  var obj  = Blockly.Python.valueToCode(block, "OBJECT", Blockly.Python.ORDER_ATOMIC)
  
  var code = obj + '.get_rect()'
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['centerrect'] = function(block) {  
  var rect = Blockly.Python.valueToCode(block, "RECT", Blockly.Python.ORDER_ATOMIC)
  var x = Blockly.Python.valueToCode(block, "X", Blockly.Python.ORDER_ATOMIC)
  var y = Blockly.Python.valueToCode(block, "Y", Blockly.Python.ORDER_ATOMIC)
  var code = rect + '.center = (' + x + ',' + y + ')\n';
  return code;
};

Blockly.Python['drawtext'] = function(block) {  
  var rect    = Blockly.Python.valueToCode(block, "RECT",    Blockly.Python.ORDER_ATOMIC)
  var txt    = Blockly.Python.valueToCode(block, "TEXT",    Blockly.Python.ORDER_ATOMIC)
  var surface = Blockly.Python.valueToCode(block, "SURFACE", Blockly.Python.ORDER_ATOMIC)  
  var code = surface + '.blit (' + txt + ',' + rect + ')\npygame.display.update()\n';
  return code;
};
