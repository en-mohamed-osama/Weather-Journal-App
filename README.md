# Weather-Journal App Project
steps to run weather API Demo Application  
1- open this file in code editor and take the path of current folder of server.js  and  change the directory by using command ' cd  project_path '   
2- run command ' npm init '
3- just press enter several times to configure packge.json file choose yes and enter 
4- run command ' npm install express body-parser cors ' to use these dependencies 
5- run command 'node server.js ' you will wake up the server and work on the port
6-  open your browser on ' localhost:8000 '
#-1 
Node and Express should be installed on the local machine.
The project file server.js should require express(), and should create an instance of their app using express. [Done]
The Express app instance should be pointed to the project folder with .html, .css, and .js files. done
#-2 
The ‘cors’ package should be installed in the project from the command line, required in the project file server. [Done]
js, and the instance of the app should be setup to use cors(). done
#-3 
The body-parser package should be installed and included in the project. done
#-4 
Local server should be running and producing feedback to the Command Line through a working callback function. [Done]
#-5
Create API credentials on OpenWeatherMap.com [Done]
#-6
There should be a JavaScript Object named projectData initiated in the file server.js
to act as the app API endpoint.   [Done]
#-7
The personal API Key for OpenWeatherMap API is saved in a named const variable.  [Done]

The API Key variable is passed as a parameter to fetch() .[Done]

Data is successfully returned from the external API.[Done]
#-8
There should be a GET route setup on the server side with the first argument as a string naming the route,
 and the second argument a callback function to return the JS object created at the top of server code. [Done]
#-9
 There should be an asynchronous function to fetch the data from the app endpoint    [Done]
#-10
You should be able to add an entry to the project endpoint using a POST route
 setup on the server side and executed on the client side as an asynchronous function.
 The client side function should take two arguments, the URL to make a POST to, and an object holding the data to POST.
 The server side function should create a new entry in the apps endpoint 
 the named JS object) consisting of the data received from the client side POST.  [Done]
#-11
The input element with the placeholder property set to “enter zip code here” should have an id of zip.
The textarea included in project HTML should have an id of feelings.
The button included in project HTML should have an id of generate.  [Done]
#-12
The div with the id, entryHolder should have three child divs with the ids:
[date-temp-content]                                                   [Done]
#-13

Adds an event listener to an existing HTML button from DOM using Vanilla JS 'wiht out using any libraries'.
In the file app.js, the element with the id of generate should have an addEventListener() method called on it, 
with click as the first parameter, and a named callback function as the second parameter.[Done]

#-14
Sets the properties of existing HTML elements from the DOM using Vanilla JavaScript.
Included in the async function to retrieve that app’s data on the client side,
 existing DOM elements should have their innerHTML properties dynamically set according to data returned by the app route.