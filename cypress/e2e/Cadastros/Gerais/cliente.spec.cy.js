const dadosCliente = {
  CpfCnpj: "33597676000163",
  nome: "Cliente teste automação 09",
  pais: "Brazil",
  estado: "Santa Catarina",
  cidade: "Criciúma",
  endereco: "Endereço teste 001",
  numero: "403",
  cep: "88804320",
  dias: '5'
}

describe('Cliente', () => {

  beforeEach(() => {
    cy.fazLogin()
  })
  
  it.only('Faz cadastro do cliente através do botão "Novo"', () => {
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
      .type(dadosCliente.CpfCnpj)
      
    cy.get('#TelaAlteracaoCliente #Nome')
      .type(dadosCliente.nome)

    cy.get('.k-item')
      .contains('Endereços')
      .click()

    cy.get('#InputClientePaisId_Buscar')
      .type(dadosCliente.pais)

    cy.get('div[title="BRAZIL"]')
      .click()

    cy.get('#InputClienteEstadoId_Buscar')
      .type(dadosCliente.estado)
      
    cy.get('div[title="Santa Catarina"]')
      .click()

    cy.get('#InputClienteCidadeId_Buscar')
      .type(dadosCliente.cidade)
    
    cy.get('div[title="Criciúma"]')
      .click()

    cy.get('#Endereco')
      .type(dadosCliente.endereco)

    cy.get('#EnderecoNumero')
      .type(dadosCliente.numero)

    cy.get('#Cep')
      .type(dadosCliente.cep)

    cy.get('.k-item')
      .contains('Configurações')
      .click()

    cy.get('#tabStripClienteConfiguracoes .k-link')
      .contains('Financeiro')
      .click()
    
    cy.get('[style="width: 100%"] > :nth-child(6) > ul > .tbValue > .k-widget > .k-numeric-wrap > .k-formatted-value')
      .type(dadosCliente.dias)

    cy.get('#tabStripClienteConfiguracoes .k-link')
      .contains('Requisitos')
      .click()

    cy.get(':nth-child(8) > :nth-child(6) > ul > .tbValue > .k-widget > .k-numeric-wrap > .k-formatted-value')
      .type(dadosCliente.dias)

    cy.get('#tabStripClienteConfiguracoes-3 .k-link')
      .contains('Exportação')
      .click()

    cy.get(':nth-child(4) > :nth-child(6) > ul > .tbValue > .k-widget > .k-numeric-wrap > .k-formatted-value')
      .type(dadosCliente.dias)

    cy.intercept('POST', 'https://cliente3automatizado.narwalsistemas.com.br/Cliente/Inserir')
      .as('clienteSalvo')

    cy.get('#btnAdicionar')
      .click()
    
    cy.wait('@clienteSalvo')

    cy.verificaMensagemSnackbar('Operação realizada com sucesso')
      .should('be.visible')

    cy.get('#Nome')
      .type(dadosCliente.nome)

    cy.get('#btnFiltrar')
      .click()

    cy.get('tbody > tr > :nth-child(7)')
      .should('have.text', dadosCliente.nome)
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