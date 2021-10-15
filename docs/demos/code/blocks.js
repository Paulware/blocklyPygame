
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
        .appendField("Get Rectangle from object");        
    this.setInputsInline(true);         
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['spriterect']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
    this.appendValueInput("OBJECT")
        .appendField("Get Rectangle from sprite");        
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
    this.appendValueInput("WIDTH")
        .appendField("using width")
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
    this.appendDummyInput()
        .appendField('fill')
        .appendField(new Blockly.FieldCheckbox(false), 'FILL');        
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
        .appendField ("Play .wav or .mp3 file: ");
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

Blockly.Blocks['makesprite']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("FILENAME")
       .appendField ("Create sprite using image file:")  
   this.setOutput(true, null);
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

Blockly.Blocks['debugcode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Debug Code");

    this.appendStatementInput("DEBUGCODE")
        .setCheck(null);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['spritecolliderect']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("SPRITE1")
       .appendField("these sprites are colliding (");
   this.appendValueInput("SPRITE2")
       .appendField(",");   
   this.appendDummyInput () 
       .appendField (")");   
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

Blockly.Blocks['drawsprite'] = {
  init: function() {   
    this.appendValueInput("SPRITE")
        .appendField("Draw sprite");   
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

Blockly.Blocks['tuple'] = {
  init: function() {   
    this.appendValueInput("FIRST")
        .appendField("(");       
    this.appendValueInput("SECOND")
        .appendField(",");
    this.appendDummyInput()
        .appendField (")");    
    this.setColour(290);
    this.setOutput(true, null);    
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['createspace'] = {
  init: function() {   
    this.appendValueInput("VARIABLE")
        .appendField("Create space variable");       
    this.appendValueInput("GRAVITY")
        .appendField("with gravity");       
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

//pymunk.pygame_util.DrawOptions(screen)
Blockly.Blocks['getdrawoptions'] = {
  init: function() {   
    this.appendValueInput("SCREEN")
        .appendField("pymunk.pygame.util.DrawOptions(");       
    this.appendDummyInput()
        .appendField (")")
    this.setColour(290);
    this.setOutput(true, null);    
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// space.debug_draw(draw_options)
Blockly.Blocks['drawspace'] = {
  init: function() {   
    this.appendValueInput("SPACE")
        .appendField("Draw space");       
    this.appendValueInput("OPTIONS")
        .appendField("with options");       
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// space.step (value)
Blockly.Blocks['stepspace'] = {
  init: function() {   
    this.appendValueInput("SPACE")
        .appendField("Step space");       
    this.appendValueInput("VALUE")
        .appendField("forward by");  
    this.appendDummyInput()
        .appendField("seconds")    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// clock = pygame.Clock
Blockly.Blocks['createclock'] = {
  init: function() {   
    this.appendValueInput("VARIABLE")
        .appendField("Create pygame clock using variable");          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// clock.tick(40)
Blockly.Blocks['syncclock'] = {
  init: function() {   
    this.appendValueInput("VARIABLE")
        .appendField("Synchronize clock variable");          
    this.appendValueInput("RATE")
        .appendField("on per second frame rate of");          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['addball'] = {
  init: function() {   
    this.appendValueInput("SPACE")
        .appendField("Add a ball to space");          
    this.appendValueInput("RADIUS")
        .appendField("with radius"); 
    this.appendValueInput("POSITION")
        .appendField("and x,y position"); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['addtolist'] = {
  init: function() {   
    this.appendValueInput("ITEM")
        .appendField("Add this item");          
    this.appendValueInput("LIST")
        .appendField("to list"); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['createbody'] = {
  init: function() {   
    this.appendValueInput("VARIABLE")
        .appendField("Create body using variable");          
    this.appendValueInput("BODYTYPE")
        .appendField("and body type"); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['bodytype']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput()
        .appendField("Body type") 
        .appendField(new Blockly.FieldDropdown([
                                                ["Dynamic", "DYNAMIC"],
                                                ["Kinematic", "KINEMATIC"],
                                                ["Static", "STATIC"]
                                               ]), "BODYTYPE");       
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['positionbody'] = {
  init: function() {   
    this.appendValueInput("VARIABLE")
        .appendField("Set body"); 
    this.appendValueInput("POSITION")
        .appendField("\'s position");          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['createsegment'] = {
  init: function() {   
    this.appendValueInput("VARIABLE")
        .appendField("Create line segment using variable"); 
    this.appendValueInput("BODY")
        .appendField("for body variable");          
    this.appendValueInput("POINT1")
        .appendField("from point1");          
    this.appendValueInput("POINT2")
        .appendField("to point2");          
    this.appendValueInput("WIDTH")
        .appendField("with width");          
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    // this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['getsegment'] = {
  init: function() {   
    this.appendValueInput("BODY")
        .appendField("Segment for body");          
    this.appendValueInput("POINT1")
        .appendField("from point1");          
    this.appendValueInput("POINT2")
        .appendField("to point2");          
    this.appendValueInput("WIDTH")
        .appendField("with width");          
        
    this.setColour(290);
    this.setOutput(true, null);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
// space.add (segment)
Blockly.Blocks['spaceadd'] = {
  init: function() {   
    this.appendValueInput("OBJECT")
        .appendField("Add object"); 
    this.appendValueInput("SPACE")
        .appendField("to space");          
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['createbodymassinertia'] = {
  init: function() {   
    this.appendValueInput("VARIABLE")
        .appendField("Create body using variable");          
    this.appendValueInput("MASS")
        .appendField("with mass"); 
    this.appendValueInput("INERTIA")
        .appendField("and inertia"); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// rotation_center_joint = pymunk.PinJoint(body, rotation_center_body, (0,0), (0,0)) # 3
Blockly.Blocks['createpinjoint'] = {
  init: function() {   
    this.appendValueInput("VARIABLE")
        .appendField("Create pin/joint using variable");          
    this.appendValueInput("BODY1")
        .appendField("between body"); 
    this.appendValueInput("BODY2")
        .appendField("and body"); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// rotation_limit_joint = pymunk.SlideJoint(body, rotation_limit_body, (-100,0), (0,0), 0, joint_limit) # 2
Blockly.Blocks['createslidejoint'] = {
  init: function() {   
    this.appendValueInput("BODY1")
        .appendField("Create slide joint between body");          
    this.appendValueInput("BODY2")
        .appendField("and body"); 
    this.appendValueInput("POINT1")
        .appendField("between position1");
    this.appendValueInput("POINT2")
        .appendField("and position2");
    this.appendValueInput("JOINTLIMIT")
        .appendField("using joint limit");
    this.setOutput(true, null); 
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['tupleelement']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput()
        .appendField("Get ")
        .appendField(new Blockly.FieldDropdown([
                                                ["First", "[0]"],
                                                ["Second", "[1]"]
                                               ]), "TUPLEELEMENT");       
   this.appendValueInput("TUPLE")
        .appendField ( "element of tuple")
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};


// space.damping = value
Blockly.Blocks['spacedamping'] = {
  init: function() {   
    this.appendValueInput("SPACE")
        .appendField("Set damping for space");          
    this.appendValueInput("DAMPING")
        .appendField("to"); 
 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// var = Vec2d (position)
Blockly.Blocks['createvec2d']={
  init:function(){
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(0);
    this.appendValueInput("POSITION")
        .appendField("Create Vec2d based on position");          
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

// var = Vec2d (position)
Blockly.Blocks['bodyposition']={
  init:function(){
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(0);
    this.appendValueInput("BODY")
        .appendField("Get position of body");          
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setbodystartposition'] = {
  init: function() {   
    this.appendValueInput("BODY")
        .appendField("Set body"); 
    this.appendValueInput("VALUE")
        .appendField("\'s start position to");          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// var = pymunk.Circle(body, radius)
Blockly.Blocks['pymunkcircle']={
  init:function(){
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(0);
    this.appendValueInput("BODY")
        .appendField("Create pymunk circle using body");          
    this.appendValueInput("RADIUS")
        .appendField("and radius");          
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// circle.elasticity = 0.9999999
Blockly.Blocks['setcircleelasticity'] = {
  init: function() {   
    this.appendValueInput("CIRCLE")
        .appendField("Set elasticity for circle");          
    this.appendValueInput("ELASTICITY")
        .appendField("to"); 
 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// rotation_center_joint = pymunk.PinJoint(body, rotation_center_body, (0,0), (0,0)) # 3
Blockly.Blocks['createpinjointpositions'] = {
  init: function() {   
    this.appendValueInput("VARIABLE")
        .appendField("Create pin/joint using variable");          
    this.appendValueInput("BODY1")
        .appendField("between body"); 
    this.appendValueInput("BODY2")
        .appendField("and body"); 
    this.appendValueInput("POSITION1")
        .appendField("using position1"); 
    this.appendValueInput("POSITION2")
        .appendField("and position2"); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// var = space.static_body
Blockly.Blocks['spacestaticbody']={
  init:function(){
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(0);
    this.appendValueInput("SPACE")
        .appendField("Get static body of space");          
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// var = pymunk.moment_for_circle(mass, 0, radius, (0,0))
Blockly.Blocks['circlemoment']={
  init:function(){
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(0);
    this.appendValueInput("MASS")
        .appendField("Get circle moment using mass");          
    this.appendValueInput("RADIUS")
        .appendField("and radius");          
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['polymoment']={
  init:function(){
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(0);
    this.appendValueInput("MASS")
        .appendField("Get poly moment using mass");          
    this.appendValueInput("FP")
        .appendField("and fp");          
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
  
// space.point_query_nearest(p, 0, pm.ShapeFilter())
Blockly.Blocks['pointquerynearest']={
  init:function(){
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(0);
    this.appendValueInput("SPACE")
        .appendField("Get nearest object in space");          
    this.appendValueInput("POINT")
        .appendField("to point");          
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// var.shape
Blockly.Blocks['toshape']={
  init:function(){
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(0);
    this.appendValueInput("OBJECT")
        .appendField("Get shape of object");                   
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// var.position
Blockly.Blocks['toposition']={
  init:function(){
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(0);
    this.appendValueInput("OBJECT")
        .appendField("Get position of object");                   
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// mouse_body.position.get_distance(shape.body.position)
Blockly.Blocks['getdistance']={
  init:function(){
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(0);
    this.appendValueInput("POSITION1")
        .appendField("Get distance from position1 ");                   
    this.appendValueInput("POSITION2")
        .appendField("to position2");                   
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// var.body
Blockly.Blocks['tobody']={
  init:function(){
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(0);
    this.appendValueInput("OBJECT")
        .appendField("Get body of object");                   
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// pymunk.DampedRotarySpring(mouse_body, shape.body, (0,0), (0,0), rest_length, 1000, 10)
Blockly.Blocks['createdampedrotaryspring']={
  init:function(){
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(290);         
    this.appendValueInput("BODY1")
        .appendField("Create a damped rotary spring between body"); 
    this.appendValueInput("BODY2")
        .appendField("and body"); 
    this.appendValueInput("RESTANGLE")
        .appendField("using rest angle"); 
    this.appendValueInput("STIFFNESS")
        .appendField("and stiffness"); 
    this.appendValueInput("DAMPING")
        .appendField("with damping");     
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


// pymunk.DampedSpring(mouse_body, shape.body, (0,0), (0,0), rest_length, 1000, 10)
Blockly.Blocks['createdampedspring']={
  init:function(){
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(290);         
    this.appendValueInput("BODY1")
        .appendField("Create a damped spring between  body"); 
    this.appendValueInput("BODY2")
        .appendField("and body"); 
    this.appendValueInput("POSITION1")
        .appendField("using position1"); 
    this.appendValueInput("POSITION2")
        .appendField("and position2"); 
    this.appendValueInput("LENGTH")
        .appendField("with length");    
    this.appendValueInput("INERTIA")
        .appendField("inertia");    
    this.appendValueInput("MASS")
        .appendField("and mass"); 
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// space.remove(item)
Blockly.Blocks['spaceremove'] = {
  init: function() {   
    this.appendValueInput("ITEM")
        .appendField("Remove this item");          
    this.appendValueInput("SPACE")
        .appendField("from space"); 
 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

//None
Blockly.Blocks['none']={
  init:function(){
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(0);
    this.appendDummyInput()
        .appendField("None");                                    
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['float']={
  init:function(){
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(0);
    this.appendValueInput("VALUE")
        .appendField("float (");                                    
    this.appendDummyInput()
        .appendField (")");
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['int']={
  init:function(){
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(0);
    this.appendValueInput("VALUE")
        .appendField("int (");                                    
    this.appendDummyInput()
        .appendField (")");
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// var = pymunk.Poly(body, radius)
Blockly.Blocks['pymunkpoly']={
  init:function(){
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(0);
    this.appendValueInput("BODY")
        .appendField("Create pymunk poly using body");          
    this.appendValueInput("FP")
        .appendField("and fp");          
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

//r_flipper_body.apply_impulse_at_local_point(Vec2d.unit() * 40000, (-100,0))
Blockly.Blocks['applyimpulse'] = {
  init: function() {   
    this.appendValueInput("IMPULSE")
        .appendField("Apply impulse");
    this.appendValueInput("BODY")
        .appendField("to body");          
    this.appendValueInput("POINT")
        .appendField("at point");  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

/*
    Player        0b00001 (1)     0b11000 (4, 5)       
    Enemy         0b00010 (2)     0b01110 (2, 3, 4)
    Player Bullet 0b00100 (3)     0b10001 (1, 5)
    Enemy Bullet  0b01000 (4)     0b10010 (2, 5)
    Walls         0b10000 (5)     0b01111 (1, 2, 3, 4)
*/
Blockly.Blocks['collisioncategory']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput()
        .appendField("Collision Category") 
        .appendField(new Blockly.FieldDropdown([
                                                ["Player",         "0b00001"],
                                                ["Enemy",          "0b00010"],
                                                ["Player Bullet",  "0b00100"],
                                                ["Enemy Bullet",   "0b01000"],
                                                ["Walls",          "0b10000"]
                                               ]), "CATEGORY");       
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

// var = pymunk.ShapeFilter(categories=0b1000)
Blockly.Blocks['shapefilter']={
  init:function(){
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(0);
    this.appendValueInput("CATEGORY")
        .appendField("Create shape filter with collision category");                   
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// var = pymunk.Circle(body, radius,offset)
Blockly.Blocks['pymunkcircleoffset']={
  init:function(){
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(0);
    this.appendValueInput("BODY")
        .appendField("Create pymunk circle using body");          
    this.appendValueInput("RADIUS")
        .appendField("with radius");          
    this.appendValueInput("OFFSET")
        .appendField("and offset");          
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// var = pymunk.Circle(body, radius,offset)
Blockly.Blocks['pymunkcircleoffset']={
  init:function(){
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(0);
    this.appendValueInput("BODY")
        .appendField("Create pymunk circle using body");          
    this.appendValueInput("RADIUS")
        .appendField("with radius");          
    this.appendValueInput("OFFSET")
        .appendField("and offset");          
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// var = pymunk.Circle(body, radius,offset)
Blockly.Blocks['pymunkcircleoffset']={
  init:function(){
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(0);
    this.appendValueInput("BODY")
        .appendField("Create pymunk circle using body");          
    this.appendValueInput("RADIUS")
        .appendField("with radius");          
    this.appendValueInput("OFFSET")
        .appendField("and offset");          
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// get an array/list element
Blockly.Blocks['getarrayelement']={
  init:function(){
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(0);
    this.appendValueInput("ARRAY")
        .appendField("Get element")         
        .appendField (new Blockly.FieldTextInput ( "\'first\'"), "ELEMENT")
        .appendField("in array");          
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// set an array/list element
Blockly.Blocks['setarrayelement']={
  init:function(){
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(0);
    this.appendValueInput("ARRAY")
        .appendField("Set element")         
        .appendField (new Blockly.FieldTextInput ( "\'first\'"), "ELEMENT")
        .appendField("in array");  
    this.appendValueInput("VALUE")
        .appendField("to value")    
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);      
    this.setNextStatement(true, null);        
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['callmethod']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput()
        .appendField ("Call method ")
        .appendField (new Blockly.FieldTextInput ( "methodname()"), "METHOD")   
   this.appendValueInput("OBJECT")
       .appendField("in object"); 
   this.setPreviousStatement(true, null);
   this.setInputsInline(true);      
   this.setNextStatement(true, null);      
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['returnmethod']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput()
        .appendField ("Return method ")
        .appendField (new Blockly.FieldTextInput ( "methodname()"), "METHOD")   
   this.appendValueInput("OBJECT")
       .appendField("in object"); 
   this.setInputsInline(true);      
   this.setOutput(true, null);     
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

// Vec2d
Blockly.Blocks['vec2d']={
  init:function(){
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(0);
    this.appendDummyInput()
        .appendField("Vec2d")
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['isblack']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("POSITION")
        .appendField ("Pixel is black at (x,y):  ")
   this.appendValueInput("SCREEN")
       .appendField("in screen"); 
   this.setInputsInline(true);      
   this.setOutput(true, null);     
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};
                                            
Blockly.Blocks['wasdpressedreleased']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput()
     .appendField("Get wasd") 
     .appendField(new Blockly.FieldDropdown([
                                             ["pressed", "allDown"],
                                             ["released", "allUp"],
                                            ]), "PRESSEDRELEASED"); 
   this.appendValueInput("WASD")
        .appendField ("variable:")
   this.appendValueInput("CH")
       .appendField("when character: " );
   this.appendDummyInput () 
       .appendField(" pressed"); 
   this.setInputsInline(true);      
   this.setOutput(true, null);     
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};                                            
Blockly.Blocks['wasdpressed']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("WASD")
        .appendField ("Get wasd pressed:")
   this.appendValueInput("CH")
       .appendField("when character: " );
   this.appendDummyInput () 
       .appendField(" pressed"); 
   this.setInputsInline(true);      
   this.setOutput(true, null);     
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['wasdreleased']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("WASD")
        .appendField ("Get wasd released:")
   this.appendValueInput("CH")
       .appendField("when character: " );
   this.appendDummyInput () 
       .appendField(" released"); 
   this.setInputsInline(true);      
   this.setOutput(true, null);     
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['getwasdoffset']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput()
     .appendField("Get ") 
     .appendField(new Blockly.FieldDropdown([
                                             ["x", "X"],
                                             ["y", "Y"],
                                            ]), "XY");  
   this.appendValueInput("WASD")
        .appendField ("offset based on keys pressed: ")
   this.appendValueInput("OFFSET")
       .appendField("using offset: " );
   this.setInputsInline(true);      
   this.setOutput(true, null);     
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};



Blockly.Blocks['getxoffset']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("WASD")
        .appendField ("Get X offset based on keys pressed: ")
   this.appendValueInput("OFFSET")
       .appendField("using offset: " );
   this.setInputsInline(true);      
   this.setOutput(true, null);     
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['getyoffset']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("WASD")
        .appendField ("Get Y offset based on keys pressed: ")
   this.appendValueInput("OFFSET")
       .appendField("using offset: " );
   this.setInputsInline(true);      
   this.setOutput(true, null);     
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setdictionary'] = {
  init: function() {   
    this.appendValueInput("VARIABLE")
        .appendField ("Remember ");
    this.appendValueInput("INDEX")
        .appendField ("[");
    this.appendValueInput("VALUE")
        .appendField ("] =");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['deletedictionary'] = {
  init: function() {   
    this.appendValueInput("VARIABLE")
        .appendField ("Forget ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['readdictionary'] = {
  init: function() {   
    this.appendValueInput("VARIABLE")
        .appendField (" ");
    this.appendValueInput("INDEX")
        .appendField ("[");
    this.appendValueInput("DEFAULT")
        .appendField ( "] default value: ")
    this.setOutput(true, null);     
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['countdictionary'] = {
  init: function() {   
    this.appendValueInput("VALUE")
        .appendField ("Count the number of times value");
    this.appendValueInput("DICTIONARY")
        .appendField ("appears in dictionary");
    this.setOutput(true, null);     
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['mixerbusy'] = {
  init: function() {   
    this.appendDummyInput()
        .appendField ("Sound is playing");
    this.setOutput(true, null);     
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['stopsound'] = {
  init: function() {   
    this.appendDummyInput()
        .appendField ("Stop playing the sound");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['screenstart'] = {
  init: function() {   
    this.appendValueInput("X")
        .appendField ("Start surface at [x,y]: [");
    this.appendValueInput("Y")
        .appendField (",");
    this.appendDummyInput ()
        .appendField ( "]");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['flipsurface'] = {
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("SURFACE")
       .appendField("Flip sprite");                                        
   this.appendDummyInput()
       .appendField(".image, mirror")
       .appendField(new Blockly.FieldDropdown([
                                                ["Vertically", "vertical"],
                                                ["Horizontally", "horizontal"]
                                              ]), "MIRROR");  
   this.setInputsInline(true);
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['keypressed'] = {
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("CHARACTER")
       .appendField("This key is pressed");                                        
   this.setInputsInline(true);
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['anykeypressed'] = {
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput()
       .appendField("A key is pressed");                                        
   this.setInputsInline(true);
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['pointcollision'] = {
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("POSITION")
       .appendField("Position");                                        
   this.appendValueInput("RECTANGLE")
       .appendField("is inside of rectangle");                                        
   this.setInputsInline(true);
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['spritesheet'] = {
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("FILENAME")
       .appendField("Load the sprite sheet file");                                        
   this.appendValueInput("X")
       .appendField("with ");                                        
   this.appendValueInput("Y")
       .appendField("images horizontally, and  ");                                     
   this.appendValueInput("TOTAL")
       .appendField("images vertically, and ")   
   this.appendDummyInput()
       .appendField("total images")
   this.setInputsInline(true);
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['placesheet'] = {
  init: function() {   
    this.appendValueInput ("SHEET") 
        .appendField ( "Using sheet")
    this.appendValueInput ("COUNT")
        .appendField ( "select sprite");
    this.appendValueInput("POSITION")
        .appendField ("place at position ");
    this.appendValueInput ("SURFACE") 
        .appendField ( "on surface")

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['nextsprite'] = {
  init: function() {   
    this.appendValueInput ( "DELAY")
        .appendField ( "After ")
    this.appendValueInput ("SHEET") 
        .appendField ( "seconds, from sheet")
    this.appendValueInput("POSITION")
        .appendField ("place next sprite at position ");
    this.appendValueInput ("SURFACE") 
        .appendField ( "on surface")

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['donesprite'] = {
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput ("SHEET") 
        .appendField ( "Sprite sheet")
   this.appendDummyInput()
       .appendField("has cycled through all images")
   this.setInputsInline(true);
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['initsheet'] = {
  init: function() {   
   this.appendValueInput ("SHEET") 
        .appendField ( "Reset image for sprite sheet ");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['spritenear'] = {
  init:function(){
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(0);
    this.appendValueInput ("SPRITE") 
         .appendField ( "Sprite ");
    this.appendValueInput ("DISTANCE") 
         .appendField ( "within ");
    this.appendValueInput ("POSITION") 
         .appendField ( "of position ");    
    this.appendValueInput ("OFFSET") 
         .appendField ( "adjust by")   
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['showabsolute'] = {
  init: function() {   
    this.appendValueInput ("SPRITE") 
        .appendField ( "Show absolution location using Sprite ");
    this.appendValueInput ("OFFSET") 
        .appendField ( "adjust by offset position")   

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['jebcolor'] = {
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput()
       .appendField("Jeb Color");                                        
   this.setInputsInline(true);
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['nextcolor'] = {
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput ("JEB")
       .appendField("Next Jeb Color");                                        
   this.setInputsInline(true);
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['listobject'] = {
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour("%{BKY_LISTS_HUE}");
   this.appendValueInput ("LIST")
       .appendField("Create a list object using list:");                                        
   this.setInputsInline(true);
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['rotatelist'] = {
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour("%{BKY_LISTS_HUE}");
   this.appendValueInput ("LIST")
       .appendField("Rotate to next item in list");                                        
   this.setInputsInline(true);
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['loadimagelist'] = {
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour("%{BKY_LISTS_HUE}");
   this.appendValueInput ("SHEET")
       .appendField("Using sprite sheet");                                        
   this.appendValueInput ("LIST")
       .appendField("create a list of images based on index list");                                        
   this.setInputsInline(true);
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['nextimage'] = {
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour("%{BKY_LISTS_HUE}");
   this.appendValueInput ("LIST")
       .appendField("Get next image in image list");                                        
   this.setInputsInline(true);
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['settimer']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput()
        .appendField("Set timer ")        
        .appendField(new Blockly.FieldDropdown([
                                                ["1", "timer1"],
                                                ["2", "timer2"],
                                                ["3", "timer3"],
                                                ["4", "timer4"],
                                                ["5", "timer5"],
                                                ["6", "timer6"],
                                                ["7", "timer7"],
                                                ["8", "timer8"],
                                                ["9", "timer9"]
                                               ]), "TIMER");     
   this.appendValueInput("ADD")
        .appendField("to current time + ");
   this.appendDummyInput()
        .appendField ("seconds")
   this.setInputsInline(true); 
   this.setPreviousStatement(true, null);
   this.setNextStatement(true, null);  
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['timerelapsed']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput()
        .appendField("Timer ")        
        .appendField(new Blockly.FieldDropdown([
                                                ["1", "timer1"],
                                                ["2", "timer2"],
                                                ["3", "timer3"],
                                                ["4", "timer4"],
                                                ["5", "timer5"],
                                                ["6", "timer6"],
                                                ["7", "timer7"],
                                                ["8", "timer8"],
                                                ["9", "timer9"]
                                               ]), "TIMER");     
   this.appendDummyInput()
        .appendField ("has elapsed")
   this.setInputsInline(true);        
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['cyclesheet'] = {
  init: function() {   
    this.appendValueInput("SHEET")
        .appendField("Cycle through sprite sheet"); 
    this.appendValueInput("POSITION")
        .appendField("at position")    
    this.appendValueInput("SURFACE")
        .appendField("on surface");
    this.appendValueInput("DELAY")
        .appendField("delaying ");
    this.appendDummyInput ()
        .appendField ("seconds between images" );    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['spritelist'] = {
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour("%{BKY_LISTS_HUE}");
   this.appendValueInput ("SHEET")
       .appendField("Using sprite sheet");                                        
   this.appendDummyInput ()
       .appendField("create a list of images");
   this.setInputsInline(true);
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['listelement'] = {
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour("%{BKY_LISTS_HUE}");
   this.appendValueInput ("INDEX")
       .appendField("Get element");                                        
   this.appendValueInput ("LIST")
       .appendField("in list");                                        
   this.setInputsInline(true);
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['inputbox'] = {
  init: function() {   
    this.appendValueInput("POSITION")
        .appendField("Create an input at position:"); 
    this.appendValueInput("WIDTH")
        .appendField("with width");
    this.appendDummyInput()
        .appendField("pixels")
    this.setOutput(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['display'] = {
  init: function() {   
    this.appendValueInput("WIDTH")
        .appendField("Create a display with width"); 
    this.appendValueInput("HEIGHT")
        .appendField("pixels, height");
    this.appendValueInput("TITLE")
        .appendField("pixels, and title/caption");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['updatedisplay'] = {
  init: function() {   
   this.appendDummyInput ()
       .appendField("Update the display");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['quit'] = {
  init: function() {   
    this.appendDummyInput ()
       .appendField("Quit");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['update'] = {
  init: function() {   
    this.appendValueInput("OBJECT")
        .appendField("Update class object");
    this.appendValueInput("EVENT")
        .appendField("with event variable");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['label'] = {
  init: function() {   
    this.appendValueInput("POSITION")
        .appendField("Create an label at position:"); 
    this.appendValueInput("WIDTH")
        .appendField("with width");
    this.appendValueInput("VALUE")
        .appendField("pixels, initialized with value ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);        
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['button'] = {
  init: function() {   
    this.appendValueInput("POSITION")
        .appendField("Create a button at position:"); 
    this.appendValueInput("WIDTH")
        .appendField("with width");
    this.appendValueInput("VALUE")
        .appendField("pixels, initialized with value ");
    this.setOutput(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['checkbox'] = {
  init: function() {   
    this.appendValueInput("POSITION")
        .appendField("Create a checkbox at position:"); 
    this.setOutput(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['icon'] = {
  init: function() {   
    this.appendValueInput("ICON")
        .appendField("Set the screen icon to image file ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);        
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['modbusconnect'] = {
  init: function() {   
    this.appendValueInput("MODBUS")
        .appendField("Connect to modbus server object" );
    this.appendValueInput ("IPADDRESS")
        .appendField ( "Located at ipaddress ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);   
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['trycode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Try Code");
    this.appendStatementInput("TRYCODE")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['pause'] = {
  init: function() {   
    this.appendDummyInput()
        .appendField("Wait for user to press Enter");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);        
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['modbus'] = {
  init: function() {   
    this.appendDummyInput()
        .appendField("Create a Modbus object");
    this.setOutput(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['modbusreadfloat'] = {
  init: function() {   
    this.appendValueInput ("ADDRESS")
        .appendField ( "Read float value located at address");
    this.appendValueInput ("MODBUS")
        .appendField ( "using modbus server");
    this.setOutput(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['modbuswritefloat'] = {
  init: function() {   
    this.appendValueInput ("VALUE")
        .appendField ( "Write (float value)");
    this.appendValueInput ("ADDRESS")
        .appendField ( "to address");
    this.appendValueInput ("MODBUS")
        .appendField ( "using modbus server");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);        
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['inputboxreadfloat'] = {
  init: function() {   
    this.appendValueInput ("INPUTBOX")
        .appendField ( "Float value of inputbox");
    this.setOutput(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['inputboxwrite'] = {
  init: function() {   
    this.appendValueInput ("VALUE")
        .appendField ( "Write");
    this.appendValueInput ("INPUTBOX")
        .appendField ( "to inputbox");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);        
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['databaseconnect'] = {
  init: function() {   
    this.appendValueInput ("FILENAME")
        .appendField ( "Connect to file database located in file:");
    this.setOutput(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['slider'] = {
  init: function() {   
    this.appendValueInput ("X")
        .appendField ( "Create a slider at x");
    this.appendValueInput ("Y")
        .appendField ( "y");
    this.appendValueInput ("WIDTH")
        .appendField ( "width");
    this.appendValueInput ("HEIGHT")
        .appendField ( "height");
    this.setOutput(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['pyvisa'] = {
  init: function() {   
    this.appendDummyInput ()
        .appendField ( "Create a pyvisa object");
    this.setOutput(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['esp32bluetooth'] = {
  init: function() {   
    this.appendValueInput ("NAME")
        .appendField ( "BLE object with name");
    this.setOutput(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['esp32ssd1306'] = {
  init: function() { 
    this.appendValueInput ("WIDTH")
        .appendField ( "SSD1306 object with width");
    this.appendValueInput ("HEIGHT")
        .appendField ( "and height");
    this.appendValueInput ("SCL" )
        .appendField ( "using SCL pin" )
    this.appendValueInput ("SDA" )
        .appendField ( "and SDA pin" )
    this.setOutput(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mqttclient'] = {
  init: function() { 
    this.appendValueInput ("ID")
        .appendField ( "MQTTClient with id");
    this.appendValueInput ("SERVER")
        .appendField ( "connected to server located at");
    this.setOutput(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['esp32button'] = {
  init: function() { 
    this.appendValueInput ("PIN")
        .appendField ( "Button connected to pin");
    this.appendDummyInput ()
        .appendField ( "and ground");
    this.setOutput(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['ssd1306setlines'] = {
  init: function() {   
    this.appendValueInput ("LINES")
        .appendField ( "Display lines");
    this.appendValueInput ("OBJECT")
        .appendField ( "on ssd1306 object");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);        
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['pygamedisplay'] = {
  init: function() {   
    this.appendValueInput("WIDTH")
        .appendField("Create a display with width"); 
    this.appendValueInput("HEIGHT")
        .appendField("pixels, height");
    this.appendValueInput("TITLE")
        .appendField("pixels, and title/caption");
    this.setOutput(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['ssd1306menu'] = {
  init: function() {   
    this.appendValueInput("DISPLAY")
        .appendField("Create a menu for ssd1306 display"); 
    this.setOutput(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['addmenupage'] = {
  init: function() {   
    this.appendValueInput ("PAGE")
        .appendField ( "Add page numbered");
    this.appendValueInput ("MENU")
        .appendField ( "to menu");     
    this.appendValueInput ("LINES")
        .appendField ( "show these lines");
    this.appendValueInput ("RESPONSES")
        .appendField ( "handle these responses");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);        
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['piadf4360obj'] = {
  init: function() {   
    this.appendValueInput("CLOCK")
        .appendField("Create an adf4360 object with clock pin"); 
    this.appendValueInput("DATA")
        .appendField("data pin"); 
    this.appendValueInput("LE")
        .appendField("and latch enable"); 
    this.setOutput(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['adf4360obj'] = {
  init: function() {   
    this.appendValueInput("CLOCK")
        .appendField("Create an adf4360 object with clock pin"); 
    this.appendValueInput("DATA")
        .appendField("data pin"); 
    this.appendValueInput("LE")
        .appendField("and latch enable"); 
    this.setOutput(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};