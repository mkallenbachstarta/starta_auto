from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
import pytest
import conftest

@pytest.mark.usefixtures('setup_teardown_navbar')
@pytest.mark.nav_bar
class TestCT05:
    def test_ct05_fabrica(self):
        # Obtém a instância do driver do conftest
        driver = conftest.driver

        # Localiza o elemento "Soluções" pelo texto "Soluções"
        solucoes_link = driver.find_element(By.XPATH, "//*[contains(text(),'Soluções')]")

        # Usa ActionChains para clicar no elemento "Soluções" e manter o dropdown aberto
        action = ActionChains(driver)
        action.click(solucoes_link).perform()

        # Clica no link "Fábrica de Software" no dropdown
        driver.find_element(By.XPATH, "//*[contains(text(),'Fábrica de Software')]").click()
        
        # Verifica se a página de Produtos carregou
        assert driver.find_element(By.CLASS_NAME, "styles_wrapper__X9Gnz").is_displayed()
