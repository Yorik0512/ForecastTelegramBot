import axios from 'axios';

class Forecast {
  constructor() {
    this.host = 'https://api.darksky.net/forecast';
    this.apiToken = process.env.FORECAST_TOKEN;
    this.latitude = 46.867515;
    this.longitude = 32.001542;
    this.lang = 'ru';
    this.units = 'si';
    this.extend = 'hourly';
  }

  getData() {
    axios
      .get(`${this.host}/${this.apiToken}/${this.latitude},${this.longitude}`, {
        params: {
          extend: this.extend,
          lang: this.lang,
          units: this.units,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

const ForecastService = new Forecast();
export default ForecastService;
