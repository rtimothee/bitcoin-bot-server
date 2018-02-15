const express = require('express');
const app = express();

//Controllers
MainController = require('./api/Controllers/mainController');


module.exports = {
    express: express,
    controllers : {
        mainController : new MainController()
    }
};

Router = require('./api/Services/router.js');
router = new Router(app);
router.watch();

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});


