describe('Register User', () => {
  beforeEach(() => {
    cy.visit('http://automationexercise.com');
    cy.get('a[href="/login"]').click();
  });
  it.only('enters name and email address', () => {
    cy.get('input[data-qa="signup-email"]').should('have.attr', 'placeholder', 'Email Address').type('Abolobna.Seif@email.com');
    cy.get('input[placeholder="Name"]').type('seif');
  });

  it.only('clicks "Signup" button', () => {
    cy.get('[data-qa="signup-button"]').click();
  
  
  
  });
})
