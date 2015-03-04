describe('Thermostat', function() {

  var thermostat;

    beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('On initialization:', function() {

    it('Is on 20 degrees', function() {

      expect(thermostat.temperature).toEqual(20);

    });

    it('Has a maximum temperature of 25 degrees', function() {

      thermostat.increaseTemp();
      thermostat.increaseTemp();
      thermostat.increaseTemp();
      thermostat.increaseTemp();
      thermostat.increaseTemp();
      thermostat.increaseTemp();
      expect(thermostat.temperature).toEqual(25);

    });

    it('Has a minimum temperature of 10 degrees', function() {

      thermostat.decreaseTemp();
      thermostat.decreaseTemp();
      thermostat.decreaseTemp();
      thermostat.decreaseTemp();
      thermostat.decreaseTemp();
      thermostat.decreaseTemp();
      thermostat.decreaseTemp();
      thermostat.decreaseTemp();
      thermostat.decreaseTemp();
      thermostat.decreaseTemp();
      thermostat.decreaseTemp();
      expect(thermostat.temperature).toEqual(10);

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

    it('Reset', function() {

      thermostat.decreaseTemp();
      thermostat.tempReset();
      expect(thermostat.temperature).toEqual(20);

    });

    it('Turn off the Power saving mode', function() {
      thermostat.powerSavingOff();
      thermostat.temperature = 34;
      expect(thermostat.temperature).toEqual(34)

    });

  });

describe("reflects energy usage with a rating", function() {

    it("less than 18 degrees is considered low usage", function() {
      thermostat.temperature = 17;
      expect(thermostat.energyRating()).toEqual("Low usage")
    });

    it("less than 25 degrees is considered medium usage", function() {
      expect(thermostat.energyRating()).toEqual("Medium usage")
    });

    it("25 or above is considered high usage", function() {
      thermostat.temperature = 25;
      expect(thermostat.energyRating()).toEqual("High usage")

    });

  });

});
