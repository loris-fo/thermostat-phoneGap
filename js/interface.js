var thermostat = new Thermostat();

$(document).ready(function() {
  $('#temperature').text(thermostat.temperature);
  $('.IncreaseTemp').click(function() {
    thermostat.increaseTemp();
    $('#temperature').text(thermostat.temperature);
  });
  $('.DecreaseTemp').click(function() {
    thermostat.decreaseTemp();
    $('#temperature').text(thermostat.temperature);
  });
  $('.Reset').click(function() {
    thermostat.tempReset();
    $('#temperature').text(thermostat.temperature);
  });
});

