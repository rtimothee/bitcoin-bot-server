https = require("https");
cryptocompareService = {
    domain: "https://min-api.cryptocompare.com/data",
    methods: {
        price: {
            name: "pricehistorical",
            params: {
                code: "fsym",
                cur: "tsyms",
                time: "ts"
            }
        }
    },

    buildUrl: function (method, req) {
        let url = this.domain + '/';
        url += this.methods[method].name;

        if(this.methods[method].params){
            let tab_params = [];

            for(let param in this.methods[method].params){
                if(this.methods[method].params.hasOwnProperty(param))
                    tab_params.push(this.methods[method].params[param]+'='+req[param]);
            }

            if(tab_params.length > 0){
                url += '?' + tab_params.join('&');
            }
        }

        return url;
    },
    renderDialogFlow: function(data, params){
        let dataObject = JSON.parse(data);
        if (dataObject.Response === "Error") {
            return {
                "devise" : params.code,
                "date"  : new Date(params.time * 1000).toISOString(),
                "currency" : params.cur,
                "Error" : 1,
                "Error message" : dataObject.Message
            }
        }

        return {
            "devise" : params.code,
            "date"  : new Date(params.time * 1000).toISOString(),
            "currency" : params.cur,
            "price" : dataObject[params.code][params.cur],
            "Error" : 0
        };

    },
    price: function (code, date, currency) {
        currency = currency || "USD";
        date = date || Math.floor(Date.now() / 1000);

        return new Promise(resolve => {
            let params = {code : code, cur : currency, time :date};
            let url = this.buildUrl('price', params);
            https.get(url, (resp) => {
                let data = '';

                // A chunk of data has been recieved.
                resp.on('data', (chunk) => {
                    data += chunk;
                });

                // The whole response has been received. Print out the result.
                resp.on('end', () => {
                    resolve(this.renderDialogFlow(data, params));
                });

            }).on("error", (err) => {
                console.log("Error: " + err.message);
                return err;
            });
        });
    }
};

module.exports = cryptocompareService;
