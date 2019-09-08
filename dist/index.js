"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _telegraf = _interopRequireDefault(require("telegraf"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _telegrafWit = _interopRequireDefault(require("telegraf-wit"));

var _forecast = _interopRequireDefault(require("./services/forecast.service"));

// Services.
// Setup dotenv.
_dotenv["default"].config(); // console.log(new ForecastService().getCurrentData());


var bot = new _telegraf["default"](process.env.BOT_TOKEN);
var wit = new _telegrafWit["default"](process.env.WIT_TOKEN);
var forecast = new _forecast["default"]();
bot.telegram.getMe().then(function (botInfo) {
  bot.options.username = botInfo.username;
});
bot.on('text', function (ctx) {
  console.log(2);
  return wit.meaning(ctx.message.text).then(function (res) {
    var userName = ctx.message.from.username;
    if ('hello' in res.entities) return ctx.reply("\u041F\u0440\u0438\u0432\u0435\u0442\u0438\u043A\u0438 @".concat(userName));

    if ('dayForecast' in res.entities) {
      console.log(forecast.getCurrentData());
      return ctx.reply("@".concat(userName, ", \u0441\u0435\u0439\u0447\u0430\u0441 \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u044E \u043D\u0430 \u043D\u0435\u0431\u043E"));
    } // return ctx.reply(JSON.stringify(ctx, null, 2));


    return false;
  });
});
bot.startPolling();
//# sourceMappingURL=index.js.map
