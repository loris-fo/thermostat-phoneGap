describe('Thermostat', function() {

  var thermostat;

    beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('On initialization', function() {

    it('Is on 20 degrees', function() {

      expect(thermostat.temperature).toEqual(20);

    });

  });

});