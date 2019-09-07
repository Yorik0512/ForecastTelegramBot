"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _telegraf = _interopRequireDefault(require("telegraf"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var ForecastService = _interopRequireWildcard(require("./services/forecast.service"));

// Services.
// Setup dotenv.
_dotenv["default"].config();

console.log(ForecastService.getData());
var bot = new _telegraf["default"](process.env.BOT_TOKEN); // bot.start(ctx => ctx.reply("Welcome"));
// bot.help(ctx => ctx.reply("Send me a sticker"));
// bot.on("sticker", ctx => ctx.reply("👍"));
// bot.hears("hi", ctx => ctx.reply("Hey there"));

bot.on('message', function (ctx) {
  ctx.telegram.sendMessage(ctx.message.chat.id, 'Много букв');
});
bot.launch();
//# sourceMappingURL=index.js.map
