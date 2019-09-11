import Telegraf from 'telegraf';
import dotenv from 'dotenv';
import TelegrafWit from 'telegraf-wit';
// Services.
import ForecastApiService from './services/forecast-api.service';
// Entities
import ForecastEntities from './entites/forecast.entites';
// Controllers.
import ForecastController from './controllers/forecast.controller';

// Setup dotenv.
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);
const wit = new TelegrafWit(process.env.WIT_TOKEN);

bot.telegram.getMe().then((botInfo) => {
  bot.options.username = botInfo.username;
});

bot.on('text', (ctx) => wit
  .meaning(ctx.message.text)
  .then((res) => {
    if ('currentForecast' in res.entities) {
      ForecastController.currentForecast(ForecastApiService, ForecastEntities, ctx);
    }
    return false;
  }));

bot.startPolling();
