describe('Qa login test', function () {
    it('Негативный кейс авторизации', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio11111');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').should('be.visible').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').click();
     })
 })
 