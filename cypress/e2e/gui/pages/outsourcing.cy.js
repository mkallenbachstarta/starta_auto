describe('Testa a pagina de outsourcing', () => {
    beforeEach(() => {
        cy.visit('https://startaideia.com.br/outsourcing')
    });
    it('Verifica se o scroll é acionado ao clicar no primeiro botão de contato', () => {
        cy.clickContactButtonAndCheckScroll(0,'a > .styles_container__inRQn');
      });

    it('Verifica a navegação dos banners de Outsourcing x Squad Ageis', () => {
        // verifica se o "outsourcing" está ativo e "Suad Ageis" está inativo
        cy.get('.styles_tab__4Biuy').eq(0)
            .should('have.class', 'styles_active__3i7aq');
        cy.get('.styles_tab__4Biuy').eq(1)
            .should('have.class', 'false');
            

        // clica no "Squad Ageis e verifica se ficou ativo"
        cy.get('.styles_tab__4Biuy').eq(1).click()
            .should('have.class', 'styles_active__3i7aq');
        cy.get('.styles_tab__4Biuy').eq(0)
            .should('have.class', 'false');
    });
});