describe('Test homepage', () => {
    // Antes de cada teste, visita a página inicial
    beforeEach(() => {
      cy.visit('/');
    });

    it('Verifica a integridade dos textos - Telefone', () => {
        cy.get('[href="tel:+555135008311"')
           .should('have.text', '+55 (51) 3500-8311')
    });

    it('Verifica a integridade dos textos - Email', () => {
        cy.get('[href="mailto:contato@startaideia.com.br"')
           .should('have.text', 'contato@startaideia.com.br')
    });

    it('Verifica a integridade dos textos - HUB', () => {
        cy.get('p:has(span.styles_bold__d2FE0)')
        .invoke('text')
        .should('include', 'Hub de Inovação Feevale Techpark')
        .should('include', 'R. Cândido Silveira, 198 - Auxiliadora, Porto Alegre - RS, 90540-010');      
    });

    it('Verifica a integridade dos textos - Caldeira ', () => {
        cy.get('p:has(span.styles_bold__d2FE0)')
        .invoke('text')
        .should('include', 'Instituto Caldeira - Tv. São José, 455')
        .should('include', 'R. Cândido Silveira, 198 - Navegantes, Porto Alegre - RS, 90540-010');      
    });

    it('Verifica se é redirecionado para a página sobre ao clicar no botão de sobre', () => {
        cy.clickAndVerifyRedirection(0, 'a.styles_link__3hliQ[href="/sobre"]', 'Transformamos o mundo através da tecnologia e soluções inteligentes');
      });
      
      it('Verifica se é redirecionado para a página de Produtos ao clicar no botão de Produtps', () => {
        cy.clickAndVerifyRedirection(0, 'a.styles_link__3hliQ[href="/produtos"]', 'Veja alguns dos produtos desenvolvidos pela Startaideia');
      });
      
      it('Verifica se é redirecionado para a página de cases ao clicar no botão de cases', () => {
        cy.clickAndVerifyRedirection(0, 'a.styles_link__3hliQ[href="/cases"]', 'Descubra nossos cases de sucesso em soluções de software para empresas');
      });  

      it('Verifica se é redirecionado para a politica de privacidade ao clicar no botão de politica de privacidade', () => {
        cy.clickAndVerifyRedirection(0, 'a.styles_link__3hliQ[href="/politica-de-protecao-de-dados"]', 'Política de Privacidade');
      });  

      it('Verifica se é redirecionado para a Plano de resposta a incidentes ao clicar no botão de Plano de resposta a incidentes', () => {
        cy.clickAndVerifyRedirection(0, 'a.styles_link__3hliQ[href="/plano-incidentes-seguranca"]', 'Plano de resposta a incidentes');
      });  

      it.only('Verifica se é redirecionado para a Portal do cliente ao clicar no botão de Portal do cliente', () => {
    
        // Clique no botão "Portal do cliente"
        cy.get('a.styles_link__3hliQ[href="https://startaideia.atlassian.net/servicedesk/customer/portals"]').click();
      
        cy.on('uncaught:exception', (e) => {
          if (e.message.includes('jira/container-api/utils missing jira/util/top-same-origin-window')) {
            return false;
          }
        });
      
        // Aguarde o redirecionamento e verifique a nova URL
        cy.url().should('not.eq', 'https://startaideia.com.br/'); // Certifica-se de que a URL não é igual à URL original
      
        // Ou, se preferir, você pode verificar se alguns elementos específicos da página "Portal do cliente" estão presentes
        // cy.get('seletor_do_elemento_na_pagina_do_portal_do_cliente').should('exist');
      });      
      
})