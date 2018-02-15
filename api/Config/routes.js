module.exports = {
    "get" : {
        "/" : "mainController:index",
        "/price/:code/now" : "mainController:priceNow"
    },
    "post" : {}
};