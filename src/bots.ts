import TelegramBot from "node-telegram-bot-api";
import "dotenv/config";

export const config = {
  runtime: "edge",
};

const bot = new TelegramBot(process.env.TOKEN!, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Welcome 👏👏👏");
});

bot.onText(/\/my/, async (msg) => {
  const data = await bot.getMe();
  console.log("my msg=>", JSON.stringify(data, null, 2));
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

process.on("uncaughtException", function (error) {
  console.log("\x1b[31m", "Exception: ", error, "\x1b[0m");
});

process.on("unhandledRejection", function (error: any, p) {
  console.log("\x1b[31m", "Error: ", error.message, "\x1b[0m");
});
