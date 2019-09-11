import * as weatherIcon from '../configs/weather-icon.config';
import WindRoseService from '../services/wind-rose.service';

class Forecast {
  currentForecast(data, userName) {
    const {
      summary, windSpeed, windGust, temperature, icon, windBearing,
    } = data;
    const windDirection = WindRoseService.direction(windBearing);
    return `@${userName}, сейчас ${summary.toLowerCase()}${weatherIcon.default[icon]}, 
    температура воздуха ${temperature.toFixed(0)}℃,
    ветер ${windDirection},
    скорость ветра ${windSpeed.toFixed(1)} (м/с),
    порывы до ${windGust.toFixed(1)} (м/с)`;
  }
}

const ForecastEntities = new Forecast();
export default ForecastEntities;
