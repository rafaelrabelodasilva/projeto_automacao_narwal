describe('Logout', () => {
  beforeEach(() => {
    cy.fazLogin()
  })

  it('faz logout com sucesso', () => {
    cy.fazLogout()
    cy.url()
      .should('be.equal', `${Cypress.config('baseUrl')}/`)
  })
})