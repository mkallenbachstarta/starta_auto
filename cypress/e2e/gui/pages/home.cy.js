describe('Test homepage', () => {
  // Antes de cada teste, visita a página inicial
  beforeEach(() => {
    cy.visit('/');
  });
  

  it('Verifica se o scroll é acionado ao clicar no primeiro botão de contato', () => {
    cy.clickContactButtonAndCheckScroll(0);
  });

  it('Verifica se o scroll é acionado ao clicar no segundo botão de contato', () => {
    cy.clickContactButtonAndCheckScroll(1);
  });

  it('Verifica se é redirecionado para a página de Fábrica de Software ao clicar no botão de Fábrica de Teste', () => {
    cy.clickAndVerifyRedirection(0, 'button.styles_container__inRQn.styles_ghost__VCVpG', 'Fábrica de Software');
  });
  
  it('Verifica se é redirecionado para a página de Outsourcing ao clicar no botão de Outsourcing', () => {
    cy.clickAndVerifyRedirection(1, 'button.styles_container__inRQn.styles_ghost__VCVpG', 'Outsourcing');
  });
  
  it('Verifica se é redirecionado para a página de Produtos Starta ao clicar no botão de Produtos Starta', () => {
    cy.clickAndVerifyRedirection(2,'button.styles_container__inRQn.styles_ghost__VCVpG', 'Veja alguns dos produtos desenvolvidos pela Startaideia');
  });  


it('Teste de Navegação no Banner de Clientes', () => {
  cy.get('button[aria-label="Previous"').first().should('be.disabled')

  // Passo 1: Clicar no botão "Next" e verificar se o botão "Previous" não é visível
  cy.clickNext_clients();

  // Passo 2: Realizar 6 cliques adicionais no botão "Next"
  for (let i = 0; i < 5; i++) {
    cy.clickNext_clients();
  }

  // Verificar se o botão "Next" está desabilitado após 7 cliques
  cy.verifyNextDisabled_clients();

  // Realizar 7 cliques no botão "Previous"
  for (let i = 0; i < 7; i++) {
    cy.clickPrevious_clients();
  }

  // Verificar se o botão "Previous" está desabilitado após 7 cliques
  cy.verifyPreviousDisabled_clients();
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

it('Verifica se ao clicar no botão "Ver Todos" no cases de sucesso, verifica o usuário é redirecionado para a página de cases', () => {
  cy.clickButtonAndVerifyRedirect('button.styles_container__inRQn', 'Visualizar todos', 'https://startaideia.com.br/cases');
});

it('Verifica a navegação do banner de depoimentos', () => {
  // Especifica a ordem dos botões a serem clicados
  const buttonIndexes = [2, 3, 1];

  // Executa a navegação usando o novo comando personalizado
  cy.navigateTestimonialBanner(buttonIndexes);
});

it('Verifica se ao clicar no card do blog, verifica o usuário é redirecionado para a página do artigo', () => {
  cy.get('a[href="https://medium.com/@startaideia/desvendando-o-flutter-cc207f405f20"]')
  .should('exist')
});

it('Verifica se ao clicar no botão "Visualizar Todos" do blog, verifica o usuário é redirecionado para a página home do blog', () => {
  cy.get('a[href="https://medium.com/@startaideia"]')
  .should('exist')
});
});

describe('Test Contact', () => {
  beforeEach(() => {
      cy.visit('/')
      cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send').as('sendEmailRequest');
    })
  
    it('Preenche o formulário, envia e verifica se foi enviado com sucesso', () => {
      cy.fillForm_contact();
      cy.clickContactSubmitButton().wait('@sendEmailRequest').its('response.statusCode').should('be.oneOf', [200]);
    
      // Adicione uma verificação para a mensagem de sucesso
      // cy.get('.mensagem-de-sucesso').should('be.visible');
    });
    
    it('Preenche o formulário, faltando o nome e verifica o erro', () => {
      cy.fillForm_contact();
      cy.clearInputAndVerifyError('input[name="name"', 'Nome obrigatório');
    });
    
    it('Preenche o formulário, com o e-mail sem validação, e verifica que não é feito o envio do form', () => {
      cy.fillForm_contact();
      cy.invalidEmailInputAndVerifyError('input[name="email"', 'E-mail inválido');
    });
    
    it('Preenche o formulário, sem o e-mail, e verifica que não é feito o envio do form', () => {
      cy.fillForm_contact();
      cy.clearInputAndVerifyError('input[name="email"', 'E-mail obrigatório');
    });
    
    it('Preenche o formulário, informando ABC no telefone, esperando que o valor continue vazio', () => {
      cy.fillForm_contact();
      cy.invalidPhoneInputAndVerifyEmptyValue('input[name="phone"');
    });
    
    it('Preenche o formulário, sem o telefone, e verifica que não é feito o envio do form', () => {
      cy.fillForm_contact();
      cy.clearInputAndVerifyError('input[name="phone"', 'Telefone obrigatório');
    });
    
    it('Preenche o formulário, sem a descrição, e verifica que não é feito o envio do form', () => {
      cy.fillForm_contact();
      cy.clearInputAndVerifyError('textarea[name="message"', 'Descrição obrigatória');
    });
    

});
