import time
from selenium.webdriver.common.by import By
import pytest
import conftest


@pytest.mark.button_contact 
class TestCT01_1_button_contact:
    @pytest.mark.usefixtures('setup_no_teardown')
    def test_ct01_1_button_contact_1(self):
        # Obtém a instância do driver do conftest
        driver = conftest.driver

        # Clica no botão para abrir o formulário de contato 1
        driver.find_element(By.CLASS_NAME, "styles_container__inRQn").click()
        
        # Verifica se o título do formulário está visível
        assert driver.find_element(By.CLASS_NAME, "styles_title__WWrGG").is_displayed()

        # Preenche os campos do formulário com dados de teste
        driver.find_element(By.NAME, "name").send_keys("Teste - Desconsiderar")
        driver.find_element(By.NAME, "email").send_keys("matheus.kallenbach@startaideia.com.br")
        driver.find_element(By.NAME, "phone").send_keys("51995087130")
        driver.find_element(By.NAME, "message").send_keys("Esse contato foi gerado por teste, desconsiderar.")

        # Clica no botão de envio do formulário
        driver.find_element(By.XPATH, "//*[@id='contact']/div/form/button").click()
    

        # Necessário adicionar caso de teste infeliz e um feedback de contato feito
        # Necessário ver com o front como é gerado o elemento de alerta quando algum campo não é preenchido
        # Necessário adicionar caso de teste do button 2 (Adicionando ID a cada Button)

@pytest.mark.buttons_pages
class TestCT01_2_buttons_pages:
    @pytest.mark.usefixtures('setup_no_teardown')
    def test_ct01_2_buttons_pages_fabric(self):
        # Obtém a instância do driver do conftest
        driver = conftest.driver

        # Clica no botão da página de Fábrica e verifica se o texto é exibido
        driver.find_element(By.XPATH, "//*[@id='root']/main/section[3]/div/div[1]/button").click()
        assert driver.find_element(By.CLASS_NAME, "styles_wrapper__X9Gnz").is_displayed()

        # Volta para a página anterior
        driver.back()

    def test_ct01_2_buttons_pages_out(self):
        # Obtém a instância do driver do conftest
        driver = conftest.driver

        # Clica no botão da Outsourcing e verifica se o texto é exibida
        driver.find_element(By.XPATH, "//*[@id='root']/main/section[3]/div/div[2]/button").click()
        assert driver.find_element(By.CLASS_NAME, "styles_description__7RRYl").is_displayed()

        # Volta para a página anterior
        driver.back()

    def test_ct01_2_buttons_pages_prod(self):
        # Obtém a instância do driver do conftest
        driver = conftest.driver

        # Clica no botão da página de produtos e verifica se o texto é exibido
        driver.find_element(By.XPATH, "//*[@id='root']/main/section[3]/div/div[3]/button").click()
        assert driver.find_element(By.CLASS_NAME, "styles_title__NZDlk").is_displayed()

        # Fecha o navegador
        driver.quit()

@pytest.mark.customers
class TestCT01_3_customers:
    @pytest.mark.usefixtures('setup_no_teardown')
    def test_ct01_3_customers_not_enabled(self):
        # Obtém a instância do driver do conftest
        driver = conftest.driver

        # Verifica se a seta de navegação do banner de clientes (Back) está desativada
        arrow = driver.find_element(By.XPATH, "//*[@id='root']/main/section[4]/div/div[1]/div/button[1]")
        assert arrow.get_attribute("disabled") == 'true'

    def test_ct01_3_customers_enabled(self):
        # Obtém a instância do driver do conftest
        driver = driver

        # Clica na seta de navegação do banner de clientes e verifica se a classe 'disabled' não está presente
        arrow = driver.find_element(By.XPATH, "//*[@id='root']/main/section[4]/div/div[1]/div/button[1]")
        arrow.click()
        assert "disabled" not in arrow.get_attribute("class")
        

@pytest.mark.cases
class TestCT01_4_cases:
    @pytest.mark.usefixtures('setup_no_teardown')
    def test_ct_01_3_cases_arrow_disabled(self):
        # Obtém a instância do driver do conftest
        driver = conftest.driver

        # Verifica se a seta de navegação do banner de cases (Back) está desativada
        arrow = driver.find_element(By.XPATH, "//*[@id='root']/main/section[5]/div[1]/button[1]")
        assert arrow.get_attribute("disabled") == 'true'
        
    def test_ct_01_3_cases_arrow_enabled(self):
        # Obtém a instância do driver do conftest
        driver = conftest.driver

        # Clica na seta de navegação do banner de cases e verifica se a classe 'disabled' não está presente
        arrow = driver.find_element(By.XPATH, "//*[@id='root']/main/section[5]/div[1]/button[2]")
        arrow.click()
        assert "disabled" not in arrow.get_attribute("class")  
        

@pytest.mark.feedback
class TestCT01_5_feedback:
    @pytest.mark.usefixtures('setup_no_teardown')
    def test_ct_01_4_feedback(self):
        # Obtém a instância do driver do conftest
        driver = conftest.driver
        
        #Clica no botão de depoimento e verifica se passou o banner
        driver.find_element(By.XPATH, "//*[@id='root']/main/section[6]/div/div[2]/button[2]").click()
        assert driver.find_element(By.CLASS_NAME, "styles_quote__jYKbe").is_displayed()  
