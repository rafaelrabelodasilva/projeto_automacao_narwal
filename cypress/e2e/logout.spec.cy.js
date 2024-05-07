describe('Logout', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.fazLogin()
    cy.visit('/Home')
  })

  it('faz logout com sucesso', () => {
    cy.fazLogout()
    cy.url()
      .should('be.equal', `${Cypress.config('baseUrl')}/`)
  })
})