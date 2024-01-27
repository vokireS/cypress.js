describe('Восстановление пароля', function () {
    it('Проверка восстановления пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click();
         cy.get('#mailForgot').type('randomemail@example.com');
         cy.get('#restoreEmailButton').click();
         cy.get('#messageHeader').should('be.visible').contains('Успешно отправили пароль на e-mail');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
    })

})

