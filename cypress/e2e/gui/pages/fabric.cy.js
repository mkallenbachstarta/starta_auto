describe('Testa a pagina de Fabrica de software', () => {
    beforeEach(() => {
        cy.visit('https://startaideia.com.br/fabrica-de-software#contact')
    });
    it('Verifica se o scroll é acionado ao clicar no primeiro botão de contato', () => {
        cy.clickContactButtonAndCheckScroll(0,'a > .styles_container__inRQn');
      });
    it('Teste de Navegação no Cases de Sucesso', () => {
    cy.get('button.styles_arrow__fCXyF[aria-label="Previous"]').should('be.disabled');
    
    // Passo 1: Clicar no botão "Next" e verificar se o botão "Previous" não é visível
    cy.clickNext_sucessCases();
    
    // Passo 2: Realizar 1 cliques adicionais no botão "Next"
    for (let i = 0; i < 1; i++) {
        cy.clickNext_sucessCases();
    }
    
    // Verificar se o botão "Next" está desabilitado após 2 cliques
    cy.verifyNextDisabled_sucessCases();
    
    // Realizar 2 cliques no botão "Previous"
    for (let i = 0; i < 2; i++) {
        cy.clickPrevious_sucessCases();
    }
    
    // Verificar se o botão "Previous" está desabilitado após 2 cliques
    cy.verifyPreviousDisabled_sucessCases();
    });
});

