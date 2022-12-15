describe('Input form', () => {
    beforeEach(() =>{
        cy.visit('/') //this value is in cypress.jason
    })
    it('focuses input on load', () =>{
        

        cy.focused()
            .should('have.class', 'new-todo')
})

    it('accepts input', () => {
        const typedText = 'Buy Milk'
    

        cy.get('.new-todo')
            .type(typedText)
            .should('have.value', typedText)



    })
})