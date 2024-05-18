Cypress.Commands.add('firstName', () => { 
    cy.get('input[placeholder="Name"]')
})

Cypress.Commands.add('Email', () => { 
    cy.get('[placeholder="Email"]')
})

