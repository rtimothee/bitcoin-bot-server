//var apiService = require("../Services/coinmarketcapApi");
var apiService = require("../Services/cryptocompareApi");
class mainController{
    index(req, res){
        res.send("index du MainController");
    }

    async priceDate(req, res){
        let datas = await apiService.price(req.params.code, req.query.date);
        res.json(datas);
    }
}

module.exports = mainController;