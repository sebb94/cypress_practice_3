describe('Describe', () => {
    it('step 1', () => {
        cy.get('#id').should('be.visible')
    });
});