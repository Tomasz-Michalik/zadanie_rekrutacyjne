
export class HomePage {

    clickGoToCourse() {
        cy.intercept('GET', '**/api/v1/widgets/course').as('course')
        cy.wait('@course').then( () => {
            cy.get('button').contains('Przejdź do kursu').click()
        })
    }
}
export const onHomePage = new HomePage()