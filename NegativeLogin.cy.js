describe('NegativeLogin', function () {
    it('Негативный кейс авторизации', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('NEgermann@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').should('be.visible').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
     })
 })
 