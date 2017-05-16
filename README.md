# Meteo mobile application
## ionic meteo mobile application

This repo contain a cross platform meteo mobile application written in AngularJS using [ionic framework](https://ionicframework.com/). Meteo informations are retrieved using openweather. The mobile application actually work only with French cities, but could be modified to any country. To do this easily, you could overwrite app/www/ressource/Unique_cities2.json with a similiar json file containing desired cities.

#### Dependancies
- ionic

#### Install ionic and meteo App

        $ sudo npm install -g ionic
        $ git clone git@github.com:logan169/Ionic-meteo-App.git
        $ cd ./meteoApp

#### Test the app (Browser)

        $ ionic serve

In order to get a closer feeling of a mobile user experience, I highly suggest that you set the adaptative view option from chrome developement tools if you choose to render the app this way. More information about how to do so could be found [here](https://www.sitepoint.com/how-to-simulate-mobile-devices-with-device-mode-in-chrome/)

#### Test the app on any platform (ios,android,windows phone)

Depending on your platform you may need to install platform related sdk.
replace the <platform> in code below by ios, android or windows
        
        $ ionic plugin add ionic-plugin-keyboard
        $ ionic platform add <platform>
        $ ionic build <platform> 
        $ ionic emulate <platform>

Please note that you could find more information on how to setup platform at the following links: [ios](https://ionicframework.com/docs//resources/platform-setup/mac-setup.html),[android](http://ionicframework.com/docs/v1/ionic-cli-faq/#touch-events),[windows](https://ionicframework.com/docs//resources/platform-setup/windows-setup.html).

##### Mobile App pictures
![meteoApp](/picts/1.png)
![meteoApp](/picts/2.png)
![meteoApp](/picts/3.png)
![meteoApp](/picts/4.png)
![meteoApp](/picts/5.png)
![meteoApp](/picts/6.png)
![meteoApp](/picts/7.png)
![meteoApp](/picts/8.png)
