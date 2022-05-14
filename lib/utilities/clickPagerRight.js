async function clickRightArrow(page) {
    await page.waitForSelector('#DetailGrid .t-grid-pager .t-pager .t-arrow-next');
    await page.click('#DetailGrid .t-grid-pager .t-pager .t-arrow-next')
}

module.exports = clickRightArrow