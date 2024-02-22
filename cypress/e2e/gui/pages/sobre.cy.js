describe('Test da page sobre', () => {
    beforeEach(() => {
        cy.visit('https://startaideia.com.br/sobre')
    });
    it('Testa a navegação do banner dos hubs', () => {
        cy.get('[aria-label="Previous"]').should('be.disabled');

        // Passo 1: Clicar no botão "Next" e verificar se o botão "Previous" não é visível
        cy.get('[aria-label="Next"]').click();
        cy.get('[aria-label="Previous"]').should('not.be.disabled');
      
           // Verificar se o botão "Next" está desabilitado após 1 cliques
           cy.get('[aria-label="Next"]').should('be.disabled');
      
        // Realizar 1 cliques no botão "Previous"
        cy.get('[aria-label="Previous"]').click();
      
        // Verificar se o botão "Previous" está desabilitado após 1 cliques
        cy.get('[aria-label="Previous"]').should('be.disabled');
    });

    it('Verifica a navegação do banner de depoimentos', () => {
        // Especifica a ordem dos botões a serem clicados
        const buttonIndexes = [2, 3, 1];
    
        // Executa a navegação usando o novo comando personalizado
        cy.navigateTestimonialBanner(buttonIndexes);
    });

});
