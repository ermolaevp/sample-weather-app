import dotenv from "dotenv";
import axios from "axios";
import qs from "qs";

dotenv.config();

interface IWeatherFor {
  zip: number;
  country: string;
  appid?: string;
}

const weatherFor = async ({ zip, country }: IWeatherFor) => {
  const { APP_ID, API_URL } = process.env;
  const params = {
    zip: [zip, country].join(","),
    appid: APP_ID
  };
  const resp = await axios(`${API_URL}?${qs.stringify(params)}`);
  return resp.data;
};

(async function() {
  const { weather, dt } = await weatherFor({ zip: 94040, country: "us" });
  console.log(weather[0].main, new Date(dt * 1000));
})();
