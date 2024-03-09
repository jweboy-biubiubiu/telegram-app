import TelegramBot from "node-telegram-bot-api";
import "dotenv/config";

const bot = new TelegramBot(process.env.TOKEN!, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Welcome 👏👏👏");
});

bot.onText(/\/my/, async (msg) => {
  const data = await bot.getMe();
  bot.sendMessage(msg.chat.id, JSON.stringify(data, null, 2));
});

bot.onText(/\/updates/, async (msg) => {
  const data = await bot.getUpdates();
  bot.sendMessage(msg.chat.id, JSON.stringify(data, null, 2));
});

bot.onText(/\/commands/, async (msg) => {
  const data = await bot.getMyCommands();
  bot.sendMessage(msg.chat.id, JSON.stringify(data, null, 2));
});

console.log("Bots is running");
