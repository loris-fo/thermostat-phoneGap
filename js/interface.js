var thermostat = new Thermostat();

$(document).ready(function() {
  $('#temperature').text(thermostat.temperature);
  $('.IncreaseTemp').click(function(event) {
    event.preventDefault();
    thermostat.increaseTemp();
    $('#temperature').text(thermostat.temperature);
  });
  $('.DecreaseTemp').click(function(event) {
    event.preventDefault();
    thermostat.decreaseTemp();
    $('#temperature').text(thermostat.temperature);
  });
  $('.Reset').click(function(event) {
    event.preventDefault();
    thermostat.tempReset();
    $('#temperature').text(thermostat.temperature);
  });

  $('.PSM-on').click(function(event) {
    event.preventDefault();
    thermostat.powerSavingOn();
    $('#temperature').text(thermostat.temperature);
  });

  $('.PSM-off').click(function(event) {
    event.preventDefault();
    thermostat.powerSavingOff();
    $('#temperature').text(thermostat.temperature);
  });
});

