
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
        .appendField("centered at Position:");                
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
       .appendField("Screen Surface");       
   this.appendValueInput("WIDTH")
       .appendField("with width");
   this.appendValueInput("HEIGHT")
       .appendField("and height");
   //this.appendValueInput("and MODE")
   //    .appendField("screen mode");
   this.setInputsInline(true);        
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['partialsurface']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput()
       .appendField("Screen Surface");       
   this.appendValueInput("WIDTH")
       .appendField("with width");
   this.appendValueInput("POSITION")
       .appendField("with position");
   this.appendValueInput("HEIGHT")
       .appendField("and height");
   //this.appendValueInput("and MODE")
   //    .appendField("screen mode");
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
    this.appendDummyInput()
        .appendField ("with fontsize ")
        .appendField (new Blockly.FieldTextInput ( "12"), "SIZE")           
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
    this.setInputsInline(true);     
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

Blockly.Blocks['getkey']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput()
       .appendField ("Get Key from User");
   this.setInputsInline(true);        
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['import'] = {
  init: function() {   
    this.appendValueInput("LIBRARY")
        .appendField ("Import Library");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['pygamekey']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput()
        .appendField("Pygame Key") 
        .appendField(new Blockly.FieldDropdown([
                                                ["Backspace",       "K_BACKSPACE"],
                                                ["Carriage Return", "K_RETURN"]
                                               ]), "KEY");
   this.setInputsInline(true);        
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['screensize']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput()
        .appendField("Get") 
        .appendField(new Blockly.FieldDropdown([
                                                ["width",  "width"],
                                                ["height", "height"]
                                               ]), "WIDTHHEIGHT");
   this.appendValueInput("SURFACE")
        .appendField ("of surface");
   this.setInputsInline(true);        
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['moverect']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
    this.appendValueInput("RECT")
        .appendField("Move rect ");   
    this.appendValueInput("POSITION")
        .appendField ( "by offset"); 
   this.setInputsInline(true);        
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['inflaterect']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
    this.appendValueInput("RECT")
        .appendField("Inflate rect ");   
    this.appendValueInput("POSITION")
        .appendField ( "by x/y position"); 
   this.setInputsInline(true);        
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['eventkey']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
    this.appendValueInput("EVENT")
        .appendField("Key associated with event ");   
   this.setInputsInline(true);        
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['pollevent']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
    this.appendDummyInput()
        .appendField("Poll for event ");   
   this.setInputsInline(true);        
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['playsound'] = {
  init: function() {   
    this.appendValueInput("FILENAME")
        .appendField ("Play .wav file: ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['subpositions']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput()
       .appendField ("Subtract 2 positions: ")
   this.appendValueInput("POSITION1")
       .appendField("Position1:"); 
   this.appendValueInput("POSITION2")
       .appendField("- Position2:");  
   this.setInputsInline(true);         
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['rectposition']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("RECT")
       .appendField("Position (left,top) of rect"); 
   this.setInputsInline(true);         
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['getattribute']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput()
        .appendField ("Get attribute ")
        .appendField (new Blockly.FieldTextInput ( "width"), "ATTRIBUTE")   
   this.appendValueInput("OBJECT")
       .appendField("from object"); 
   this.setInputsInline(true);         
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['sprite']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput()
       .appendField ("Sprite")
   this.setInputsInline(true);         
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['createsprite']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("VARIABLE")
       .appendField ("Create sprite using variable")
   this.appendValueInput("IMAGE")
       .appendField ("and image")
   this.setInputsInline(true); 
   this.setPreviousStatement(true, null);
   this.setNextStatement(true, null);  
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};



Blockly.Blocks['spritegroup']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput()
       .appendField ("Sprite Group")
   this.setInputsInline(true);         
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['addsprite'] = {
  init: function() {   
    this.appendValueInput("SPRITE")
        .appendField ("Add sprite ");
    this.appendValueInput("GROUP")
        .appendField ("to sprite group");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['drawsprites'] = {
  init: function() {   
    this.appendValueInput("GROUP")
        .appendField ("Draw all sprites in group");
    this.appendValueInput("SURFACE")
        .appendField ("on surface");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setattribute'] = {
  init: function() {   
    this.appendValueInput("OBJECT")
        .appendField("Set object");
    this.appendDummyInput()
        .appendField (".attribute ")
        .appendField (new Blockly.FieldTextInput ( "width"), "ATTRIBUTE")    
    this.appendValueInput("VALUE")
        .appendField("to ");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['getscreen']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("WIDTH")
       .appendField("Get a screen with width");
   this.appendValueInput("HEIGHT")
       .appendField("pixels and height");
   this.appendDummyInput ()
       .appendField ("pixels");
   this.setInputsInline(true);         
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['fillobject'] = {
  init: function() {   
    this.appendValueInput("OBJECT")
        .appendField("Fill object");   
    this.appendValueInput("COLOR")
        .appendField("with color ");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['spritecollide']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("SPRITE")
       .appendField("Return collisions between sprite ");
   this.appendValueInput("GROUP")
       .appendField("and group ");       
   this.setInputsInline(true);         
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['include'] = {
  init: function() {   
    this.appendValueInput("FILENAME")
        .appendField("Include .py file:");   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['exec'] = {
  init: function() {   
    this.appendValueInput("EXPRESSION")
        .appendField("Execute expression");   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['movesprite'] = {
  init: function() {  
    this.appendDummyInput()
        .appendField ("Move")  
    this.appendValueInput("SPRITE")
        .appendField("sprite");   
    this.appendValueInput("DELTAX")
        .appendField("x-offset");        
    this.appendValueInput("DELTAY")
        .appendField("y-offset");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['drawsurfacetext'] = {
  init: function() {  
    this.appendValueInput("TEXT")
        .appendField("Display Text ");
    this.appendValueInput("SIZE")
        .appendField("size ")    
    this.appendValueInput("X")
        .appendField("at x");         
    this.appendValueInput("Y")
        .appendField("and y ");
    this.appendValueInput("COLOR")
        .appendField("in color");
    this.appendValueInput("SURFACE")
        .appendField("on surface")    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['positionpart']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput ()
       .appendField ( "Get part")
       .appendField(new Blockly.FieldDropdown([
                                                ["x","X"],
                                                ["y","Y"]
                                               ]), "XY");
   this.appendValueInput("POSITION")
       .appendField("of position");                                               
   this.setInputsInline(true);         
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setspriteimage'] = {
  init: function() {   
    this.appendValueInput("IMAGE")
        .appendField("Set image to");   
    this.appendValueInput("SPRITE")
        .appendField("for sprite");   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['locatesprite'] = {
  init: function() {   
    this.appendValueInput("SPRITE")
        .appendField("Set position of sprite");   
    this.appendValueInput("POSITION")
        .appendField("to");   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['killsprite'] = {
  init: function() {   
    this.appendValueInput("SPRITE")
        .appendField("Delete sprite ");     
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['rotatesprite'] = {
  init: function() {   
    this.appendValueInput("SPRITE")
        .appendField("Rotate sprite");   
    this.appendValueInput("ANGLE")
        .appendField("by degree");   
    //this.appendValueInput("IMAGE")
    //    .appendField("using base image");   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['drawrotatedsprite'] = {
  init: function() {   
    this.appendValueInput("SPRITE")
        .appendField("Draw rotated sprite");   
    this.appendValueInput("SURFACE")
        .appendField("on surface");   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setspritevector'] = {
  init: function() {   
    this.appendValueInput("SPRITE")
        .appendField("Set vector for sprite");   
    this.appendValueInput("X")
        .appendField("using change in X");   
    this.appendValueInput("Y")
        .appendField("and change in Y");   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['movespritevector'] = {
  init: function() {   
    this.appendValueInput("SPRITE")
        .appendField("Move and rotate sprite");   
    this.appendValueInput ("SURFACE")
        .appendField ("on Surface")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setspriterotation'] = {
  init: function() {   
    this.appendValueInput("SPRITE")
        .appendField("Set rotation for sprite");   
    this.appendValueInput("ANGLE")
        .appendField("to angle");     
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['dospriterotation'] = {
  init: function() {   
    this.appendValueInput("SPRITE")
        .appendField("Rotate sprite");   
    //this.appendValueInput("IMAGE")
    //    .appendField("using base image");     
    this.appendValueInput("SURFACE")
        .appendField("on surface");     
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['pygameupdate'] = {
  init: function() {   
    this.appendDummyInput()
        .appendField("Draw images to surface, pygame.display.update()");       
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['spriteposition']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
    this.appendValueInput("SPRITE")
        .appendField("Position of sprite ");   
   this.setInputsInline(true);        
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['spritecenter']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
    this.appendValueInput("SPRITE")
        .appendField("Center of sprite ");   
   this.setInputsInline(true);        
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['isnone'] = {
  init: function() {   
    this.appendValueInput("VARIABLE")
        .appendField("This variable");       
    this.appendDummyInput()
        .appendField(" is None");
    this.setColour(290);
    this.setOutput(true, null);    
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['isprogram'] = {
  init: function() {   
    this.appendDummyInput()
        .appendField("This module is the main program");       
    this.setColour(290);
    this.setOutput(true, null);    
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
