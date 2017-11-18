var bodyParser = require('body-parser');
const data = require('../data/result');

module.exports = function(app) {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.get('/api/banks', function(req, res) {


        res.send(data);

    });
    

    
}