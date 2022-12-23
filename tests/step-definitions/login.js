const { util } = require('../page-objects/util')
const { login } = require('../page-objects/login')
const { Given } = require('@cucumber/cucumber')
const Login = new login()
const Util = new util()

Given('{string} is able to login letcode with {string}', async (user, password) => {
    await Util.navigateTo()
    await Login.loginUser(user, password)
    await Util.waitUntiPageLoads()
})