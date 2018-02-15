var apiService = require("../Services/coinmarketcapApi");
class mainController{
    index(req, res){
        res.send("index du MainController");
    }

    async priceNow(req, res){
        let datas = await apiService.now(req.params.code);
        let price = Math.round(datas[0].price_eur * 100) / 100;

        {

        }

        res.send("Le prix du "+ req.params.code+" est de "+price+"€ !");
    }
}

module.exports = mainController;