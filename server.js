let express = require('express');
let body_parser = require('body-parser');

let app = express();

// Require routes file
let index = require('./routes/index');

// Body parser middleware
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: false}));

app.use('/',index);

app.listen(3001, () => {
    console.log('App listening on port 3001!');
});
