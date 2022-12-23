let reporter = require('cucumber-html-reporter')
let date = new Date()
let currentDate =
    date.getDate() + '_' + (date.getMonth() + 1) + '_' + date.getFullYear() + '_' + date.getHours() + '_' + date.getMinutes() + '_' + date.getMilliseconds()


let options = {
    threads: 3,
    brandTitle: 'Playwright BDD Framework',
    theme: 'bootstrap',
    jsonFile: 'report/cucumber_report.json',
    output: 'report/cucumber_report_' + currentDate + '.html',
    reportSuiteAsScenarios: true,
    showTestOutput: true,
    scenarioTimestamp: true,
    storeScreenshots: true,
    launchReport: true,
    metadata: {
        'App version': '1.0',
        'Test Environment': 'QA'
    }
}

reporter.generate(options)