import Telegraf from 'telegraf';
import dotenv from 'dotenv';
import TelegrafWit from 'telegraf-wit';

// Services.
import ForecastService from './services/forecast.service';
import ForecastEntities from './entites/forecast.entites';

// Controllers.
import ForecastController from './controllers/forecast.controller';

// Setup dotenv.
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);
const wit = new TelegrafWit(process.env.WIT_TOKEN);
const forecastService = new ForecastService();
const forecastEntities = new ForecastEntities();
const forecastController = new ForecastController();

bot.telegram.getMe().then((botInfo) => {
  bot.options.username = botInfo.username;
});

// function timeConverter(timestamp) {
//   const a = new Date(timestamp * 1000);
//   const months = ['Jan', 'Feb', 'Mar', 'Apr',
//   'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//   const year = a.getFullYear();
//   const month = months[a.getMonth()];
//   const date = a.getDate();
//   const hour = a.getHours();
//   const min = a.getMinutes();
//   return `${date} ${month} ${year} ${hour} ${min}`;
// }

bot.on('text', (ctx) => wit
  .meaning(ctx.message.text)
  .then((res) => {
    if ('currentForecast' in res.entities) {
      forecastController.currentForecast(forecastService, forecastEntities, ctx);
    }
    return false;
  }));

bot.startPolling();
