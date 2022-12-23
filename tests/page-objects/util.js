class util {

    async waitUntiPageLoads() {
        await page.waitForLoadState('domcontentloaded')
    }

    async navigateTo() {
        await page.goto(process.env.BASE_URL)
    }
}
module.exports = { util }