const {composer,middleware} = require('../../core/bot')
composer.on('sticker', ctx=> ctx.reply('👍'))
composer.hears('hi', ctx => ctx.reply('Hey there'))

middleware(composer)