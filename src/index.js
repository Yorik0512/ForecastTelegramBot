import Telegraf from 'telegraf';
import dotenv from 'dotenv';
import TelegrafWit from 'telegraf-wit';

// Services.
import ForecastService from './services/forecast.service';

// Setup dotenv.
dotenv.config();

// console.log(new ForecastService().getCurrentData());

const bot = new Telegraf(process.env.BOT_TOKEN);
const wit = new TelegrafWit(process.env.WIT_TOKEN);
const forecast = new ForecastService();

bot.telegram.getMe().then((botInfo) => {
  bot.options.username = botInfo.username;
});

bot.on('text', (ctx) => {
  console.log(2);
  return wit.meaning(ctx.message.text)
    .then((res) => {
      const userName = ctx.message.from.username;
      if ('hello' in res.entities) return ctx.reply(`Приветики @${userName}`);
      if ('dayForecast' in res.entities) {
        console.log(forecast.getCurrentData());
        return ctx.reply(`@${userName}, сейчас посмотрю на небо`);
      }
      // return ctx.reply(JSON.stringify(ctx, null, 2));
      return false;
    });
});

bot.startPolling();
