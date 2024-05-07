Cypress.Commands.add('fazLogin', () => {

  const usuario = Cypress.env('usuarioAdm')
  const senha = Cypress.env('senhaAdm')

  cy.visit('/')

  cy.get('.login-welcome-message > span')
    .should('have.text', 'Welcome.')

  cy.get('#Login')
    .type(usuario)

  cy.get('#senha')
    .type(senha, { log: false })

  cy.intercept('/Home/Painel?_=*')
    .as('dashboard')

  cy.get('input[value="Enviar"]')
    .click()

  cy.wait('@dashboard')
})

Cypress.Commands.add('validaMensagemErro', (mensagem) => {
  cy.get('.login-input-fields > div > ul > li')
    .should('have.text', mensagem);
})

Cypress.Commands.add('fazLogout', () => {
  cy.get('#btnDropDownUsuario')
    .click()
  cy.get('.btn-sair')
    .click()
})

Cypress.Commands.add('verificaMensagemSnackbar', (mensagem) => {
  cy.get('.noty_message')
    .contains(mensagem)
})