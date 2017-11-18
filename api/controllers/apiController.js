const bodyParser = require('body-parser');
const data = require('../data/result');
const fs = require('fs');


module.exports = function (app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.get('/api/banks', function (req, res) {


        res.send(data);

    });

    app.post('/api/form', function (req, res) {

        const data = JSON.stringify(req.body);


        const ID = fs.readFileSync(__dirname + '/../data/currentID.txt', 'utf8');
        const newID = parseInt(ID) + 1;
        const currentForm = require('../data/forms.json');
        data.id = newID;

        const newForm = Object.assign(currentForm, {[newID]: data});


        fs.writeFile(__dirname + `/../data/forms.json`, JSON.stringify(newForm), 'utf8', (err, data) => {

            if (err) console.log(err);

            fs.writeFile(__dirname + '/../data/currentID.txt', newID, 'utf8', (err, data) => {
                if (err) console.log(err);

                res.send({id: newID});

            })


        });




    });


}