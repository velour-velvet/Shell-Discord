import * as dotenv from 'dotenv';
import { Bot } from "./bot";
import container from "./inversify.config";
import { TYPES } from "./types";
dotenv.config()
const bot = container.get<Bot>(TYPES.Bot);
bot.listen().then(() => {
    console.log('Logged in!')
}).catch((error) => {
    console.log('Oh no! ', error)
});
