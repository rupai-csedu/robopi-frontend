Blockly.Blocks['sensor_get_distance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get distance from sensor");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['sensor_is_obstacle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("obstacle detected");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['sensor_get_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get color");
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};