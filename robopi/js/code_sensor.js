Blockly.Python['sensor_get_distance'] = function(block) {
  
  var code = 'getDistanceFromSensor()';
  
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensor_is_obstacle'] = function(block) {
  
  var code = 'obstacleDetected()';
  
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensor_get_color'] = function(block) {
  
  var code = 'getColorFromSensor()';
  
  return [code, Blockly.Python.ORDER_NONE];
};