const Telegraf = require("telegraf");
const dotenv = require("dotenv");
const axios = require("axios");

// Setup dotenv.
dotenv.config();
// dfsfs
// DarkSky.
const conf = {
  apiToken: process.env.FORECAST_TOKEN,
  latitude: 46.867515,
  longitude: 32.001542,
  lang: "ru",
  units: "si",
  extend: "hourly"
};

const url = `https://api.darksky.net/forecast/${conf.apiToken}/${
  conf.latitude
},${conf.longitude}`;

axios
  .get(url, {
    params: {
      extend: conf.extend,
      lang: conf.lang,
      units: conf.units
    }
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

const bot = new Telegraf(process.env.BOT_TOKEN);
// bot.start(ctx => ctx.reply("Welcome"));
// bot.help(ctx => ctx.reply("Send me a sticker"));
// bot.on("sticker", ctx => ctx.reply("👍"));
// bot.hears("hi", ctx => ctx.reply("Hey there"));
bot.on("message", function(ctx, next) {
  ctx.telegram.sendMessage(ctx.message.chat.id, "Много букв");
});
bot.launch();
