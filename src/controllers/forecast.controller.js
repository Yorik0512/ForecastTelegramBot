class Forecast {
  currentForecast(forecastService, forecastEntities, ctx) {
    const forecastData = forecastService.getCurrentForecast();
    const userName = ctx.message.from.username;
    forecastData.then((data) => {
      const msg = forecastEntities.currentForecast(data, userName);
      return ctx.reply(msg);
    });
  }
}

const ForecastController = new Forecast();
export default ForecastController;
