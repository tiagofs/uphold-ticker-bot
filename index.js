import axios from 'axios';
import 'dotenv/config';
import * as alertsService from './alertsService.js';

let lastAlertRate = null;

try {
    const runPriceOscilationAlert = async () => {
        const prices = await fetchTickerPrices('BTC-USD');
        console.log('prices: ', prices);

        const pricesDate = new Date();

        const rate = calculateRate(prices);
        console.log('rate: ', rate);

        const oscilation = await calculateOscilationWithPreviousRate(rate);
        console.log('oscilation: ', oscilation);


        if (Math.abs(oscilation) >= process.env.OSCILATION_TRESSHOLD) {
            await alertsService.createAlert(prices, pricesDate, rate, oscilation, process.env.OSCILATION_TRESSHOLD);
            lastAlertRate = rate;
        }

        console.log(`\n`);
    }

    setInterval(runPriceOscilationAlert, 5000);

} catch (err) {
    console.log("An error ocurred while while running the bot: ", err);
    process.exit(1);
}



const fetchTickerPrices = async (currencyPair) => {
    const result = await axios.get(`${process.env.UPHOLD_TICKER_API_URL}/${currencyPair}`);
    const {ask, bid, currency} = result.data;
    return {ask, bid, currency};
}

const calculateRate = (prices) => {
    return ((Number(prices.ask) + Number(prices.bid)) / 2);
}

const calculateOscilationWithPreviousRate = async (currrentRate) => {
    const rate = await alertsService.getLastAlertRate();
    if (rate) {
        lastAlertRate = Number(rate);
    } else if (!lastAlertRate) {
        lastAlertRate = currrentRate;
    }
    const oscilationPercentage = 100 * ((lastAlertRate - currrentRate ) / ((lastAlertRate + currrentRate) / 2));
    return oscilationPercentage;
}

