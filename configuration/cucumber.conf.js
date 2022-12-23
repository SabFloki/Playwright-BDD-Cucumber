const { Before, BeforeAll, After, AfterAll, setDefaultTimeout, Status } = require("@cucumber/cucumber")
const { chromium, firefox, webkit } = require('playwright')
const { config } = require("../playwright.config")
const fs = require('fs')
const { globalAgent } = require("http")

require('dotenv').config()
let setBrowser = process.env.setBrowser
setDefaultTimeout(60000)

BeforeAll(async () => {
    switch (process.env.BROWSER) {
        case "firefox":
            console.log('Firefox is being launched')
            global.browser = await firefox.launch({
                headless: false,
                slowMo: 1000,
            })
            break
        case "chrome":
            console.log('Chrome is being launched')
            global.browser = await chromium.launch({
                headless: false,
                slowMo: 1000,
            })
            break
        default:
            console.log('Chrome is launched as default')
            global.browser = await chromium.launch({
                headless: false,
                slowMo: 1000,
            })
    }
})

AfterAll(async () => {
    await global.browser.close()
})

Before(async (scenario) => {
    global.context = await global.browser.newContext({
        recordVideo: {
            dir: 'video/',
        },
    })
    global.page = await global.context.newPage()
    global.newWindow = global.page
})

After(async (scenario) => {
    if (scenario.result.status === Status.FAILED) {
        await page.screenshot({
            path: `./report/screenshots/${scenario.pickle.name}.png`,
            fullpage: true,
        }), "image/png"
    }
    await page.waitForTimeout(3000)
    const videoName = await page.video().path()
    fs.rename(videoName, './video/' + scenario.pickle.name + '.webm',
        async () => await console.log('File is renamed as' + scenario.pickle.name + '.webm'))
    await global.page.close()
    await global.context.close()
})