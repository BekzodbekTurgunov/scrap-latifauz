const puppeteer = require('puppeteer')
const fs = require('fs')
let data;
let arr = []
async function latifa(){
    const browser = await puppeteer.launch({
        headless:false,
        slowMo:250
    })
    const page = await browser.newPage()
    await page.goto('https://www.latifa.uz')
    data = await page.$x('//div[@class="bg-white rounded mb-2 p-3"]/div')

    for (let i = 0; i < data.length; i +=3) {
        let latifa = await page.evaluate(el => el.textContent, data[i])
        arr.push(latifa.trim())
    }
    console.log(arr.length)
    fs.writeFileSync('./latifa.json', JSON.stringify(arr,null,4))
    await browser.close()
}
latifa().then()