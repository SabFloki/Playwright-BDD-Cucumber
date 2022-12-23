const common = `
--require configuration/cucumber.conf.js
--require tests/step-definitions/**/*.js
--format progress
--format json:./report/cucumber_report.json`

module.exports = {
    default: `${common} features/**/*.feature`
}