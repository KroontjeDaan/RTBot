const Discord = require("discord.js")
require("dotenv").config()
const env = process.env

const client = new Discord.Client({
    intents:    [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log('Logged in as TelloRadio.')
})

client.on("messageCreate", (message) => {
    if(message.content.toLowerCase() == "test"){
        message.reply("Test succesfully executed!")
    }
})

client.login(env.BotToken)