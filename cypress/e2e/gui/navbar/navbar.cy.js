describe('Test homepage', () => {
    // Antes de cada teste, visita a página inicial
    beforeEach(() => {
      cy.visit('/');
    });

    it('Clica em sobre e verifica se foi direcionado para a pagina correta', () => {
        cy.clickButtonAndVerifyRedirect('a.styles_link__9-1Wn', 'Sobre', 'https://startaideia.com.br/sobre');
    });

    it('Clica em soluções e seleciona produtos starta, depois verifica se foi redirecionado', () => {
        cy.clickButtonDropDownAndVerifyRedirect('a[href="/produtos"][role="menuitem"' , 'https://startaideia.com.br/produtos')
    });

    it('Clica em soluções e seleciona OutSourcing, depois verifica se foi redirecionado', () => {
        cy.clickButtonDropDownAndVerifyRedirect('a[href="/outsourcing"][role="menuitem"' , 'https://startaideia.com.br/outsourcing')
    });

    it('Clica em soluções e seleciona Fabrica de Software, depois verifica se foi redirecionado', () => {
        cy.clickButtonDropDownAndVerifyRedirect('a[href="/fabrica-de-software"][role="menuitem"' , 'https://startaideia.com.br/fabrica-de-software')
    });

    it('Clica em cases e verifica se foi direcionado para a pagina correta', () => {
        cy.clickButtonAndVerifyRedirect('a.styles_link__9-1Wn', 'Cases', 'https://startaideia.com.br/cases');
    });

    it('Clica em carreiras e verifica se foi direcionado para a pagina correta', () => {
        cy.clickButtonAndVerifyRedirect('a.styles_link__9-1Wn', 'Carreiras', 'https://startaideia.com.br/vagas');
    });
   it('Muda a liguagem para EN e verifica se a pagina traduziu', () => {
        cy.clickButtonDropDownAndStayPage('[aria-label="Inglês"]', 'Uniting creativity and technology to create digital solutions high impact');
    });

    it('Muda a liguagem para ES e verifica se a pagina traduziu', () => {
        cy.clickButtonDropDownAndStayPage('[aria-label="Espanhol"]', 'Uniendo creatividad y tecnología para crear soluciones digitales de alto impacto');
    });

    it('Muda a liguagem para PT e verifica se a pagina traduziu', () => {
        cy.clickButtonDropDownAndStayPage('[aria-label="Espanhol"]', 'Uniendo creatividad y tecnología para crear soluciones digitales de alto impacto');
        cy.clickButtonDropDownAndStayPage('[aria-label="Portugués"]', 'Unindo criatividade e tecnologia para criar soluções digitais de alto impacto');
    });

    it('Clica no logo do Instagram, e verifica se foi redireiconado para a pagina correta', () => {
        cy.get('[href="https://www.instagram.com/startaideia/"]').click()
        cy.origin('https://www.instagram.com/', () => {
        cy.url().should('eq', 'https://www.instagram.com/startaideia/');
    });
    });

    it('Clica no logo do Linkedin, e verifica se foi redireiconado para a pagina correta', () => {
        cy.get('[href="https://www.linkedin.com/company/startaideia/"]').click()
        cy.origin('https://www.linkedin.com', () => {
        cy.get('[data-test-id="nav-logo"]').should('be.visible')
    });
    });

    it('Clica no logo do Facebook, e verifica se foi redireiconado para a pagina correta', () => {
        cy.get('[href="https://www.facebook.com/startaideia/"]').click()
        cy.origin('https://www.facebook.com/startaideia/', () => {
            cy.url().should('eq', 'https://www.facebook.com/startaideia/');
    });
    });
})