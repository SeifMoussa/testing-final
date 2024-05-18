import contactUS from "../support/POM/contact -us-POM"
const test = new contactUS();

describe('Contact us autmation testing', () => {
  before(function(){
    test.contactUSNav
      it('visit contact us page ', () => {
          cy.visit('https://www.automationexercise.com/')
      }) 
  })       
})


  describe('Contact us autmation testing fields filling', () => {
      it('enter all fields on contact us page ', () => {
              cy.visit('https://www.automationexercise.com/')
              cy.get('a[href*="contact_us"]').click()
              test.userName
              cy.Email().type('Abolobna.Seif@email.com');
              cy.get('[placeholder="Subject"]').type('complaining');
              cy.get('[placeholder="Your Message Here"]').type('sadadwaqrwqrf');
              cy.get('[placeholder="Your email address"]').type('Abolobna.Seif@email.com')
              cy.get('[data-qa="submit-button"]').click();
              cy.get('.alert-success').contains('Success! Your details have been submitted successfully.');                
              cy.get('a.btn.btn-success[href="/"]').click();

  })
})
  

describe('Contact us autmation testing fields empty', () => {
      
  

  it('enter empty fields on contact us page ', () => {
      cy.visit('https://www.automationexercise.com/')
      cy.title().should('eq','Automation Exercise');
      cy.get('a[href*="contact_us"]').click()
      cy.title().should('eq','Automation Exercise - Contact Us');
      cy.get('input[placeholder="Name"]')
      cy.get('[placeholder="Email"]')
      cy.get('[placeholder="Subject"]');
      cy.get('[placeholder="Your Message Here"]')
      cy.get('[placeholder="Your email address"]')
      cy.get('[data-qa="submit-button"]').click();

  })
})



describe('Contact us autmation testing fields with special chars', () => {
      
  

  it('enter chars in fields on contact us page ', () => {
      cy.visit('https://www.automationexercise.com/')
      cy.title().should('eq','Automation Exercise');
      cy.get('a[href*="contact_us"]').click()
      cy.title().should('eq','Automation Exercise - Contact Us');
      cy.get('input[placeholder="Name"]').type('----');
      cy.get('[placeholder="Email"]').type('----');
      cy.get('[placeholder="Subject"]').type('----');
      cy.get('[placeholder="Your Message Here"]').type('----');
      cy.get('[placeholder="Your email address"]').type('----');
      cy.get('[data-qa="submit-button"]').click();

  })
})


















