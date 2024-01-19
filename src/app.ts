// init discord bot

import { Client, GatewayIntentBits } from 'discord.js'
import * as dotenv from 'dotenv'

dotenv.config()

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
})

client.once('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`)
})

client.login(process.env.DISCORD_TOKEN)
