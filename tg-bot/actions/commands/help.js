const {composer,middleware} = require('../../core/bot')

composer.command('help', ctx => {
    ctx.replyWithHTML(`<b>/help</b>- barcha buyruqlarni ko'rish\n<b>/latifa</b> - latiflarni qabul qilish.`,{
        parse_mode:"HTML"
    })
})
middleware(composer)