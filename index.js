import axios from 'axios';
import 'dotenv/config';


try {
    const fetchData = async () => {
        const result = await axios.get(`${process.env.UPHOLD_TICKER_API_URL}/USD-BTC`);
        const date = new Date();
        console.log(date.toLocaleTimeString());
        console.log(result.data);
    }

    setInterval(fetchData, 5000);

} catch (err) {
    console.log("An error ocurred while while running the bot: ", err);
    process.exit(1);
}