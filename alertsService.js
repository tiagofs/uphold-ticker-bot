import * as db from './db/index.js'

export const createAlert = async (prices, pricesDate, rate, oscilation, oscilation_tresshold) => {
    console.log(`!!!! Oscilation over ${oscilation_tresshold} !!!! - writting to DB...`);

    try {
        await db.query('INSERT INTO oscilation_alerts (ask, bid, rate, oscilation, oscilation_tresshold, created_at) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;', [prices.ask, prices.bid, rate, oscilation, oscilation_tresshold, pricesDate]);
    } catch (err) {
        console.error(err.message);
    }
}

export const getLastAlertRate = async () => {
    try {
        const result = await db.query('SELECT rate FROM oscilation_alerts ORDER BY created_at DESC LIMIT 1;');
        if (result.rows[0]) {
            return result.rows[0].rate;
        } else {
            return null;
        }
    } catch (err) {
        console.error(err.message);
    }
}