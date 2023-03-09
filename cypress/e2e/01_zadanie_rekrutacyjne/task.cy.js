
import { onLoginPage } from "../../support/pages/login_page";
import { onHomePage } from "../../support/pages/home_page";
import { onCoursePage } from "../../support/pages/course_page";

describe('Zadanie Rekrutacyjne', () => {

    it('Oddanie pracy domowej', () => {
        //given
        const email = 'user888@gmail.com'
        const password = '1234567890'
        //
        onLoginPage.visitHomePage();
        onLoginPage.fillEmail(email);
        onLoginPage.fillPassword(password);
        onLoginPage.loginButtonClick();

        onHomePage.clickGoToCourse();

        onCoursePage.clickHomeworkButton();
    })
})