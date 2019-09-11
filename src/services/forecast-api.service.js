import axios from 'axios';
import dotenv from 'dotenv';

// Setup dotenv.
dotenv.config();

class ForecastApi {
  constructor() {
    this.host = 'https://api.darksky.net/forecast';
    this.apiToken = process.env.FORECAST_TOKEN;
    this.latitude = 46.867515;
    this.longitude = 32.001542;
    this.lang = 'ru';
    this.units = 'si';
  }

  getCurrentForecast() {
    return axios
      .get(`${this.host}/${this.apiToken}/${this.latitude},${this.longitude}`, {
        params: {
          extend: 'currently',
          lang: this.lang,
          units: this.units,
        },
      })
      .then((response) => response.data.currently)
      .catch((error) => {
        console.log(error); // TODO: Error message for chat.
      });
  }

  getHourlyData() {
    axios
      .get(`${this.host}/${this.apiToken}/${this.latitude},${this.longitude}`, {
        params: {
          extend: 'hourly',
          lang: this.lang,
          units: this.units,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error); // TODO: Error message for chat.
      });
  }
}

const ForecastApiService = new ForecastApi();
export default ForecastApiService;
