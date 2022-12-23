class login {
    constructor() {
        this.user = 'input[name="email"]'
        this.password = 'input[name="password"]'
        this.login = ''
    }

    async loginUser(user, password) {
        await page.locator(this.user).fill(user)
        await page.locator(this.password).fill(password)
        await page.getByRole('button', { name: 'LOGIN' }).click()

    }

}
module.exports = { login }