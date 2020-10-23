const { Telegraf,Composer } = require('telegraf')
const token = require('../config')
const bot = new Telegraf('1319827832:AAG8jmJNduRYT7z01qn2aL9WKPKoRfLofek')

const composer = new Composer()
const middleware = (composer) =>
    bot.use(composer.middleware())

bot.launch().then(console.log('Bot is started...'))
//
// if (process.env.ENV === "heroku") {
//     bot.launch({
//         webhook: {
//             domain: process.env.URL,
//             hookPath: '/bot',
//             port: process.env.PORT
//         }
//     }).then()
// } else if (process.env.ENV === "local") {
//     bot.launch().then()
// } else {
//     console.log("Bot can't be started due to wrong environment!")
// }



module.exports = { bot , middleware,composer}