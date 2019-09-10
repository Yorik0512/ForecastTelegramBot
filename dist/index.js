"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _telegraf = _interopRequireDefault(require("telegraf"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _telegrafWit = _interopRequireDefault(require("telegraf-wit"));

var _forecast = _interopRequireDefault(require("./services/forecast.service"));

var _forecast2 = _interopRequireDefault(require("./entites/forecast.entites"));

var _forecast3 = _interopRequireDefault(require("./controllers/forecast.controller"));

// Services.
// Controllers.
// Setup dotenv.
_dotenv["default"].config();

var bot = new _telegraf["default"](process.env.BOT_TOKEN);
var wit = new _telegrafWit["default"](process.env.WIT_TOKEN);
var forecastService = new _forecast["default"]();
var forecastEntities = new _forecast2["default"]();
var forecastController = new _forecast3["default"]();
bot.telegram.getMe().then(function (botInfo) {
  bot.options.username = botInfo.username;
}); // function timeConverter(timestamp) {
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

bot.on('text', function (ctx) {
  return wit.meaning(ctx.message.text).then(function (res) {
    if ('currentForecast' in res.entities) {
      forecastController.currentForecast(forecastService, forecastEntities, ctx);
    }

    return false;
  });
});
bot.startPolling();
//# sourceMappingURL=index.js.map
