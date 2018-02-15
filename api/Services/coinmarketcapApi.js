https = require("https");
coinMarketCapService = {
    now : function(code) {
        return new Promise( resolve => {
            https.get("https://api.coinmarketcap.com/v1/ticker/"+code.toLowerCase()+"/?convert=EUR", (resp) => {
                let data = '';

                // A chunk of data has been recieved.
                resp.on('data', (chunk) => {
                    data += chunk;
                });

                // The whole response has been received. Print out the result.
                resp.on('end', () => {
                    resolve(JSON.parse(data));
                });

            }).on("error", (err) => {
                console.log("Error: " + err.message);
            });
        });
    }
};

module.exports = coinMarketCapService;
