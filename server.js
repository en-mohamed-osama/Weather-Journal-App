// Setup empty JS object to act as endpoint for all routes
let projectData = {};
const port = 8000;
// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// GET Route to retrieve projectData
app.get('/all', getInfo);
function getInfo(req, res) {
  res.status(200).send(projectData);
}
// POST Route to store date, temp and user input in projectData
const data = [];
app.post('/add', addInfo);

function addInfo(req, res) {
  projectData['date'] = req.body.date;
  projectData['temp'] = req.body.temp;
  projectData['content'] = req.body.content;
  res.send(projectData);
}

// Setup Server
	app.listen(port,() => {
	console.log(`Server up on Port ${port} `);
	})

