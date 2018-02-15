const routes = require(process.env.PWD+'/api/Config/routes');
const controllers = require(process.env.PWD+'/server').controllers;

class Router{
    constructor(app){
        this.app = app;
    }

    watch(){

        for(let method in routes){
            for(let key in routes[method]) {
                this.app[method](key, function (req, res) {
                    var parseRoute = routes[method][key].split(':');
                    var controller = parseRoute[0];
                    var methode = parseRoute[1];

                    controllers[controller][methode](req,res);
                });
            }
        }

    }
}
module.exports =  Router;
