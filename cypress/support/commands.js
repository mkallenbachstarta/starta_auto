import faker from 'faker';
const contactButtonSelector = 'a[href="#contact"] button.styles_container__inRQn';
const ghostButtonSelector = 'button.styles_container__inRQn.styles_ghost__VCVpG';
const nextButtonSelector_clients = 'button[aria-label="Next"]';
const previousButtonSelector_clients = 'button[aria-label="Previous"]';
const nextButtonSelector_sucessCases = 'button.styles_arrow__fCXyF[aria-label="Next"]';
const previousButtonSelector_sucessCases = 'button.styles_arrow__fCXyF[aria-label="Previous"]';
const fakeName = 'TEST-' + faker.name.findName(); 
const fakeEmail = faker.internet.email();
const fakePhone = faker.phone.phoneNumber();
const fakeMessage = 'TEST-' + faker.lorem.sentence();  // Adiciona "TEST-" no início da mensagem

Cypress.Commands.add('clickContactButtonAndCheckScroll', (buttonIndex,contactButtonSelector) => {
  /**
   * Comando personalizado para clicar em um botão de contato e verificar se houve rolagem.
   * @param {number} buttonIndex - Índice do botão de contato a ser clicado.
   */

  let scrollPositionBefore;

  // Obtém a posição de rolagem antes do clique
  cy.window().then((win) => {
    scrollPositionBefore = win.scrollY;
  });

  // Clica no botão e espera um pequeno intervalo para dar tempo ao scroll acontecer
  cy.get(contactButtonSelector).eq(buttonIndex).click().wait(1000);

  // Obtém a posição de rolagem após o clique
  cy.window().then((win) => {
    const scrollPositionAfter = win.scrollY;

    // Verifica se a posição de rolagem foi alterada
    expect(scrollPositionAfter).to.not.equal(scrollPositionBefore);
  });
});


Cypress.Commands.add('clickAndVerifyRedirection', (index, ghostButtonSelector, targetText) => {
  /**
   * Comando personalizado para clicar em um botão com base no índice e verificar o redirecionamento através da presença de um texto-alvo na página.
   * @param {number} index - Índice do botão a ser clicado.
   * @param {string} ghostButtonSelector - Locator
   * @param {string} targetText - Texto esperado para estar presente na página redirecionada.
   */

  // Clica no botão com o índice especificado
  cy.get(ghostButtonSelector).eq(index).click();

  // Verifica a presença do texto-alvo na página
  cy.contains(targetText);
});


Cypress.Commands.add('clickNext_clients', () => {
  /**
   * Comando personalizado para clicar no botão "Next".
   */

  cy.get(nextButtonSelector_clients).first().click();
  cy.get(previousButtonSelector_clients).first().should('not.be.disabled');
});


Cypress.Commands.add('clickPrevious_clients', () => {
  /**
   * Comando personalizado para clicar no botão "Previous".
   */

  cy.get(previousButtonSelector_clients).first().click();
  cy.get(nextButtonSelector_clients).first().should('not.be.disabled');
});


Cypress.Commands.add('verifyNextDisabled_clients', () => {
  /**
   * Comando personalizado para verificar se o botão "Next" está desabilitado.
   */

  cy.get(nextButtonSelector_clients).first().should('be.disabled');
});


Cypress.Commands.add('verifyPreviousDisabled_clients', () => {
  /**
   * Comando personalizado para verificar se o botão "Previous" está desabilitado.
   */

  cy.get(previousButtonSelector_clients).first().should('be.disabled');
});


Cypress.Commands.add('clickNext_sucessCases', () => {
  /**
   * Comando personalizado para clicar no botão "Next".
   */

  cy.get(nextButtonSelector_sucessCases).click();
  cy.get(previousButtonSelector_sucessCases).should('not.be.disabled');
});

Cypress.Commands.add('clickPrevious_sucessCases', () => {
  /**
   * Comando personalizado para clicar no botão "Previous".
   */

  cy.get(previousButtonSelector_sucessCases).click();
  cy.get(nextButtonSelector_sucessCases).should('not.be.disabled');
});

Cypress.Commands.add('verifyNextDisabled_sucessCases', () => {
  /**
   * Comando personalizado para verificar se o botão "Next" está desabilitado.
   */

  cy.get(nextButtonSelector_sucessCases).should('be.disabled');
});

Cypress.Commands.add('verifyPreviousDisabled_sucessCases', () => {
  /**
   * Comando personalizado para verificar se o botão "Previous" está desabilitado.
   */

  cy.get(previousButtonSelector_sucessCases).should('be.disabled');
});

Cypress.Commands.add('clickButtonAndVerifyRedirect', (locator, buttonText, targetPage) => {
  /**
   * Comando personalizado para clicar em um botão com base no texto e verificar o redirecionamento para uma página específica.
   * @param {string} buttonText - Texto no botão a ser clicado.
   * @param {string} targetPage - URL esperada para a página redirecionada.
   * @param {string} locator - Passa o locator 
   */

  // Clique no botão com o texto especificado
  cy.get(`${locator}:contains("${buttonText}")`).click();

  // Aguarde o redirecionamento ou certifique-se de que a URL da página mudou para a página esperada
  cy.url().should('eq', `${targetPage}`);
});

Cypress.Commands.add('navigateTestimonialBanner', (buttonIndexes) => {
  /**
   * Comando personalizado para navegar pelo banner de depoimentos, clicando em botões específicos e verificando a classe ativa.
   * @param {number[]} buttonIndexes - Índices dos botões a serem clicados.
   */

  // Itera sobre os índices fornecidos e executa as ações correspondentes
  buttonIndexes.forEach((index) => {
    cy.get(`.styles_dots__tD3rs button:nth-child(${index})`)
      .click()
      .should('have.class', 'styles_activeDot__u2aXX');
  });
});


Cypress.Commands.add('fillForm_contact', () => {
  cy.get('input[name="name"]').type(fakeName);
  cy.get('input[name="email"]').type(fakeEmail);
  cy.get('input[name="phone"]').type(fakePhone);
  cy.get('textarea[name="message"]').type(fakeMessage);
});

Cypress.Commands.add('clickContactSubmitButton', (text) => {
  cy.get(`button.styles_container__inRQn:contains("${text}")`).click();
});

Cypress.Commands.add('clearInputAndVerifyError', (inputSelector, errorMessage) => {
  cy.get(inputSelector).clear().should('not.have.value');
  cy.clickContactSubmitButton();
  cy.get('.erro').should('be.visible').contains(errorMessage);
});

Cypress.Commands.add('invalidEmailInputAndVerifyError', (inputSelector, errorMessage) => {
  cy.get(inputSelector).clear().type('a').should('have.value', 'a');
  cy.clickContactSubmitButton();
  cy.get('.erro').should('be.visible').contains(errorMessage);
});

Cypress.Commands.add('invalidPhoneInputAndVerifyEmptyValue', (inputSelector) => {
  cy.get(inputSelector).clear().type('ABC').should('have.value', '');
  cy.clickContactSubmitButton();
  // Adicione uma verificação para a mensagem de erro (se houver)
  // cy.get('.erro').should('be.visible').contains('Telefone inválido');
});

Cypress.Commands.add('clickButtonDropDownAndVerifyRedirect', ( locator_menu,targetPage) => {
  /**
   * Comando personalizado para clicar em um botão com base no texto e verificar o redirecionamento para uma página específica.
   * @param {string} targetPage - URL esperada para a página redirecionada.
   * @param {string} locator_menu - Passa o locator do dropdown
   */

  // Clique no botão com o texto especificado
  cy.get('button.styles_dropdownTrigger__HFJtF:contains("Soluções")').click();

  cy.get(`${locator_menu}`).click();

  // Aguarde o redirecionamento ou certifique-se de que a URL da página mudou para a página esperada
  cy.url().should('eq', `${targetPage}`);
});

Cypress.Commands.add('clickLogoAndVerifyRedirectAnyPage', (locator, index) => {
  /**
   * Comando personalizado para clicar em um botão com base no texto e verificar se a requisição AJAX deu status 200.
   * @param {string} request - passa o request a acompanhar
   * @param {number} index - indica qual o elemento a ser considerado
   * @param {string} locator - Passa o locator 
   */

  // Clique no botão com o texto especificado
  cy.get(locator).eq(index).click();
  cy.wait(1000)
  cy.url().should('not.eq', Cypress.config('baseUrl'));
});

Cypress.Commands.add('clickButtonDropDownAndStayPage', ( locator_menu,verify) => {
  /**
   * Comando personalizado para clicar em um botão com base no texto e verificar o redirecionamento para uma página específica.
   * @param {string} verify - Verifica o texto presente na page
   * @param {string} locator_menu - Passa o locator do dropdown
   */

  // Clique no botão com o texto especificado
  cy.get('button.styles_button__Z4aA3').click();

  cy.get(locator_menu).click()

  cy.contains(verify)
});

Cypress.Commands.add('click_button', (locator) => {
  cy.get(locator).click();
});

Cypress.Commands.add('verifyRedirection', (expectedUrl) => {
  cy.url().should('eq', expectedUrl);
});
