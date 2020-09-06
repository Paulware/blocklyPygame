
Blockly.Python['pygameinit'] = function(block) {  
  var code = 'import pygame\nimport math\nimport time\nimport threading\npygame.init()\nfrom math import atan2, degrees, pi\n';
  return code;
};

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
  var position = Blockly.Python.valueToCode(block, "POSITION", Blockly.Python.ORDER_ATOMIC)
 
  var code = surface + '.blit (' + image + ',(' + position + '[0]-' + image + '.get_size()[0]//2,' + position + '[1]-' + image + '.get_size()[1]//2))\npygame.display.update()\n'
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
  var x    = Blockly.Python.valueToCode(block, "X", Blockly.Python.ORDER_ATOMIC)
  var y    = Blockly.Python.valueToCode(block, "Y", Blockly.Python.ORDER_ATOMIC)
  var code = rect + '.center = (' + x + ',' + y + ')\n';
  return code;
};

Blockly.Python['drawtext'] = function(block) {  
  var rect    = Blockly.Python.valueToCode(block, "RECT",    Blockly.Python.ORDER_ATOMIC)
  var txt     = Blockly.Python.valueToCode(block, "TEXT",    Blockly.Python.ORDER_ATOMIC)
  var surface = Blockly.Python.valueToCode(block, "SURFACE", Blockly.Python.ORDER_ATOMIC)  
  var code = surface + '.blit (' + txt + ',' + rect + ')\npygame.display.update()\n';
  return code;
};

Blockly.Python['wait'] = function(block) {  
  var seconds = Blockly.Python.valueToCode(block, "SECONDS", Blockly.Python.ORDER_ATOMIC)
  var code = 'threading.Event().wait (' + seconds + ')\n';
  return code;
};

Blockly.Python['position'] = function(block) {
  var x = Blockly.Python.valueToCode(block, "X", Blockly.Python.ORDER_ATOMIC)
  var y = Blockly.Python.valueToCode(block, "Y", Blockly.Python.ORDER_ATOMIC)
  var code = '(' + x + ',' + y + ')'
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['drawline'] = function(block) {  
  var surface   = Blockly.Python.valueToCode(block, "SURFACE",   Blockly.Python.ORDER_ATOMIC)
  var position1 = Blockly.Python.valueToCode(block, "POSITION1", Blockly.Python.ORDER_ATOMIC)
  var position2 = Blockly.Python.valueToCode(block, "POSITION2", Blockly.Python.ORDER_ATOMIC)  
  var color     = Blockly.Python.valueToCode(block, "COLOR",     Blockly.Python.ORDER_ATOMIC)
  color = color.substring (2,color.length-1)
  
  var code = 'pygame.draw.line (' + surface + ',0X' + color + ',' + position1 + ',' + position2 + ')\npygame.display.update()\n';
  return code;
};

Blockly.Python['drawrect'] = function(block) {  
  var surface   = Blockly.Python.valueToCode (block, "SURFACE", Blockly.Python.ORDER_ATOMIC)
  var color     = Blockly.Python.valueToCode (block, "COLOR",   Blockly.Python.ORDER_ATOMIC)
  var rect      = Blockly.Python.valueToCode (block, "RECT",    Blockly.Python.ORDER_ATOMIC)
  color = color.substring (2,color.length-1)
  
  var code = 'pygame.draw.rect(' + surface + ',0X' + color + ',' + rect + ')\npygame.display.update()\n';
  return code;
};

Blockly.Python['makerectangle'] = function(block) {
  var position1 = Blockly.Python.valueToCode(block, "POSITION1", Blockly.Python.ORDER_ATOMIC)
  var position2 = Blockly.Python.valueToCode(block, "POSITION2", Blockly.Python.ORDER_ATOMIC)
  var code = 'pygame.Rect(' + position1 + ',(' + position2 + '[0]-' + position1 + '[0],' + position2 + '[1]-' + position1 + '[1]))'
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['drawcircle'] = function(block) {  
  var surface   = Blockly.Python.valueToCode (block, "SURFACE", Blockly.Python.ORDER_ATOMIC)
  var color     = Blockly.Python.valueToCode (block, "COLOR",   Blockly.Python.ORDER_ATOMIC)
  var position  = Blockly.Python.valueToCode (block, "POSITION",Blockly.Python.ORDER_ATOMIC)
  var radius    = Blockly.Python.valueToCode (block, "RADIUS",  Blockly.Python.ORDER_ATOMIC)
  color = color.substring (2,color.length-1)
  
  var code = 'pygame.draw.circle(' + surface + ',0X' + color + ',' + position + ',' + radius + ')\npygame.display.update()\n';
  return code;
};

Blockly.Python['currenttime'] = function(block) {
  var code = 'time.time()'
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['elapsedtime'] = function(block) {
  var startTime = Blockly.Python.valueToCode (block, "STARTTIME", Blockly.Python.ORDER_ATOMIC)
  var code = 'time.time() - ' + startTime
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['fillsurface'] = function(block) {  
  var surface   = Blockly.Python.valueToCode (block, "SURFACE", Blockly.Python.ORDER_ATOMIC)
  var color     = Blockly.Python.valueToCode (block, "COLOR",   Blockly.Python.ORDER_ATOMIC)
  color = color.substring (2,color.length-1)
  
  var code = surface + '.fill (0X' + color + ')\npygame.display.update()\n';
  return code;
};

Blockly.Python['mouseposition'] = function(block) {
  var code = 'pygame.mouse.get_pos()'
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['expression'] = function(block) {
  var expression   = Blockly.Python.valueToCode (block, "EXPRESSION", Blockly.Python.ORDER_ATOMIC)
  expression = expression.substring (1,expression.length-1)
  return [expression, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['rotatesurface'] = function(block) {  
  var surface   = Blockly.Python.valueToCode (block, "SURFACE", Blockly.Python.ORDER_ATOMIC)
  var degree     = Blockly.Python.valueToCode (block, "DEGREE",   Blockly.Python.ORDER_ATOMIC)
  
  var code = 'pygame.transform.rotate(' + surface + ',' + degree + ')'
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['drawsurface'] = function(block) {  
  var surface      = Blockly.Python.valueToCode (block, "SURFACE", Blockly.Python.ORDER_ATOMIC)
  var newSurface   = Blockly.Python.valueToCode (block, "NEWSURFACE", Blockly.Python.ORDER_ATOMIC)
  var size         = Blockly.Python.valueToCode (block, "SIZE", Blockly.Python.ORDER_ATOMIC)
  var code = surface + '.blit (' + newSurface + ',' + size + ')\npygame.display.update()\n';
  return code;
};

Blockly.Python['includedef'] = function(block) {  
  var name      = block.getFieldValue ("NAME")
  var code = '#unknown';
  if (name == 'rotate') {
     code = 'w, h       = image.get_size()\n' + 
            'originPos  = (w//2,h//2)\n' + 
            'box        = [pygame.math.Vector2(p) for p in [(0, 0), (w, 0), (w, -h), (0, -h)]]\n' + 
            'box_rotate = [p.rotate(angle) for p in box]\n' + 
            'min_box    = (min(box_rotate, key=lambda p: p[0])[0], min(box_rotate, key=lambda p: p[1])[1])\n' + 
            'max_box    = (max(box_rotate, key=lambda p: p[0])[0], max(box_rotate, key=lambda p: p[1])[1])\n' + 
            'pivot        = pygame.math.Vector2(originPos[0], -originPos[1])\n' + 
            'pivot_rotate = pivot.rotate(angle)\n' + 
            'pivot_move   = pivot_rotate - pivot\n' + 
            'rotated_image = pygame.transform.rotate(image, angle)\n';  
  }
  return code;
};
Blockly.Python['getangle'] = function(block) {
  var position1 = Blockly.Python.valueToCode (block, "POSITION1", Blockly.Python.ORDER_ATOMIC)
  var position2 = Blockly.Python.valueToCode (block, "POSITION2", Blockly.Python.ORDER_ATOMIC)
  var code = 'degrees(atan2(-(' + position2 + '[1] - ' + position1 + '[1]),' + position2 + '[0]-' + position1 + '[0]) % (2*pi))'
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['rotateimage'] = function(block) {
  var image = Blockly.Python.valueToCode (block, "IMAGE", Blockly.Python.ORDER_ATOMIC)
  var degree = Blockly.Python.valueToCode (block, "DEGREE", Blockly.Python.ORDER_ATOMIC)
  var code = 'pygame.transform.rotate(' + image + ',' + degree + ')'
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['rectcenter'] = function(block) {
  var rect  = Blockly.Python.valueToCode(block, "RECT", Blockly.Python.ORDER_ATOMIC) 
  var code = rect + '.center'
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['translate'] = function(block) {
  var position = Blockly.Python.valueToCode(block, "POSITION", Blockly.Python.ORDER_ATOMIC) 
  var speed    = Blockly.Python.valueToCode(block, "SPEED", Blockly.Python.ORDER_ATOMIC) 
  var radians  = Blockly.Python.valueToCode(block, "DEGREES", Blockly.Python.ORDER_ATOMIC) 
  
  var code = '(' + position + '[0]+(' + speed + '*math.cos(' + radians + ')),' + position + '[1]-(' + speed + '*math.sin(' + radians+ ')))'
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['toradians'] = function(block) {
  var degree  = Blockly.Python.valueToCode(block, "DEGREE", Blockly.Python.ORDER_ATOMIC) 
  var code = '(' + degree + '/180.0*3.1415927)'
  //code = code + '-(3.1415927/2.0)'
  return [code, Blockly.Python.ORDER_NONE]; 
};

