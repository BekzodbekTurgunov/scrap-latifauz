const {middleware,composer} = require('../../core/bot')

composer.start( ctx=>{
    console.log('working')
    ctx.replyWithHTML(
        `Xurmatli ${ctx.from.first_name} , latifauz botimizga xush kelibsiz\n bot buyruqlari royhati bilan tanishish uchun /help ni kiriting !!!`
    ).then()
})


middleware(composer)