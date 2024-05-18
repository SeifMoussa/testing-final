class contactUS{
    contactUSNav(){
        cy.visit('https://www.automationexercise.com/')
         cy.get('a[href*="contact_us"]').click()
    }


userName(){
    cy.firstName().type('Seif')
}

Email(){
    cy.Email().type('Abolobna.Seif@email.com');
}
Subject(){
    cy.get('[placeholder="Subject"]').type('complaining');
}

}
export default contactUS;


