Blockly.Python['pygameinit'] = function(block) {  
  var code = 'import pygame\npygame.init()\n';
  return code;
};

Blockly.Python['imports'] = function(block) {  
  var code = 'import pygame\nimport math\nimport time\nimport threading\nfrom math import atan2, degrees, pi\n'; 
  return code;
};

Blockly.Python['import'] = function(block) { 
  var library = Blockly.Python.valueToCode(block, "LIBRARY", Blockly.Python.ORDER_ATOMIC)   
  library = library.substring (1,library.length-1)
  var code;
  if (library == 'get_key') { 
     code =        'def get_key():\n' + 
                   '   src  = r\"`1234567890-=qwertyuiop[]\\asdfghjkl;\'zxcvbnm,./\"\n' + 
                   '   dest = r\'~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?\'\n' +                   
                   '   while 1:\n' + 
                   '      try: \n' + 
                   '         event = pygame.event.poll()\n' +
                   '         if event.type == pygame.KEYDOWN:\n' +                    
                   '            _ch = chr(event.key)\n' +
                   '            if ord(_ch) != 304:\n' + 
                   '               pressed = pygame.key.get_pressed()\n' +
                   '               if pressed[pygame.K_RSHIFT] or pressed[pygame.K_LSHIFT] and _ch in src:\n' +
                   '                  _ch = dest[src.index(_ch)]\n' +
                   '               break\n' + 
                   '      except Exception as ex:\n' + 
                   '         pass\n' + 
                   '   return _ch\n'; 
  } else { 
     code = 'import ' + library + '\n'
  }
  return code;
};

Blockly.Python['clearevents'] = function(block) {  
  var code = 'pygame.event.clear()\n';
  return code;
};

Blockly.Python['loadimage'] = function(block) {
  var filename = Blockly.Python.valueToCode(block, "FILENAME", Blockly.Python.ORDER_ATOMIC) 
  var code = 'makeImage (' + filename + ')'; // pygame.image.load (' + filename + ').convert_alpha()';
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
  var code = 'pygame.display.set_mode ((' + width + ',' + height + '), pygame.RESIZABLE)';
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['screenmode'] = function(block) {
  var screenMode = block.getFieldValue ("MODE");  
  var code = 'pygame.' + screenMode;
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['setcaption'] = function(block) {  
  var title = Blockly.Python.valueToCode(block, "TITLE", Blockly.Python.ORDER_ATOMIC)
  title = 'str(' + title + ')'
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
  var color = Blockly.Python.valueToCode(block, "COLOR",     Blockly.Python.ORDER_ATOMIC)
  var size  = block.getFieldValue ("SIZE");  
  color = 'pygame.Color(' + color + ')'
  text = 'str(' + text + ')' 
  
  var code = 'pygame.font.Font(\'freesansbold.ttf\',' + size + ').render (' + text + ',True,' + color + ')' 
  return [code, Blockly.Python.ORDER_NONE]; 
};


Blockly.Python['getrect'] = function(block) {
  var obj  = Blockly.Python.valueToCode(block, "OBJECT", Blockly.Python.ORDER_ATOMIC)
  
  var code = obj + '.get_rect()'
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['spriterect'] = function(block) {
  var obj  = Blockly.Python.valueToCode(block, "OBJECT", Blockly.Python.ORDER_ATOMIC)
  
  var code = obj + '.rect'
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

  if (!isNaN(color.substring (2,color.length-1))) { 
    color = '0X' + color.substring (2,color.length-1)  
  }
  
  var code = 'pygame.draw.circle(' + surface + ',' + color + ',' + position + ',' + radius + ',1)\npygame.display.update()\n';
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
  
  var code = surface + '.fill (0X' + color + ')\n' // pygame.display.update()\n';
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
  var code = 'math.degrees(math.atan2(-(' + position2 + '[1] - ' + position1 + '[1]),' + position2 + '[0]-' + position1 + '[0]) % (2*math.pi))'
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

Blockly.Python['waitevent'] = function(block) {  
  var event      = Blockly.Python.valueToCode (block, "EVENT", Blockly.Python.ORDER_ATOMIC)
  var code = 
     '_quitEvent = False\n' + 
     'while not _quitEvent:\n' + 
     '   for event in (pygame.event.get()):\n' + 
     '      if (event.type) == ' + event + ':\n' +
     '         _quitEvent = True\n' + 
     '         break\n'      
  return code;
};

Blockly.Python['imagetorect'] = function(block) {
  var image    = Blockly.Python.valueToCode (block, "IMAGE", Blockly.Python.ORDER_ATOMIC)
  var position = Blockly.Python.valueToCode (block, "POSITION", Blockly.Python.ORDER_ATOMIC)
  var code = 'pygame.Rect(' + position + '[0]-' + image + '.get_size()[0]//2,' + position + '[1]-' + image + '.get_size()[1]//2,' + image + '.get_size()[0],' + image + '.get_size()[1])'
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['collisiondetected'] = function(block) {
  var rect1    = Blockly.Python.valueToCode (block, "RECT1", Blockly.Python.ORDER_ATOMIC)
  var rect2 = Blockly.Python.valueToCode (block, "RECT2", Blockly.Python.ORDER_ATOMIC)
  var code =  rect1 + '.colliderect(' + rect2 + ')'
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['collidepoint'] = function(block) {
  var rect     = Blockly.Python.valueToCode (block, "RECT", Blockly.Python.ORDER_ATOMIC)
  var position = Blockly.Python.valueToCode (block, "POSITION", Blockly.Python.ORDER_ATOMIC)
  var code     = rect + '.collidepoint(' + position + ')'
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['getkey'] = function(block) {
  var code = 'get_key()';
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['pygamekey'] = function(block) {
  var key = block.getFieldValue ("KEY");  
  var code = 'chr(pygame.' + key + ')';
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['screensize'] = function(block) {
  var widthHeight = block.getFieldValue ("WIDTHHEIGHT");  
  var surface     = Blockly.Python.valueToCode (block, "SURFACE", Blockly.Python.ORDER_ATOMIC)
  var code = surface + '.get_' + widthHeight + '()';
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['moverect'] = function(block) {  
  var rect     = Blockly.Python.valueToCode(block, "RECT", Blockly.Python.ORDER_ATOMIC)
  var position = Blockly.Python.valueToCode(block, "POSITION", Blockly.Python.ORDER_ATOMIC)
  var code = rect + '.move (' + position + '[0],' + position + '[1])';
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['inflaterect'] = function(block) {  
  var rect     = Blockly.Python.valueToCode(block, "RECT", Blockly.Python.ORDER_ATOMIC)
  var position = Blockly.Python.valueToCode(block, "POSITION", Blockly.Python.ORDER_ATOMIC)
  var code = rect + '.inflate (' + position + '[0],' + position + '[1])';
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['eventkey'] = function(block) {  
  var event = Blockly.Python.valueToCode(block, "EVENT", Blockly.Python.ORDER_ATOMIC)
  var code = 'chr(' + event + '.key)';
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['pollevent'] = function(block) {  
  var code = 'pygame.event.poll()';
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['playsound'] = function(block) {  
  var filename = Blockly.Python.valueToCode(block, "FILENAME", Blockly.Python.ORDER_ATOMIC)
  var code = 'pygame.mixer.Sound(' + filename + ').play()\n';
  return code; 
};

Blockly.Python['playmp3'] = function(block) {  
  var filename = Blockly.Python.valueToCode(block, "FILENAME", Blockly.Python.ORDER_ATOMIC)
  var code = 'pygame.mixer.Sound(' + filename + ').play()\n';
  return code; 
};

Blockly.Python['subpositions'] = function(block) {
  var position1 = Blockly.Python.valueToCode(block, "POSITION1", Blockly.Python.ORDER_ATOMIC)
  var position2 = Blockly.Python.valueToCode(block, "POSITION2", Blockly.Python.ORDER_ATOMIC)
  var code = '(' + position1 + '[0]-' + position2 + '[0],' + position1 + '[1]-' + position2 + '[1])'
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['rectposition'] = function(block) {
  var rect = Blockly.Python.valueToCode(block, "RECT", Blockly.Python.ORDER_ATOMIC)
  var code = '(' + rect + '.left,' + rect + '.top)'
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['getattribute'] = function(block) {
  var attribute = block.getFieldValue ("ATTRIBUTE"); 
  var obj = Blockly.Python.valueToCode(block, "OBJECT", Blockly.Python.ORDER_ATOMIC)
  //alert ( 'attribute: ' + attribute + ' obj: ' + obj)
  var code = obj + '.' + attribute;
  //alert ( 'my code: ' + code )
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['sprite'] = function(block) {
  var code = 'pygame.sprite.Sprite()';
  return [code, Blockly.Python.ORDER_NONE]; 
}

Blockly.Python['spritegroup'] = function(block) {
  var code = 'pygame.sprite.Group()';
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['addsprite'] = function(block) {  
  var sprite = Blockly.Python.valueToCode(block, "SPRITE", Blockly.Python.ORDER_ATOMIC)
  var group = Blockly.Python.valueToCode(block, "GROUP", Blockly.Python.ORDER_ATOMIC)
  var code = group + '.add(' + sprite + ')\n';
  return code; 
};

Blockly.Python['drawsprites'] = function(block) {  
  var group = Blockly.Python.valueToCode(block, "GROUP", Blockly.Python.ORDER_ATOMIC)
  var surface = Blockly.Python.valueToCode(block, "SURFACE", Blockly.Python.ORDER_ATOMIC)
  var code = group + '.draw(' + surface + ')\npygame.display.update()\n';
  return code; 
};

Blockly.Python['setattribute'] = function(block) {
  var attribute = block.getFieldValue ("ATTRIBUTE"); 
  var obj = Blockly.Python.valueToCode(block, "OBJECT", Blockly.Python.ORDER_ATOMIC)
  var value = Blockly.Python.valueToCode(block, "VALUE", Blockly.Python.ORDER_ATOMIC)
  var code = obj + '.' + attribute + '=' + value + '\n';
  return code; 
};

Blockly.Python['getscreen'] = function(block) {
  var width = Blockly.Python.valueToCode(block, "WIDTH", Blockly.Python.ORDER_ATOMIC)
  var height = Blockly.Python.valueToCode(block, "HEIGHT", Blockly.Python.ORDER_ATOMIC)  
  var code = 'pygame.display.set_mode((' + width + ',' + height + '),pygame.RESIZABLE)';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['fillobject'] = function(block) {
  var obj = Blockly.Python.valueToCode(block, "OBJECT", Blockly.Python.ORDER_ATOMIC)
  var color = Blockly.Python.valueToCode(block, "COLOR", Blockly.Python.ORDER_ATOMIC)
  var code = obj + '.fill(pygame.Color(' + color + '));\n';
  return code; 
};

Blockly.Python['spritecollide'] = function(block) {
  var sprite = Blockly.Python.valueToCode(block, "SPRITE", Blockly.Python.ORDER_ATOMIC)
  var group = Blockly.Python.valueToCode(block, "GROUP", Blockly.Python.ORDER_ATOMIC)
  var code = 'pygame.sprite.spritecollide(' + sprite + ',' + group + ',False)';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['spritecolliderect'] = function(block) {
  var sprite1 = Blockly.Python.valueToCode(block, "SPRITE1", Blockly.Python.ORDER_ATOMIC)
  var sprite2 = Blockly.Python.valueToCode(block, "SPRITE2", Blockly.Python.ORDER_ATOMIC)
  var code = 'pygame.sprite.collide_rect(' + sprite1 + ',' + sprite2 + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['include'] = function(block) {
  var filename = Blockly.Python.valueToCode(block, "FILENAME", Blockly.Python.ORDER_ATOMIC)
  var code = 'from ' + filename.substring(1,filename.length-1) + ' import *\n';
  return code;
};

Blockly.Python['exec'] = function(block) {
  var expression = Blockly.Python.valueToCode(block, "EXPRESSION", Blockly.Python.ORDER_ATOMIC)
  var code = expression.substring(1,expression.length-1) + '\n';
  return code;
};

Blockly.Python['movesprite'] = function(block) {
  var sprite = Blockly.Python.valueToCode(block, "SPRITE", Blockly.Python.ORDER_ATOMIC)
  var deltaX = Blockly.Python.valueToCode(block, "DELTAX", Blockly.Python.ORDER_ATOMIC)
  var deltaY = Blockly.Python.valueToCode(block, "DELTAY", Blockly.Python.ORDER_ATOMIC)
  var code = 
                 sprite + '.rect.left = ' + sprite + '.rect.left + ' + deltaX + '\n' + 
                 sprite + '.rect.top = ' + sprite + '.rect.top + ' + deltaY + '\n'
  return code
};

Blockly.Python['drawsurfacetext'] = function(block) {  
  var x       = Blockly.Python.valueToCode(block, "X",       Blockly.Python.ORDER_ATOMIC)
  var y       = Blockly.Python.valueToCode(block, "Y",       Blockly.Python.ORDER_ATOMIC)
  var color   = Blockly.Python.valueToCode(block, "COLOR",   Blockly.Python.ORDER_ATOMIC)
  var size    = Blockly.Python.valueToCode(block, "SIZE",    Blockly.Python.ORDER_ATOMIC)  
  var txt     = Blockly.Python.valueToCode(block, "TEXT",    Blockly.Python.ORDER_ATOMIC)
  var surface = Blockly.Python.valueToCode(block, "SURFACE", Blockly.Python.ORDER_ATOMIC)  
  color = 'pygame.Color(' + color + ')'
  txt = 'str(' + txt + ')' 
  var code = 
      "_text = pygame.font.Font('freesansbold.ttf'," + size + ").render (" + txt + ",True," + color + ")\n" + 
      "_rect = _text.get_rect()\n" + 
      "_rect.x = " + x + "\n" + 
      "_rect.y = " + y + "\n" +        
      surface + ".blit (_text,_rect)\n" + 
      "pygame.display.update()\n";   
  
  return code;
};

Blockly.Python['positionpart'] = function(block) {
  var position = Blockly.Python.valueToCode(block, "POSITION", Blockly.Python.ORDER_ATOMIC)
  var xy = block.getFieldValue ("XY")
  var code;
  if (xy == 'X') {
    code = position + '[0]' + '# ' + xy;   
  } else { // y
    code = position + '[1]' + '# ' + xy;
  }
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['setspriteimage'] = function(block) {  
  var sprite = Blockly.Python.valueToCode(block, "SPRITE",    Blockly.Python.ORDER_ATOMIC)
  var image  = Blockly.Python.valueToCode(block, "IMAGE",    Blockly.Python.ORDER_ATOMIC)
  var code = 
      sprite + ".image =" + image + "\n" + 
      sprite + ".rect=(" + image + ".get_rect())\n" +
      sprite + ".rect.left = 0\n" + 
      sprite + ".rect.top = 0\n" + 
      sprite + ".newX = 0\n" + 
      sprite + ".rotation = 0\n" + 
      sprite + ".newY = 0\n";
      
  
  return code;
};

Blockly.Python['locatesprite'] = function(block) {
  var sprite = Blockly.Python.valueToCode(block, "SPRITE", Blockly.Python.ORDER_ATOMIC)
  var position = Blockly.Python.valueToCode(block, "POSITION", Blockly.Python.ORDER_ATOMIC)
  var code = 
             sprite + '.newX =' + position + '[0]\n' + 
             sprite + '.newY  =' + position + '[1]\n' +
             sprite + '.rect.left =' + position + '[0]\n' + 
             sprite + '.rect.top  =' + position + '[1]\n';
  return code;
};

Blockly.Python['rotatesprite'] = function(block) {
  var sprite = Blockly.Python.valueToCode(block, "SPRITE", Blockly.Python.ORDER_ATOMIC)
  var angle = Blockly.Python.valueToCode(block, "ANGLE", Blockly.Python.ORDER_ATOMIC)
  var image = Blockly.Python.valueToCode(block, "IMAGE", Blockly.Python.ORDER_ATOMIC)
  var code = sprite + '.image      = pygame.transform.rotate (' + sprite + '.baseImage,'  + angle + ')\n' + 
             sprite + '.rectOffset = ' + sprite + '.image.get_rect(center=' + sprite + '.baseImage.get_rect().center)\n';
  return code;
};

Blockly.Python['drawrotatedsprite'] = function(block) {
  var sprite = Blockly.Python.valueToCode(block, "SPRITE", Blockly.Python.ORDER_ATOMIC)
  var surface = Blockly.Python.valueToCode(block, "SURFACE", Blockly.Python.ORDER_ATOMIC)

  var code = 
             'if not hasattr (' + sprite + ', \'rectOffset\'):\n' + 
             '   ' + sprite + '.rectOffset = (0,0)\n' + 
             sprite + '.rect.left = ' + sprite + '.rect.left + ' + sprite + '.rectOffset[0]\n' + 
             sprite + '.rect.top = ' + sprite + '.rect.top + ' + sprite + '.rectOffset[1]\n' + 
             surface + '.blit (' + sprite + '.image, (' + sprite + '.rect.left,' + sprite + '.rect.top ))\n' + 
             sprite + '.rect.left = ' + sprite + '.rect.left - ' + sprite + '.rectOffset[0]\n' + 
             sprite + '.rect.top = ' + sprite + '.rect.top - ' + sprite + '.rectOffset[1]\n'; 
             
  return code;
};

Blockly.Python['drawsprite'] = function(block) {
  var sprite = Blockly.Python.valueToCode(block, "SPRITE", Blockly.Python.ORDER_ATOMIC)
  var surface = Blockly.Python.valueToCode(block, "SURFACE", Blockly.Python.ORDER_ATOMIC)
  
  //screen.blit(playerSprite.image, playerSprite.rect)
  //pygame.display.update()  

  var code = surface + '.blit(' + sprite + '.image,' + sprite + '.rect)\n' + 
             'pygame.display.update()\n' 
             /*
             'if not hasattr (' + sprite + ', \'rectOffset\'):\n' + 
             '   ' + sprite + '.rectOffset = (0,0)\n' + 
             */
             
  return code;
};


Blockly.Python['setspritevector'] = function(block) {
  var sprite = Blockly.Python.valueToCode(block, "SPRITE", Blockly.Python.ORDER_ATOMIC)
  var x = Blockly.Python.valueToCode(block, "X", Blockly.Python.ORDER_ATOMIC)
  var y = Blockly.Python.valueToCode(block, "Y", Blockly.Python.ORDER_ATOMIC)

  var code = 
             sprite + '.newX = ' + sprite + '.rect.left\n' + 
             sprite + '.newY = ' + sprite + '.rect.top\n' + 
             sprite + '.deltaX = ' + x + '\n' + 
             sprite + '.deltaY = ' + y + '\n'
             
  return code;
};

Blockly.Python['setspriterotation'] = function(block) {
  var sprite = Blockly.Python.valueToCode(block, "SPRITE", Blockly.Python.ORDER_ATOMIC)
  var angle = Blockly.Python.valueToCode(block, "ANGLE", Blockly.Python.ORDER_ATOMIC)

  var code = sprite + '.rotation = 0\n' + 
             '# Set rotation to ' + angle + ' yo \n' + 
             sprite + '.deltaAngle = ' + angle + '\n'; 
             
  return code;
};

Blockly.Python['movespritevector'] = function(block) {
  var sprite = Blockly.Python.valueToCode(block, "SPRITE", Blockly.Python.ORDER_ATOMIC)
  var surface = Blockly.Python.valueToCode (block, "SURFACE", Blockly.Python.ORDER_ATOMIC)

  var code = 
             sprite + '.rotation = ' + sprite + '.rotation + ' + sprite + '.deltaAngle\n' +   
             sprite + '.image      = pygame.transform.rotate (' + sprite + '.baseImage,'  + sprite + '.rotation)\n' + 
             sprite + '.rectOffset = ' + sprite + '.image.get_rect(center=' + sprite + '.baseImage.get_rect().center)\n' +   
             sprite + '.newX = ' + sprite + '.newX + ' + sprite + '.deltaX\n' + 
             sprite + '.newY = '  + sprite + '.newY + '  + sprite + '.deltaY\n'   +
             sprite + '.rect.left = ' + sprite + '.newX\n' + 
             sprite + '.rect.top = '  + sprite + '.newY\n' +
             'if not hasattr (' + sprite + ', \'rectOffset\'):\n' + 
             '   ' + sprite + '.rectOffset = (0,0)\n' + 
             sprite + '.rect.left = ' + sprite + '.rect.left + ' + sprite + '.rectOffset[0]\n' + 
             sprite + '.rect.top = ' + sprite + '.rect.top + ' + sprite + '.rectOffset[1]\n' + 
             surface + '.blit (' + sprite + '.image, (' + sprite + '.rect.left,' + sprite + '.rect.top ))\n' + 
             sprite + '.rect.left = ' + sprite + '.rect.left - ' + sprite + '.rectOffset[0]\n' + 
             sprite + '.rect.top = ' + sprite + '.rect.top - ' + sprite + '.rectOffset[1]\n';              
             
  return code;
};

Blockly.Python['dospriterotation'] = function(block) {
  var sprite = Blockly.Python.valueToCode(block, "SPRITE", Blockly.Python.ORDER_ATOMIC)
  var surface = Blockly.Python.valueToCode(block, "SURFACE", Blockly.Python.ORDER_ATOMIC)
    
  var code = sprite + '.rotation = ' + sprite + '.rotation + ' + sprite + '.deltaAngle\n' + 
             sprite + '.image      = pygame.transform.rotate (' + sprite + '.baseImage,'  + sprite + '.rotation)\n' + 
             sprite + '.rectOffset = ' + sprite + '.image.get_rect(center=' + sprite + '.baseImage.get_rect().center)\n' + 
             sprite + '.rect.left = ' + sprite + '.rect.left + ' + sprite + '.rectOffset[0]\n' + 
             sprite + '.rect.top = ' + sprite + '.rect.top + ' + sprite + '.rectOffset[1]\n' + 
             surface + '.blit (' + sprite + '.image, (' + sprite + '.rect.left,' + sprite + '.rect.top ))\n' + 
             sprite + '.rect.left = ' + sprite + '.rect.left - ' + sprite + '.rectOffset[0]\n' + 
             sprite + '.rect.top = ' + sprite + '.rect.top - ' + sprite + '.rectOffset[1]\n'; 
             
  return code;
};

Blockly.Python['spriteposition'] = function(block) {
  var sprite = Blockly.Python.valueToCode(block, "SPRITE", Blockly.Python.ORDER_ATOMIC)
  var code = '(' + sprite + '.rect.left,' + sprite + '.rect.top)';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['spritecenter'] = function(block) {
  var sprite = Blockly.Python.valueToCode(block, "SPRITE", Blockly.Python.ORDER_ATOMIC)
  var code = sprite + '.rect.center';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['pygameupdate'] = function(block) {
  var code = "pygame.display.update()\n"
  return code;
};

Blockly.Python['createsprite'] = function(block) {
  var variable = Blockly.Python.valueToCode(block, "VARIABLE", Blockly.Python.ORDER_ATOMIC)
  var image    = Blockly.Python.valueToCode(block, "IMAGE",    Blockly.Python.ORDER_ATOMIC)
  var code = 
     variable + " = pygame.sprite.Sprite()\n" +
     variable + ".image = " + image + "\n" + 
     variable + ".baseImage = " + variable + ".image\n" + 
     variable + ".rect = (" + variable + ".image.get_rect())\n" +
     variable + ".rect.left = 0\n" + 
     variable + ".rect.top = 0\n" + 
     variable + ".deltaAngle = 0\n" + 
     variable + ".deltaX = 0\n" + 
     variable + ".deltaY = 0\n" + 
     variable + ".rotation = 0\n" + 
     variable + ".rectOffset = (0,0)\n" + 
     variable + ".newX = 0\n" + 
     variable + ".newY = 0\n";          
  return code;
};

Blockly.Python ['debugcode'] = function (block) {
  var expressionCode = Blockly.Python.statementToCode (block, 'DEBUGCODE' );  
  var code;
  var waitBlock = 
  'print (\'***  Close this window to continue  *** \')\n ' + 
  ' while True:\n' + 
  '    for event in (pygame.event.get()):\n' + 
  '      if (event.type) == (pygame.KEYDOWN):\n' + 
  '        break\n' 
    
  code = 'try:\n' + expressionCode + '\nexcept Exception as ex:\n  print (\'ERROR===>\' + str(ex) + \'<===\')\n  ' + waitBlock
  return code;
};

Blockly.Python['makesprite'] = function(block) {
  var filename = Blockly.Python.valueToCode(block, "FILENAME", Blockly.Python.ORDER_ATOMIC)
  var code = "makeSprite (" + filename + ")"
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['killsprite'] = function(block) {
  var sprite = Blockly.Python.valueToCode(block, "SPRITE", Blockly.Python.ORDER_ATOMIC)
  var code = 
     sprite + '.kill()\n'           
  return code;
};

Blockly.Python['isprogram'] = function(block) {
  var code = '__name__ == \"__main__\"'
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['isnone'] = function(block) {
  var variable = Blockly.Python.valueToCode(block, "VARIABLE", Blockly.Python.ORDER_ATOMIC)
  var code = variable + ' is None'
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['tuple'] = function(block) {
  var first = Blockly.Python.valueToCode(block, "FIRST", Blockly.Python.ORDER_ATOMIC)
  var second = Blockly.Python.valueToCode(block, "SECOND", Blockly.Python.ORDER_ATOMIC)
  var code = "(" + first + "," + second + ")"
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['createspace'] = function(block) {
  var variable = Blockly.Python.valueToCode(block, "VARIABLE", Blockly.Python.ORDER_ATOMIC)
  var gravity = Blockly.Python.valueToCode(block, "GRAVITY", Blockly.Python.ORDER_ATOMIC)
  
  var code = variable + "=pymunk.Space()\n" + variable + ".gravity=" + gravity + "\n"           
  return code;
};

Blockly.Python['getdrawoptions'] = function(block) {
  var screen = Blockly.Python.valueToCode(block, "SCREEN", Blockly.Python.ORDER_ATOMIC)
  var code = "pymunk.pygame_util.DrawOptions(" + screen + ")"
  return [code, Blockly.Python.ORDER_NONE];
};

// space.debug_draw(draw_options)
Blockly.Python['drawspace'] = function(block) {
  var space = Blockly.Python.valueToCode(block, "SPACE", Blockly.Python.ORDER_ATOMIC)
  var options = Blockly.Python.valueToCode(block, "OPTIONS", Blockly.Python.ORDER_ATOMIC)
  
  var code = space + ".debug_draw(" + options + ")\n"       
  return code;
};

// space.step (value)
Blockly.Python['stepspace'] = function(block) {
  var space = Blockly.Python.valueToCode(block, "SPACE", Blockly.Python.ORDER_ATOMIC)
  var value = Blockly.Python.valueToCode(block, "VALUE", Blockly.Python.ORDER_ATOMIC)
  
  var code = space + ".step(" + value + ")\n"       
  return code;
};

// clock = pygame.time.Clock()
Blockly.Python['createclock'] = function(block) {
  var variable = Blockly.Python.valueToCode(block, "VARIABLE", Blockly.Python.ORDER_ATOMIC)
  
  var code = variable + "= pygame.time.Clock()\n"       
  return code;
};

// clock.tick(rate)
Blockly.Python['syncclock'] = function(block) {
  var variable = Blockly.Python.valueToCode(block, "VARIABLE", Blockly.Python.ORDER_ATOMIC)
  var rate = Blockly.Python.valueToCode(block, "RATE", Blockly.Python.ORDER_ATOMIC)
  
  var code = variable + ".tick(" + rate + ")\n"       
  return code;
};

    
Blockly.Python['addball'] = function(block) {
  var space = Blockly.Python.valueToCode(block, "SPACE", Blockly.Python.ORDER_ATOMIC)
  var radius = Blockly.Python.valueToCode(block, "RADIUS", Blockly.Python.ORDER_ATOMIC)
  var position = Blockly.Python.valueToCode(block, "POSITION", Blockly.Python.ORDER_ATOMIC)
  
  var code = "mass = 1\n" +
             "radius = " + radius + "\n" + 
             "_x=" + position + "[0]\n" +
             "_y=" + position + "[1]\n" +
             "moment = pymunk.moment_for_circle(mass,0," + radius + ")\n" + 
             "body = pymunk.Body(mass,moment)\n" + 
             "body.position = _x,_y\n" + 
             "shape = pymunk.Circle(body," + radius + ")\n" + 
             space + ".add(body,shape)\n"             
  return code;
};

    
Blockly.Python['addtolist'] = function(block) {
  var item = Blockly.Python.valueToCode(block, "ITEM", Blockly.Python.ORDER_ATOMIC)
  var list = Blockly.Python.valueToCode(block, "LIST", Blockly.Python.ORDER_ATOMIC)
  
  var code = list + ".append (" + item + ")\n"             
  return code;
};

// pymunk.Body.STATIC
Blockly.Python['bodytype'] = function(block) {
  var bodytype = block.getFieldValue ("BODYTYPE")
  var code = 'pymunk.Body.' + bodytype;
  return [code, Blockly.Python.ORDER_NONE]; 
};

// body = pymunk.Body(body_type = pymunk.Body.STATIC) # 1    
Blockly.Python['createbody'] = function(block) {
  var variable = Blockly.Python.valueToCode(block, "VARIABLE", Blockly.Python.ORDER_ATOMIC)
  var bodyType = Blockly.Python.valueToCode(block, "BODYTYPE", Blockly.Python.ORDER_ATOMIC)
  var code = variable + '=pymunk.Body(body_type=' + bodyType + ')\n'             
  return code;
};

// body.position (x,y)
Blockly.Python['positionbody'] = function(block) {
  var variable = Blockly.Python.valueToCode(block, "VARIABLE", Blockly.Python.ORDER_ATOMIC)
  var position = Blockly.Python.valueToCode(block, "POSITION", Blockly.Python.ORDER_ATOMIC)
  
  var code = variable + '.position=' + position + '\n'             
  return code;
};

// l1 = pymunk.Segment(body, (-150, 0), (255, 0), 5) # 2
Blockly.Python['createsegment'] = function(block) {
  var variable = Blockly.Python.valueToCode(block, "VARIABLE", Blockly.Python.ORDER_ATOMIC)
  var body = Blockly.Python.valueToCode(block, "BODY", Blockly.Python.ORDER_ATOMIC)
  var point1 = Blockly.Python.valueToCode(block, "POINT1", Blockly.Python.ORDER_ATOMIC)
  var point2 = Blockly.Python.valueToCode(block, "POINT2", Blockly.Python.ORDER_ATOMIC)
  var width = Blockly.Python.valueToCode(block, "WIDTH", Blockly.Python.ORDER_ATOMIC)
  
  var code = variable + '=pymunk.Segment(' + body + ',' + point1 + ',' + point2 + ',' + width + ')\n'             
  return code;
};

// space.add (obj)
Blockly.Python['spaceadd'] = function(block) {
  var space = Blockly.Python.valueToCode(block, "SPACE", Blockly.Python.ORDER_ATOMIC)
  var obj = Blockly.Python.valueToCode(block, "OBJECT", Blockly.Python.ORDER_ATOMIC)
  
  var code = space + '.add (' + obj + ')\n'             
  return code;
};

// body = pymunk.Body(mass, inertia)  
Blockly.Python['createbodymassinertia'] = function(block) {
  var variable = Blockly.Python.valueToCode(block, "VARIABLE", Blockly.Python.ORDER_ATOMIC)
  var mass = Blockly.Python.valueToCode(block, "MASS", Blockly.Python.ORDER_ATOMIC)
  var inertia = Blockly.Python.valueToCode(block, "INERTIA", Blockly.Python.ORDER_ATOMIC)
  
  var code = variable + '=pymunk.Body(' + mass + ',' + inertia + ')\n'             
  return code;
};

// rotation_center_joint = pymunk.PinJoint(body, rotation_center_body, (0,0), (0,0)) # 3
Blockly.Python['createpinjoint'] = function(block) {
  var variable = Blockly.Python.valueToCode(block, "VARIABLE", Blockly.Python.ORDER_ATOMIC)
  var body1 = Blockly.Python.valueToCode(block, "BODY1", Blockly.Python.ORDER_ATOMIC)
  var body2 = Blockly.Python.valueToCode(block, "BODY2", Blockly.Python.ORDER_ATOMIC)
  
  var code = variable + '=pymunk.PinJoint(' + body1 + ',' + body2 + ', (0,0), (0,0))\n'             
  return code;
};

// rotation_limit_joint = pymunk.SlideJoint(body, rotation_limit_body, (-100,0), (0,0), 0, joint_limit) # 2
Blockly.Python['createslidejoint'] = function(block) {
  var variable = Blockly.Python.valueToCode(block, "VARIABLE", Blockly.Python.ORDER_ATOMIC)
  var body1 = Blockly.Python.valueToCode(block, "BODY1", Blockly.Python.ORDER_ATOMIC)
  var body2 = Blockly.Python.valueToCode(block, "BODY2", Blockly.Python.ORDER_ATOMIC)
  var point1 = Blockly.Python.valueToCode(block, "POINT1", Blockly.Python.ORDER_ATOMIC)
  var point2 = Blockly.Python.valueToCode(block, "POINT2", Blockly.Python.ORDER_ATOMIC)
  var jointLimit = Blockly.Python.valueToCode(block, "JOINTLIMIT", Blockly.Python.ORDER_ATOMIC)
  
  var code = 'pymunk.SlideJoint(' + body1 + ',' + body2 + ',' + point1 + ',' + point2 + ',0,' + jointLimit + ')\n'             
  return [code, Blockly.Python.ORDER_NONE]; 
};

// get tuple element 
Blockly.Python['tupleelement'] = function(block) {
  var element = block.getFieldValue ("TUPLEELEMENT");
  var tuple   = Blockly.Python.valueToCode(block, "TUPLE", Blockly.Python.ORDER_ATOMIC);
  
  //alert ( 'element: ' + element + ', tuple: ' + tuple );
  
  var code = tuple + element       
  return [code, Blockly.Python.ORDER_NONE]; 
};

// space.damping = value
Blockly.Python['spacedamping'] = function(block) {
  var space = Blockly.Python.valueToCode(block, "SPACE", Blockly.Python.ORDER_ATOMIC)
  var damping = Blockly.Python.valueToCode(block, "DAMPING", Blockly.Python.ORDER_ATOMIC)
  
  var code = space + '.damping=' + damping + '\n'             
  return code;
};


// var = body.position 
Blockly.Python['bodyposition'] = function(block) {
  var body = Blockly.Python.valueToCode(block, "BODY", Blockly.Python.ORDER_ATOMIC);
  var code = body + '.position'           
  return [code, Blockly.Python.ORDER_NONE]; 
};

// body.start_position = value 
Blockly.Python['setbodystartposition'] = function(block) {
  var body = Blockly.Python.valueToCode(block, "BODY", Blockly.Python.ORDER_ATOMIC);
  var value = Blockly.Python.valueToCode (block, "VALUE", Blockly.Python.ORDER_ATOMIC);
  var code = body + '.start_position ='  + value + '\n';          
  return code; 
};

// var = pymunk.Circle(body, radius)
Blockly.Python['pymunkcircle'] = function(block) {
  var body = Blockly.Python.valueToCode(block, "BODY", Blockly.Python.ORDER_ATOMIC);
  var radius = Blockly.Python.valueToCode(block, "RADIUS", Blockly.Python.ORDER_ATOMIC);
  var code = 'pymunk.Circle(' + body + ',' + radius + ')'           
  return [code, Blockly.Python.ORDER_NONE]; 
};

// circle.elasticity = value 
Blockly.Python['setcircleelasticity'] = function(block) {
  var circle = Blockly.Python.valueToCode(block, "CIRCLE", Blockly.Python.ORDER_ATOMIC);
  var elasticity = Blockly.Python.valueToCode (block, "ELASTICITY", Blockly.Python.ORDER_ATOMIC);
  var code = circle + '.elasticity ='  + elasticity + '\n';          
  return code; 
};

// rotation_center_joint = pymunk.PinJoint(body, rotation_center_body, (0,0), (0,0)) # 3
Blockly.Python['createpinjointpositions'] = function(block) {
  var variable = Blockly.Python.valueToCode(block, "VARIABLE", Blockly.Python.ORDER_ATOMIC)
  var body1 = Blockly.Python.valueToCode(block, "BODY1", Blockly.Python.ORDER_ATOMIC)
  var body2 = Blockly.Python.valueToCode(block, "BODY2", Blockly.Python.ORDER_ATOMIC)
  var position1 = Blockly.Python.valueToCode(block, "POSITION1", Blockly.Python.ORDER_ATOMIC)
  var position2 = Blockly.Python.valueToCode(block, "POSITION2", Blockly.Python.ORDER_ATOMIC)
  var code = variable + '=pymunk.PinJoint(' + body1 + ',' + body2 + ',' + position1 + ',' + position2 + ')\n'             
  return code;
};

// var = space.static_body
Blockly.Python['spacestaticbody'] = function(block) {
  var space = Blockly.Python.valueToCode(block, "SPACE", Blockly.Python.ORDER_ATOMIC);
  var code = space + '.static_body'           
  return [code, Blockly.Python.ORDER_NONE]; 
};

// var = pymunk.moment_for_circle(mass, 0, radius, (0,0))
Blockly.Python['circlemoment'] = function(block) {
  var mass = Blockly.Python.valueToCode(block, "MASS", Blockly.Python.ORDER_ATOMIC);
  var radius = Blockly.Python.valueToCode(block, "RADIUS", Blockly.Python.ORDER_ATOMIC);
  var code = 'pymunk.moment_for_circle(' + mass + ',0,' + radius + ',(0,0))' 
  return [code, Blockly.Python.ORDER_NONE]; 
};

// space.point_query_nearest(p, 0, pm.ShapeFilter())
Blockly.Python['pointquerynearest'] = function(block) {
  var space = Blockly.Python.valueToCode(block, "SPACE", Blockly.Python.ORDER_ATOMIC);
  var point = Blockly.Python.valueToCode(block, "POINT", Blockly.Python.ORDER_ATOMIC);
  var code = space + '.point_query_nearest(' + point + ',0,pymunk.ShapeFilter())' 
  return [code, Blockly.Python.ORDER_NONE]; 
};

// var.shape
Blockly.Python['toshape'] = function(block) {
  var obj = Blockly.Python.valueToCode(block, "OBJECT", Blockly.Python.ORDER_ATOMIC);
  var code = obj + '.shape'; 
  return [code, Blockly.Python.ORDER_NONE]; 
};

// var.position
Blockly.Python['toposition'] = function(block) {
  var obj = Blockly.Python.valueToCode(block, "OBJECT", Blockly.Python.ORDER_ATOMIC);
  var code = obj + '.position'; 
  return [code, Blockly.Python.ORDER_NONE]; 
};

// mouse_body.position.get_distance(shape.body.position)
Blockly.Python['getdistance'] = function(block) {
  var position1 = Blockly.Python.valueToCode(block, "POSITION1", Blockly.Python.ORDER_ATOMIC);
  var position2 = Blockly.Python.valueToCode(block, "POSITION2", Blockly.Python.ORDER_ATOMIC);
  var code = position1 + '.get_distance(' + position2 + ')'
  return [code, Blockly.Python.ORDER_NONE]; 
};

// var.position
Blockly.Python['tobody'] = function(block) {
  var obj = Blockly.Python.valueToCode(block, "OBJECT", Blockly.Python.ORDER_ATOMIC);
  var code = obj + '.body'; 
  return [code, Blockly.Python.ORDER_NONE]; 
};

// pymunk.DampedSpring(mouse_body, shape.body, (0,0), (0,0), rest_length, 1000, 10)
Blockly.Python['createdampedspring'] = function(block) {
  var body1     = Blockly.Python.valueToCode(block, "BODY1", Blockly.Python.ORDER_ATOMIC)
  var body2     = Blockly.Python.valueToCode(block, "BODY2", Blockly.Python.ORDER_ATOMIC)
  var position1 = Blockly.Python.valueToCode(block, "POSITION1", Blockly.Python.ORDER_ATOMIC)
  var position2 = Blockly.Python.valueToCode(block, "POSITION2", Blockly.Python.ORDER_ATOMIC)
  var len       = Blockly.Python.valueToCode(block, "LENGTH", Blockly.Python.ORDER_ATOMIC) 
  var inertia   = Blockly.Python.valueToCode(block, "INERTIA", Blockly.Python.ORDER_ATOMIC)  
  var mass      = Blockly.Python.valueToCode(block, "MASS", Blockly.Python.ORDER_ATOMIC)
  
  var code = 'pymunk.DampedSpring(' + body1 + ',' + body2 + ',' + position1 + ',' + position2 + ',' + len + ',' + inertia + ',' + mass + ')\n'             
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['none'] = function(block) { 
  return ['None', Blockly.Python.ORDER_NONE]; 
};

// space.remove (item)
Blockly.Python['spaceremove'] = function(block) {
  var space = Blockly.Python.valueToCode(block, "SPACE", Blockly.Python.ORDER_ATOMIC)
  var item = Blockly.Python.valueToCode(block, "ITEM", Blockly.Python.ORDER_ATOMIC)

  var code = space + '.remove (' + item + ')\n' 
  return code;
};

Blockly.Python['float'] = function(block) {
  var value = Blockly.Python.valueToCode(block, "VALUE", Blockly.Python.ORDER_ATOMIC)
  var code = 'float(' + value + ')' 
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['int'] = function(block) {
  var value = Blockly.Python.valueToCode(block, "VALUE", Blockly.Python.ORDER_ATOMIC)
  var code = 'int(' + value + ')' 
  return [code, Blockly.Python.ORDER_NONE];
};

// pymunk.Segment(body, (-150, 0), (255, 0), 5) # 2
Blockly.Python['getsegment'] = function(block) {
  var body = Blockly.Python.valueToCode(block, "BODY", Blockly.Python.ORDER_ATOMIC)
  var point1 = Blockly.Python.valueToCode(block, "POINT1", Blockly.Python.ORDER_ATOMIC)
  var point2 = Blockly.Python.valueToCode(block, "POINT2", Blockly.Python.ORDER_ATOMIC)
  var width = Blockly.Python.valueToCode(block, "WIDTH", Blockly.Python.ORDER_ATOMIC)
  
  var code = 'pymunk.Segment(' + body + ',' + point1 + ',' + point2 + ',' + width + ')\n'             
  return [code, Blockly.Python.ORDER_NONE];
};

// var = pymunk.moment_for_circle(mass, 0, radius, (0,0))
Blockly.Python['polymoment'] = function(block) {
  var mass = Blockly.Python.valueToCode(block, "MASS", Blockly.Python.ORDER_ATOMIC);
  var fp = Blockly.Python.valueToCode(block, "FP", Blockly.Python.ORDER_ATOMIC);
  var code = 'pymunk.moment_for_poly(' + mass + ',' + fp + ')' 
  return [code, Blockly.Python.ORDER_NONE]; 
};

// var = pymunk.Poly(body, fp)
Blockly.Python['pymunkpoly'] = function(block) {
  var body = Blockly.Python.valueToCode(block, "BODY", Blockly.Python.ORDER_ATOMIC);
  var fp = Blockly.Python.valueToCode(block, "FP", Blockly.Python.ORDER_ATOMIC);
  var code = 'pymunk.Poly(' + body + ',' + fp + ')'           
  return [code, Blockly.Python.ORDER_NONE]; 
};
// var = pymunk.DampedRotarySpring(r_flipper_body, r_flipper_joint_body, 0.15, 20000000,900000)
Blockly.Python['createdampedrotaryspring'] = function(block) {
  var body1     = Blockly.Python.valueToCode(block, "BODY1", Blockly.Python.ORDER_ATOMIC)
  var body2     = Blockly.Python.valueToCode(block, "BODY2", Blockly.Python.ORDER_ATOMIC)
  var restAngle = Blockly.Python.valueToCode(block, "RESTANGLE", Blockly.Python.ORDER_ATOMIC)
  var stiffness = Blockly.Python.valueToCode(block, "STIFFNESS", Blockly.Python.ORDER_ATOMIC)
  var damping   = Blockly.Python.valueToCode(block, "DAMPING", Blockly.Python.ORDER_ATOMIC) 
  
  var code = 'pymunk.DampedRotarySpring(' + body1 + ',' + body2 + ',' + restAngle + ',' + stiffness + ',' + damping + ')'             
  return [code, Blockly.Python.ORDER_NONE];
};

//r_flipper_body.apply_impulse_at_local_point(Vec2d.unit() * 40000, (-100,0))
Blockly.Python['applyimpulse'] = function(block) {
  var body = Blockly.Python.valueToCode(block, "BODY", Blockly.Python.ORDER_ATOMIC)
  var impulse = Blockly.Python.valueToCode(block, "IMPULSE", Blockly.Python.ORDER_ATOMIC)
  var point = Blockly.Python.valueToCode(block, "POINT", Blockly.Python.ORDER_ATOMIC)

  var code = body + '.apply_impulse_at_local_point (' + impulse + ',' + point + ')\n' 
  return code;
};

Blockly.Python['collisioncategory'] = function(block) {
  var category   = block.getFieldValue ("CATEGORY");  
  var code = 'categories=' + category;
  return [code, Blockly.Python.ORDER_NONE];
};

//var = pymunk.ShapeFilter(categories=0b1000)
Blockly.Python['shapefilter'] = function(block) {
  var category = Blockly.Python.valueToCode(block, "CATEGORY", Blockly.Python.ORDER_ATOMIC)  
  var code = 'pymunk.ShapeFilter(' + category + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

// var = pymunk.Circle(body, radius, offset)
Blockly.Python['pymunkcircleoffset'] = function(block) {
  var body = Blockly.Python.valueToCode(block, "BODY", Blockly.Python.ORDER_ATOMIC);
  var radius = Blockly.Python.valueToCode(block, "RADIUS", Blockly.Python.ORDER_ATOMIC);
  var offset = Blockly.Python.valueToCode(block, "OFFSET", Blockly.Python.ORDER_ATOMIC);
  var code = 'pymunk.Circle(' + body + ',' + radius + ',' + offset + ')'           
  return [code, Blockly.Python.ORDER_NONE]; 
};


Blockly.Python['getarrayelement'] = function(block) {
  var element   = block.getFieldValue ("ELEMENT");
  var array = Blockly.Python.valueToCode(block, "ARRAY", Blockly.Python.ORDER_ATOMIC);
  var code = array + '[' + element + ']'
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['setarrayelement'] = function(block) {
  var element   = block.getFieldValue ("ELEMENT");
  var array = Blockly.Python.valueToCode(block, "ARRAY", Blockly.Python.ORDER_ATOMIC);
  var value = Blockly.Python.valueToCode(block, "VALUE", Blockly.Python.ORDER_ATOMIC);
  var code = array + '[' + element + ']=' + value + '\n'
  return code; 
};

Blockly.Python['callmethod'] = function(block) {
  var method = block.getFieldValue ("METHOD"); 
  var obj = Blockly.Python.valueToCode(block, "OBJECT", Blockly.Python.ORDER_ATOMIC)
  var code = obj + '.' + method + '\n';
  return code; 
};

// var = pymunk.Vec2d (position) 
Blockly.Python['createvec2d'] = function(block) {
  var position = Blockly.Python.valueToCode(block, "POSITION", Blockly.Python.ORDER_ATOMIC);
  var code = 'pymunk.Vec2d(' + position + ')'           
  return [code, Blockly.Python.ORDER_NONE]; 
};

// Vec2d  
Blockly.Python['vec2d'] = function(block) {
  var code = 'Vec2d'           
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['returnmethod'] = function(block) {
  var method = block.getFieldValue ("METHOD"); 
  var obj = Blockly.Python.valueToCode(block, "OBJECT", Blockly.Python.ORDER_ATOMIC)
  var code = obj + '.' + method;
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['isblack'] = function(block) {
  var position = Blockly.Python.valueToCode(block, "POSITION", Blockly.Python.ORDER_ATOMIC)
  var screen = Blockly.Python.valueToCode(block, "SCREEN", Blockly.Python.ORDER_ATOMIC)
  
  var code = 'isBlack (' + position + '[0],' + position + '[1],' + screen + ')';
  return [code, Blockly.Python.ORDER_NONE]; 
};


Blockly.Python['wasdpressed'] = function(block) {
  var keys = Blockly.Python.valueToCode(block, "WASD", Blockly.Python.ORDER_ATOMIC)
  var ch = Blockly.Python.valueToCode(block, "CH", Blockly.Python.ORDER_ATOMIC)

  var code = 'allDown (' + keys + ',' + ch + ')';
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['wasdreleased'] = function(block) {
  var keys = Blockly.Python.valueToCode(block, "WASD", Blockly.Python.ORDER_ATOMIC)
  var ch = Blockly.Python.valueToCode(block, "CH", Blockly.Python.ORDER_ATOMIC)

  var code = 'allUp (' + keys + ',' + ch + ')';
  return [code, Blockly.Python.ORDER_NONE]; 
};
Blockly.Python['getxoffset'] = function(block) {
  var keys = Blockly.Python.valueToCode(block, "WASD", Blockly.Python.ORDER_ATOMIC)
  var offset = Blockly.Python.valueToCode(block, "OFFSET", Blockly.Python.ORDER_ATOMIC)

  var code = 'getXOffsets (' + keys + ',' + offset + ')';
  return [code, Blockly.Python.ORDER_NONE]; 
};
Blockly.Python['getyoffset'] = function(block) {
  var keys = Blockly.Python.valueToCode(block, "WASD", Blockly.Python.ORDER_ATOMIC)
  var offset = Blockly.Python.valueToCode(block, "OFFSET", Blockly.Python.ORDER_ATOMIC)

  var code = 'getYOffsets (' + keys + ',' + offset + ')';
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['getwasdoffset'] = function(block) {
  var keys = Blockly.Python.valueToCode(block, "WASD", Blockly.Python.ORDER_ATOMIC)
  var offset = Blockly.Python.valueToCode(block, "OFFSET", Blockly.Python.ORDER_ATOMIC)
  var xy = block.getFieldValue ("XY"); 

  var code = 'get' + xy + 'Offsets (' + keys + ',' + offset + ')';
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['wasdpressedreleased'] = function(block) {
  var keys = Blockly.Python.valueToCode(block, "WASD", Blockly.Python.ORDER_ATOMIC)
  var ch = Blockly.Python.valueToCode(block, "CH", Blockly.Python.ORDER_ATOMIC)
  var pressedReleased = block.getFieldValue ("PRESSEDRELEASED"); 

  var code = pressedReleased + '(' + keys + ',' + ch + ')';
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['setdictionary'] = function(block) {  
  var variable = Blockly.Python.valueToCode(block, "VARIABLE", Blockly.Python.ORDER_ATOMIC)
  var index = Blockly.Python.valueToCode(block, "INDEX", Blockly.Python.ORDER_ATOMIC)
  var value = Blockly.Python.valueToCode(block, "VALUE", Blockly.Python.ORDER_ATOMIC)
  var code = 'if ' + variable + ' == None:\n' + 
             '  ' + variable + ' = {}\n' + 
             variable + '[' + index + '] = ' + value + '\n'; 
  
  return code; 
};

Blockly.Python['readdictionary'] = function(block) {  
  var variable = Blockly.Python.valueToCode(block, "VARIABLE", Blockly.Python.ORDER_ATOMIC)
  var index = Blockly.Python.valueToCode(block, "INDEX", Blockly.Python.ORDER_ATOMIC)
  var defaultValue = Blockly.Python.valueToCode(block, "DEFAULT", Blockly.Python.ORDER_ATOMIC)
  var code = 'readDictionary (' + variable + ',' + index + ',' + defaultValue + ')'
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['mixerbusy'] = function(block) {  
  return ["pygame.mixer.get_busy()", Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['deletedictionary'] = function(block) {  
  var variable = Blockly.Python.valueToCode(block, "VARIABLE", Blockly.Python.ORDER_ATOMIC)
  var code = variable + ' = {}\n'
  return code; 
};



