describe('Thermostat', function() {

  var thermostat;

    beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('On initialization:', function() {

    it('Is on 20 degrees', function() {

      expect(thermostat.temperature).toEqual(20);

    });

  });

  describe('When on, the thermostat can:', function() {

    it('Increase temperature', function() {

      thermostat.increaseTemp();
      expect(thermostat.temperature).toEqual(21);

    });

    it('Decrease temperature', function() {

      thermostat.decreaseTemp();
      expect(thermostat.temperature).toEqual(19);

    });

  });

});
