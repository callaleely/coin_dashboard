const data = {
    routes: [
        "coinMarketData",
        "individualCoinData"
    ],
    parse: parseTypes
}

function parseTypes(route, req, res) {
    
    let newEntry;
    switch(route){
        // CoinMarketData Schema ------------------------------------------------------------------
        case data.routes[0]:
            newEntry = {
                base: req.body.base,
                exchange: req.body.exchange,
                market: req.body.market,
                quote: req.body.quote
            }

            // Validations
            // if(!newEntry.name || !newEntry.email) {
            //     return res.status(400).json({ msg: 'Please include a name and email' });
            // }
            break;

        // CoinMarketData Schema ------------------------------------------------------------------
        case data.routes[0]:
            newEntry = {
                base: req.body.base,
                exchange: req.body.exchange,
                market: req.body.market,
                quote: req.body.quote
            }
        
            // Validations
            // if(!newEntry.name || !newEntry.email) {
            //     return res.status(400).json({ msg: 'Please include a name and email' });
            // }
            break;

        // Default ------------------------------------------------------------------
        default: return res.status(400).json({ msg: `${route} database table does not exist` });
    }
    return newEntry;
}

module.exports = data;