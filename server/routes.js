let router = require('express').Router();
let controllers = require('./controllers');

router
    .get('/ping/', function(req, res) {
        res.send('ok');
    })
    .get('/', controllers.getContent);

module.exports = router;