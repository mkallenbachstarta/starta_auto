from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
import pytest
import conftest

@pytest.mark.usefixtures('setup_teardown')
@pytest.mark.nav_bar
class TestCT04:
    def test_ct04_carreiras(self):
        driver = conftest.driver
        # Localize o elemento "Soluções" pelo texto "Soluções"
        solucoes_link = driver.find_element(By.XPATH, "//*[contains(text(),'Soluções')]")

        # Use ActionChains para clicar no elemento "Soluções" e manter o dropdown aberto
        action = ActionChains(driver)
        action.click(solucoes_link).perform()
        driver.find_element(By.XPATH, "//*[contains(text(),'Outsourcing')]").click()

        # Verificar se a página de Produtos carregou
        assert driver.find_element(By.CLASS_NAME, "styles_description__7RRYl").is_displayed
            
            
           

