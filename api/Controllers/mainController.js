//var apiService = require("../Services/coinmarketcapApi");
var apiService = require("../Services/cryptocompareApi");
class mainController{
    index(req, res){
        res.send("index du MainController");
    }

    async priceDate(req, res){

        let datas = await apiService.price(req.params.code, req.query.date);
        //let price = Math.round(datas[0].price_eur * 100) / 100;


        res.json(datas);
    }
}

module.exports = mainController;