describe('Cliente', () => {

  beforeEach(() => {
    cy.fazLogin()
  })
  
  it('Faz cadastro do cliente através do botão "Novo"', () => {
    cy.get('#BuscaMenu')
      .type('Cliente')

    cy.get('ul > li > span')
      .contains('Cliente')
      .click()

    cy.intercept('GET', '/Cliente/Inserir?filtro=&_=*')
      .as('TelaCadastroNovoCliente')

    cy.get('.txtBtn')
      .contains('Novo')
      .click()

    cy.wait('@TelaCadastroNovoCliente')
      
    cy.get('#TelaAlteracaoCliente #CpfCnpj')
      .type('33597676000163')
      
    cy.get('#TelaAlteracaoCliente #Nome')
      .type('Cliente teste automação 01')

    cy.get('.k-item')
      .contains('Endereços')
      .click()

    cy.get('#InputClientePaisId_Buscar')
      .type('Brazil')

    cy.get('div[title="BRAZIL"]')
      .click()

    cy.get('#InputClienteEstadoId_Buscar')
      .type('Santa Catarina')
      
    cy.get('div[title="Santa Catarina"]')
      .click()

    cy.get('#InputClienteCidadeId_Buscar')
      .type('Criciúma')
    
    cy.get('div[title="Criciúma"]')
      .click()

    cy.get('#Endereco')
      .type('Endereço teste 001')

    cy.get('#EnderecoNumero')
      .type('403')

    cy.get('#Cep')
      .type('88804320')

    cy.get('.k-item')
      .contains('Configurações')
      .click()

    cy.get('#tabStripClienteConfiguracoes .k-link')
      .contains('Financeiro')
      .click()
    
    cy.get('#TelaAlteracaoCliente #tabStripClienteConfiguracoes-2 .tbItem2 #NumericClienteDiasParaVencimentoFechamento').type('5')

    // cy.intercept('POST', '')

    // cy.wait('')

    cy.get('#btnAdicionar').click()

    cy.verificaMensagemSnackbar('Operação realizada com sucesso')
  })

  it('Faz cadastro do cliente através do botão "Cadastrar por CNPJ', () => {
    cy.log('Implementar')
  })

  it('Edita o cadastro do cliente', () => {
    cy.log('Implementar')
  })

  it('Inativa o cadastro do cliente', () => {
    cy.log('Implementar')
  })

  it('Gera importador a partir do cadastro do cliente', () => {
    cy.log('Implementar')
  })

  it('Gera fornecedor a partir do cadastro do cliente', () => {
    cy.log('Implementar')
  })

  it('Valida os parâmetros de pesquisa: Chave, Nome, CPF/CNPJ, Filial e Empresa', () => {
    cy.log('Implementar')
  })

  it('Valida botão de pesquisa do parâmetro de pesquisa Filial', () => {
    cy.log('Implementar')
  })

  it('Valida botão de pesquisa do parâmetro de pesquisa Empresa', () => {
    cy.log('Implementar')
  })

  it('Valida funcionalidade Importar com arquivo modelo', () => {
    cy.log('Implementar')
  })
})