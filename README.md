#Thermostat

[![Code Climate](https://codeclimate.com/github/nadavmatalon/thermostat/badges/gpa.svg)](https://codeclimate.com/github/nadavmatalon/thermostat)

##Table of Contents

* [Screenshot](#screenshot)
* [General Description](#general-description)
* [Functional Description](#functional-description)
* [See it Live on Github](#see-it-live-on-github)
* [How to Install the App Locally](#how-to-install-the-app-locally)
* [Browsers](#browsers)
* [Testing](#testing)
* [Credit](#credit)
* [License](#license)


##Screenshot

<table>
  <tr>
    <td align="center" width='600px'>
      <a
        <img src="http://cdn1.vox-cdn.com/assets/4586999/lyric-orange.jpg" />
      </a>
    </td>
  </tr>
</table>


##General Description

This [JavaScript](http://en.wikipedia.org/wiki/JavaScript) app implements
a thermostat interface simulator, coupled with a
local temperature widget for London, UK.

The app was created as an exercise in buiding a
[JavaScript](http://en.wikipedia.org/wiki/JavaScript) application,
using the [Sinatra](http://www.sinatrarb.com/) framework,
[jQuery](http://jquery.com) and [JSON](http://www.json.org/) functionality
by following [TDD](http://en.wikipedia.org/wiki/Test-driven_development) methodology
(testing was done with [Jasmine](http://jasmine.github.io/2.0/introduction.html)).

__Update__ (4.9.2014): the local temperature indicator window now changes it's background
color according to the current temperature on a scale that ranges between blue for cold weather
to red for a hot one.

__Update__ (10.11.2014): refactored the entire code. Changes included splitting the
JavaScript code into distinct files, refactoring the tests and updating the
weather widget UI.


##Functional Description

__Thermostat__

* The thermostat default is 20°
* The user can increase the temp by clicking the '+' button
* The user can decrease the temp by clicking the '-' button
* clicking the 'Reset' button resets the temperature to 20° and turns
  on the 'power saving mode'
* The minimum temperature is 10°
* The 'Power Saving Mode' is on by default
* If the 'Power Saving Mode' is turned on, the maximum temperature is 25°
* If the 'Power Saving Mode' is turned off, the maximum temperature is 35°
* If the thermostat's temp is set above 25° and the 'Power Saving Mode' is
  turned on, the temperature is automatically set back down to 25°
* The thermostat changes the color of display based on the selected temperature:
    * Green: under 18°
    * Orange: between 18° - 24°
    * Red: above 24°