
describe('Test da pagina de produtos', () => {
    beforeEach(() => {
      cy.visit('https://startaideia.com.br/produtos');
    });
  
    it('Verifica se ao clicar em "Saiba Mais" - Portal de saúde, redireciona para a página correta', () => {
      cy.click_button('[href="/projeto-saude"]');
      cy.verifyRedirection('https://startaideia.com.br/projeto-saude'); // Substitua com a URL esperada
    });
  
    it('Verifica se ao clicar em "Saiba Mais" - Open Plataforma, redireciona para a página correta', () => {
      cy.click_button('[href="https://openplataforma.com.br/"]');
      cy.origin('https://openplataforma.com.br/', () => {
        // Verifica a presença do texto-alvo na página
        cy.contains(' Aqui grandes ');
    });
    });
  
    it('Verifica se ao clicar em "Saiba Mais" - ExoHub, redireciona para a página correta', () => {
      cy.click_button('[href="https://comunidade.exohub.com.br/"]');
      cy.origin('https://comunidade.exohub.com.br/', () => {
        // Verifica a presença do texto-alvo na página
        cy.contains('Somos parte do exoHUB');
    });
    });
  });
  