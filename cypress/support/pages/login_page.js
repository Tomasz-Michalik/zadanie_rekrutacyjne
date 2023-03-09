
export class LoginPage {
    static HOMEPAGE_URL = 'https://www.edu.goit.global/pl/account/login';

    static EMAIL_INPUT_ID = '#user_email'
    static PASSWORD_INPUT_ID = '#user_password'

    visitHomePage() {
        cy.viewport(1980, 1080);
        cy.visit(LoginPage.HOMEPAGE_URL);
    }
    fillEmail(email) {
        cy.get(LoginPage.EMAIL_INPUT_ID).clear().type(email)
    }
    fillPassword(password) {
        cy.get(LoginPage.PASSWORD_INPUT_ID).clear().type(password)
    }
    loginButtonClick() {
        cy.get('button').contains('Zaloguj się').click()
    }
}
export const onLoginPage = new LoginPage()