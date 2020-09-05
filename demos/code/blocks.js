
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
                                                ["mouse down", "MOUSEBUTTONDOWN"]
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
    this.appendValueInput("X")
        .appendField("at x:");        
    this.appendValueInput("Y")
        .appendField("y:");        
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