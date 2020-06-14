// Setup empty JS object to act as endpoint for all routes

projectData = {};

// Require Express to run server and routes
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Start up an instance of app

const app = express();

// master fundamentals:
//   server: something that give and receive instructions
//   process: instatiation of set of instructions with memory, executing on cpu; fundamental unit of computation on a computer; particular instance of acting on set of instructions
//   every chrome tab is a process, as is the terminal
//   programs built up from one or more processes
//   server: special type of process, accepting requests and serving responses; long running process that you can communicate with and it'll do something
//   localhost is not a server; it's a domain name that points to 127.0.0.1 (loopback address), an ip address, local address of computer on computer's local network
//   every process hooked onto internet has an ip address
//   an interace has only one ip address; might talk to multiple processes, that all need access to internet
//   wifi card, router has its own ip address
//   every process gets a unique port so it can access internet
//   express app requests port 3000, so it's on localhost:3000, so that's how we can talk to it
//   can have multiple express apps with different ports like 3000 or 3001, up to 65k ports per machine
//   I was running on another port, not port 3000, so not running on our server; probably running on a built-in mac server, which don't have control over; better to easily make server on, perhaps, node.js
//   master html, css, js for web development
//      know high level concepts and subconcepts
//      know practical knowledge, so you're implementing what concepts you're learning
//      general 

 
/* Middleware*/ //when a specific path is called, middleware works
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//handler is a function that handles an event; in Express, you have request handlers, similar to middleware
// Cors for cross origin allowance
app.use(cors()); // will return a middleware function; can only make request to your origin

// Initialize the main project folder
app.use(express.static('dist')); //middleware for get? // https://expressjs.com/en/starter/static-files.html


// Setup Server

const port = 3127;

const server = app.listen(port, function () {
    console.log(`server is running on port: ${port}`);
})


app.get('/all', function (req, res) {
    console.log("In check");
    console.log("projectData in get: ", projectData);
    res.send(projectData);
})


console.log("Before location app.post");
app.post('/location', function (req, res) {
    let ndata = req.body;
    console.log("postData's ndata: ",ndata);
    projectData.lng = ndata.longitude;
    projectData.date = ndata.date;
    projectData.lat = ndata.latitude;
    projectData.city_name = ndata.city_name;
    //serialization: turn json into a string
    res.send(JSON.stringify(projectData));
})

console.log("Before weatherData app.post");
app.post('/weatherData', function(req, res) {
    let wdata = req.body;
    console.log("weatherData's wdata: ",wdata);
    projectData.high_temp = wdata.high_temp;
    projectData.low_temp = wdata.low_temp;
    projectData.clouds = wdata.clouds;
    projectData.precip = wdata.precip;
    res.send(JSON.stringify(projectData));
})

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})