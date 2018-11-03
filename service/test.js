const cheerio = require('cheerio');
const request = require('superagent');

const getData = async() => {
    try {
        const path = `https://www.ebay.com/sch/Football-Cards/215/i.html?_from=R40&LH_Auction=1&_nkw=panini&LH_Complete=1&LH_Sold=1&rt=nc&_trksid=p2045573.m1684`;
        let result = await request.get(path);
        const $ = cheerio.load(result.text, {decodeEntities: false});

        console.info($('body').html());


    } catch (e) {
        console.error(e);
        return e;
    }
};


getData();