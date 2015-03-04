var Thermostat = function() {
  this.temperature = 20;
  this.powerSave = true;
  this.colorTemp = 'Orange';
};

Thermostat.prototype.increaseTemp = function() {

  if (this.powerSave === true && this.temperature < 25){
    this.temperature += 1;
  }
  else {
    if(this.powerSave === false && this.temperature < 35) {
      this.temperature += 1;
    };

  };

};

Thermostat.prototype.decreaseTemp = function() {
  if (this.temperature > 10) {
    this.temperature -= 1;

  };

};

Thermostat.prototype.tempReset = function() {
  this.temperature = 20;

};

Thermostat.prototype.powerSavingOff = function() {
  this.powerSave = false;
};

Thermostat.prototype.powerSavingOn = function() {
  if(this.temperature > 25) {
    this.temperature = 25;
  };
};

Thermostat.prototype.energyRating = function() {
  if(this.temperature < 18) {
    return 'Low usage';
  }
  else if(this.temperature < 24 && this.temperature >= 18) {
    return 'Medium usage';
  }
  else {
    return "High usage";
  }
};

