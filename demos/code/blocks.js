
Blockly.Blocks['loadimage']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
    this.appendValueInput("FILENAME")
        .appendField("Load Image, Filename:");
   this.setInputsInline(true);        
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['imagesize']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput()
        .appendField("Get ")        
        .appendField(new Blockly.FieldDropdown([
                                                ["width", "get_size()[0]"],
                                                ["height", "get_size()[1]"]
                                               ]), "WIDTHHEIGHT");     
   this.appendValueInput("IMAGE")
        .appendField("of image:");
   this.setInputsInline(true);        
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['pygameinit'] = {
  init: function() {   
    this.appendDummyInput()
        .appendField("Init");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['fullscreen']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
    this.appendDummyInput()
        .appendField("Get Full Screen Surface");       
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['pygameevent']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
    this.appendDummyInput()
        .appendField("Get Pygame Events");       
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['eventtype']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("EVENT")
       .appendField("Type of event:");       
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['events']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput()
        .appendField("Pygame Event:")        
        .appendField(new Blockly.FieldDropdown([
                                                ["key down",   "KEYDOWN"],
                                                ["key up",     "KEYUP"],
                                                ["mouse down", "MOUSEBUTTONDOWN"],
                                                ["mouse up",   "MOUSEBUTTONUP"],
                                                ["mouse move", "MOUSEMOTION"],                                                
                                                ["quit",       "QUIT"],
                                                ["resize",     "VIDEORESIZE"]
                                               ]), "EVENT");       
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['drawimage'] = {
  init: function() {   
    this.appendValueInput("IMAGE")
        .appendField("Draw image");
    this.appendValueInput("SURFACE")
        .appendField("on surface");        
    this.appendValueInput("POSITION")
        .appendField("at Position:");                
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['partialscreen']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput()
       .appendField("Get Partial Screen Surface");       
   this.appendValueInput("WIDTH")
       .appendField("width");
   this.appendValueInput("HEIGHT")
       .appendField("height");
   this.appendValueInput("MODE")
       .appendField("screen mode");
   this.setInputsInline(true);        
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['screenmode']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput()
        .appendField("Screen Mode") 
        .appendField(new Blockly.FieldDropdown([
                                                ["Double Buffered", "DOUBLEBUF"],
                                                ["Full Screen", "FULLSCREEN"],
                                                ["Hardware Accelerated", "HWSURFACE"],
                                                ["No border or controls", "NOFRAME"],
                                                ["Open GL", "OPENGL"],
                                                ["Resizeable", "RESIZABLE"],
                                                ["Resolutiond depends on system", "SCALED"]
                                               ]), "MODE");       
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setcaption'] = {
  init: function() {   
    this.appendValueInput("TITLE")
        .appendField("Display Title");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['colors']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput()
        .appendField("Color") 
        .appendField(new Blockly.FieldDropdown([
                                                ["blue", "0,0,128"],
                                                ["green", "0,255,0"],
                                                ["white", "255,255,255"]
                                               ]), "COLOR");       
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['rendertext']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
    this.appendValueInput("TEXT")
        .appendField("Render Text");        
    this.appendValueInput("COLOR")
        .appendField("in color");
    this.setInputsInline(true);         
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['getrect']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
    this.appendValueInput("OBJECT")
        .appendField("Get Rectanble from object");        
    this.setInputsInline(true);         
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['centerrect'] = {
  init: function() {  
    this.appendValueInput("RECT")
        .appendField("Center rect ");   
    this.appendValueInput("X")
        .appendField ( "at X:");        
    this.appendValueInput("Y")
        .appendField("Y:");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['drawtext'] = {
  init: function() {  
    this.appendValueInput("TEXT")
        .appendField("Draw Rendered Text ");   
    this.appendValueInput("RECT")
        .appendField("using rectangle ");         
    this.appendValueInput("SURFACE")
        .appendField("on display surface ");         
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['wait'] = {
  init: function() {  
    this.appendValueInput("SECONDS")
        .appendField("Wait ");   
    this.appendDummyInput()
        .appendField("seconds");         
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['position']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("X")
       .appendField("X:"); 
   this.appendValueInput("Y")
       .appendField("Y:");  
   this.setInputsInline(true);         
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['drawline'] = {
  init: function() {   
    this.appendDummyInput()
        .appendField("Draw line ");
    this.appendValueInput("SURFACE")
        .appendField("on surface");        
    this.appendValueInput("POSITION1")
        .appendField("from position");        
    this.appendValueInput("POSITION2")
        .appendField("to position");        
    this.appendValueInput("COLOR")
        .appendField("with color");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);   
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['drawrect'] = {
  init: function() {   
    this.appendValueInput("SURFACE")
        .appendField("Draw rectangle on surface");                        
    this.appendValueInput("RECT")
        .appendField("using rectangle");                
    this.appendValueInput("COLOR")
        .appendField("with color");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);     
    this.setColour(290);   
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['makerectangle']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput()
       .appendField ("Make rectangle from 2 points:")
   this.appendValueInput("POSITION1")
       .appendField("Upper Left Position:"); 
   this.appendValueInput("POSITION2")
       .appendField("Lower Right Position:");  
   this.setInputsInline(true);         
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['drawcircle'] = {
  init: function() {   
    this.appendValueInput("SURFACE")
        .appendField("Draw circle on surface");                        
    this.appendValueInput("POSITION")
        .appendField("with center");                
    this.appendValueInput("COLOR")
        .appendField("with color");   
    this.appendValueInput("RADIUS")
        .appendField("and radius");         
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);     
    this.setColour(290);   
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['elapsedtime']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
    this.appendValueInput("STARTTIME")
        .appendField("CurrentTime - start time:");         
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['currenttime']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput()
       .appendField ("Current time")
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['fillsurface'] = {
  init: function() {   
    this.appendValueInput("SURFACE")
        .appendField("Fill surface");                                        
    this.appendValueInput("COLOR")
        .appendField("with color");            
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);     
    this.setColour(290);   
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mouseposition']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput()
       .appendField ("Mouse Position")
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['expression']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("EXPRESSION")
       .appendField ("Expression")
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['rotatesurface'] = {
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("SURFACE")
       .appendField("Rotate surface");                                        
   this.appendValueInput("DEGREE")
       .appendField("degrees");  
   this.setInputsInline(true);
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['drawsurface'] = {
  init: function() {   
    this.appendValueInput("NEWSURFACE")
        .appendField("Draw new surface");                                                  
    this.appendValueInput("SURFACE")
        .appendField("on surface");                                                  
    this.appendValueInput("SIZE")
        .appendField("with size");                                                  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);     
    this.setColour(290);   
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['includedef'] = {
  init: function() {   
   this.appendDummyInput()
        .appendField("Include Function") 
        .appendField(new Blockly.FieldDropdown([
                                                ["Rotate Image", "rotate"]
                                               ]), "NAME");                                                    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);     
    this.setColour(290);   
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['getangle']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("POSITION1")
       .appendField("Get angle between position");                                        
   this.appendValueInput("POSITION2")
       .appendField("and position");                                        
   this.setInputsInline(true);        
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['rotateimage']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("IMAGE")
       .appendField("Rotate image");                                        
   this.appendValueInput("DEGREE")
       .appendField("by degree");                                        
   this.setInputsInline(true);        
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['rectcenter']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("RECT")
       .appendField("Get center of rectangle");                                        
   this.setInputsInline(true);        
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['translate']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("POSITION")
       .appendField("Move position");                                        
   this.appendValueInput("DEGREES")
       .appendField("by degree");                                        
   this.appendValueInput("SPEED")
       .appendField("at speed");                                        
   this.setInputsInline(true);        
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['toradians']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("DEGREE")
       .appendField("Get radians from degree");                                        
   this.setInputsInline(true);        
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['imports'] = {
  init: function() {   
    this.appendDummyInput()
        .appendField("Imports");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['waitevent'] = {
  init: function() {   
    this.appendValueInput("EVENT")
        .appendField("Wait for Event");                                                                                                   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);     
    this.setColour(290);   
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['clearevents'] = {
  init: function() {   
    this.appendDummyInput()
        .appendField("Clear Events");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['imagetorect']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("IMAGE")
       .appendField ("Make rectangle from image:")
   this.appendValueInput("POSITION")
       .appendField("Centered at position: ");  
   this.setInputsInline(true);         
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['collisiondetected']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("RECT1")
       .appendField ("Collision detected between rectangle:")
   this.appendValueInput("RECT2")
       .appendField("and rectangle: ");  
   this.setInputsInline(true);         
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['collidepoint']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("RECT")
       .appendField ("Collision detected between rectangle:")
   this.appendValueInput("POSITION")
       .appendField("and position ");  
   this.setInputsInline(true);         
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};
