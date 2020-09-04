Blockly.Blocks['drawimage'] = {
  init: function() {
    this.appendValueInput("FILENAME")
        .appendField("Draw Image, Filename:");
    this.appendValueInput("LOCATION")
        .appendField("At Location:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setInputsInline(true);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};