import dotenv from "dotenv";
import fetch from "node-fetch";
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
  return await fetch(`${API_URL}?${qs.stringify(params)}`);
};

console.log(weatherFor({ zip: 94040, country: "us" }));
