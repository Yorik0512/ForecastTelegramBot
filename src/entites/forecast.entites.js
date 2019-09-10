import * as weatherIcon from '../configs/weatherIcon.config';

export default class ForecastEntities {
  currentForecast(data, userName) {
    const {
      summary, windSpeed, windGust, temperature, icon, windBearing,
    } = data;
    return `@${userName}, сейчас ${summary.toLowerCase()}${weatherIcon.default[icon]}, 
    температура ${temperature.toFixed(0)}℃, 
    скорость ветра ${windSpeed.toFixed(1)} (м/с),
    порывы до ${windGust.toFixed(1)} (м/с),
    Угол ${windBearing}`;
  }
}
