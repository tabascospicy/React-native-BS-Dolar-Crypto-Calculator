#Mobile Android React Native App for Aftim Dolar!

if this is your firts time with react native checkout the Docs about the enviroment setup Here https://reactnative.dev/docs/environment-setup click the section with react-native-cli and read the steps carefully

to run the application on Dev Mode with your phone or emulator you will need 

Android SDK (it will come when you install android Studio this is the recommended way)
some drivers listed in the previus docs links 
android ABD Device installed or Connect your android Phone By USB with Developer Mode Enabled

##run NPM install or Yarn add command

open a terminal in the root project directory and run React-native start (with react-native-cli installed)
Open another terminal in the root project directory and run react-native run-android
the cli will proceed to open the app in your emulador or device, sometimes it throws an error the first time so 
try 1 or 2 times more and if the problem continue consult the developer with the error


#Project Structure Explanation

in the SRC folder we can find 8 folders with diferent kind of stuff
##assets/ Here we can find assets for the like images and fonts

##components/ Here we can find the components for the app every part of the app or at least most of it is subdivided in small components which are gathered in a View or inside another component

##Hooks this part is important here We do All important logic Stuff for Our Application, Api calls and calculator process are located in this hooks with their respective name

##services here are some diferent script to declare in this case the axios configs and the context declaration for our app

##themes Here we can find a file exporting a JSON Variable which contain the declaration of the colors for our app

##Views finally the view folder
