var path = require('path')
const cors = require('cors');
const bodyParser = require('body-parser');

const aylien = require("aylien_textapi");
projectData = {}
const dotenv = require('dotenv');
dotenv.config();

const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });

const express = require('express')
const app = express()
app.use(express.static('dist'))
//app.use(express.static('website'));

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

console.log(__dirname)

app.get('/', function (req, res) {
    //res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

console.log('About to start app.post');

app.post('/sentiment', (req, res) => {
    console.log('In app.post');
    console.log('req.body: ',req.body);
    console.log('req.body.formText: ',req.body.formText)
    console.log('res.body: ',res.body);
    const { url2 } = req.body;
    textapi.sentiment({
        //url2
        url: req.body.formText,
        mode: 'document'
    }, (error, data)=> {
        console.log('app.post data: ', data);
        if (error === null) {
            console.log(error);
        }
        res.json(data);
    });
    console.log('End of app.post');
});

