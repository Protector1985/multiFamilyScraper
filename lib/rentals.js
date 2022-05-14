const puppeteer = require('puppeteer')
const clickRightArrow = require('./utilities/clickPagerRight')

async function rentals() {
    const browser = await puppeteer.launch({
        args: ['--proxy-server=socks5://127.0.0.1:9050'],
        headless: false,
      })

    const page = await browser.newPage()
    await page.goto('https://bsaonline.com/CD_RentalSearch/RentalPropertySearch?uid=233')
    await page.waitForSelector('input[type=text]')
    await page.type("#Name", "*")
    await page.keyboard.press('Enter')
    
    clickRightArrow(page);

}





module.exports = rentals;