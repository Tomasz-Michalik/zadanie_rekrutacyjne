
export class CoursePage {

    clickHomeworkButton() {
        cy.get('a[data-tour-step="homework"]').should('be.visible')
        .click();
    }
}
export const onCoursePage = new CoursePage()