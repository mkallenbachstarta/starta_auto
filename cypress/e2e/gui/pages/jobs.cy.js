describe('Testa da pagina de vagas', () => {
    beforeEach(() => {
        cy.visit('https://startaideia.com.br/vagas')
    });
    it('Verifica se o scroll é acionado ao clicar no primeiro botão de contato', () => {
        cy.clickContactButtonAndCheckScroll(0,'a > .styles_container__inRQn');
      });

    it('Verifica a navegação do banner de depoimentos', () => {
        // Especifica a ordem dos botões a serem clicados
        const buttonIndexes = [2, 3, 1];

        // Executa a navegação usando o novo comando personalizado
        cy.navigateTestimonialBanner(buttonIndexes);
    });

    it('Verifica se ao clicar no botão do linkedin, o usuário é redirecionado para a pagina correta', () => {
        cy.get('[href="https://www.linkedin.com/company/startaideia/mycompany/"]').click()
        cy.origin('https://br.linkedin.com', () => {
        // Verifica a presença do texto-alvo na página
        cy.get('[data-test-id="nav-logo"]').should('be.visible')
    });
    });
});