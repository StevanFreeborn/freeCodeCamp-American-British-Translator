require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const expect = require('chai').expect;
const cors = require('cors');

const fccTestingRoutes = require('./routes/fcctesting');
const runner = require('./test-runner');
const userRoutes = require('./routes/api');

const app = express();

app.use('/public', express.static(process.cwd() + '/public'));
app.use(cors({origin: '*'}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.route('/').get((req, res) => {
    res.sendFile(process.cwd() + '/views/index.html');
}); 

fccTestingRoutes(app);

userRoutes(app);
    
app.use((req, res, next) => {
  res.status(404)
    .type('text')
    .send('Not Found');
});

const portNum = process.env.PORT || 3000;

app.listen(portNum, () => {

  console.log(`Listening on port ${portNum}`);
  
  if (process.env.NODE_ENV==='test') {
    
    console.log('Running Tests...');
    
    setTimeout(() => {

      try {
        runner.run();
      } 
      catch (error) {
        console.log('Tests are not valid:');
        console.error(error);
      }

    }, 1500);

  }
  
});

module.exports = app;