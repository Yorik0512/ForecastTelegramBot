import Telegraf from 'telegraf';
import dotenv from 'dotenv';

// Services.
import * as ForecastService from './services/forecast.service';

// Setup dotenv.
dotenv.config();

console.log(ForecastService.getData());

const bot = new Telegraf(process.env.BOT_TOKEN);
// bot.start(ctx => ctx.reply("Welcome"));
// bot.help(ctx => ctx.reply("Send me a sticker"));
// bot.on("sticker", ctx => ctx.reply("👍"));
// bot.hears("hi", ctx => ctx.reply("Hey there"));
bot.on('message', (ctx) => {
  ctx.telegram.sendMessage(ctx.message.chat.id, 'Много букв');
});
bot.launch();
