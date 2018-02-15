const express = require('express');
const app = express();

//Controllers
MainController = require('./api/Controllers/mainController');
var port = process.env.PORT || 8080;

module.exports = {
    express: express,
    controllers : {
        mainController : new MainController()
    }
};

Router = require('./api/Services/router.js');
router = new Router(app); 
router.watch();

app.listen(port, function () {
    console.log('Example app listening on port '+port+'!');
});


