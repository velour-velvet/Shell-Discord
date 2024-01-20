import { Client, GatewayIntentBits } from "discord.js";
import * as dotenv from 'dotenv';
import { Container } from "inversify";
import "reflect-metadata";
import { Bot } from "./bot";
import { TYPES } from "./types";
dotenv.config();

const container = new Container();

container.bind<Bot>(TYPES.Bot).to(Bot).inSingletonScope();
container.bind<Client>(TYPES.Client).toConstantValue(new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
}));
container.bind<string>(TYPES.Token).toConstantValue(process.env.TOKEN);

export default container;