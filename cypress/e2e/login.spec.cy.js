describe('login', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Faz login com sucesso', () => {

    const usuario = Cypress.env('usuarioAdm')
    const senha = Cypress.env('senhaAdm')

    cy.fazLogin(usuario, senha)

    cy.get('#tabstrip_ts_active > a').should('have.text', 'Painel')
  })

  it('Valida erro no login com usuário inválido', () => {
    // cy.submeteFormulario(data.invalidUsername, data.validPassword)
    // cy.validaMensagemErro('Usuário inexistente')
    cy.log('Implementar cenário')
  });

  it('Valida erro no login com senha inválida', () => {
    // cy.submeteFormulario(data.validUsername, data.invalidPassword)
    // cy.validaMensagemErro('Usuário ou senha inválidos!')
    cy.log('Implementar cenário')
  });
})

//Casos de teste

//1.faz login com sucesso
//2.exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios (email e senha)
//3.exibe mensagem de erro ao submeter o formulário com e-mail com formatação errada
//4.exibe mensagem de erro ao não informar o e-mail
//5.exibe mensagem de erro ao não informar a senha
//6.exibe a senha ao clicar na opção "EXIBIR SENHA"

