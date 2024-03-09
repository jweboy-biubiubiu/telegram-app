"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
require("dotenv/config");
const bot = new node_telegram_bot_api_1.default(process.env.TOKEN, { polling: true });
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Welcome 👏👏👏");
});
bot.onText(/\/my/, (msg) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield bot.getMe();
    bot.sendMessage(msg.chat.id, JSON.stringify(data, null, 2));
}));
bot.onText(/\/updates/, (msg) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield bot.getUpdates();
    bot.sendMessage(msg.chat.id, JSON.stringify(data, null, 2));
}));
bot.onText(/\/commands/, (msg) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield bot.getMyCommands();
    bot.sendMessage(msg.chat.id, JSON.stringify(data, null, 2));
}));
