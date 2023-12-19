from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
import pytest
import conftest

@pytest.mark.usefixtures('setup_teardown')
class TestCT03:
    def test_ct03_produtos(self):
        driver = conftest.driver
        # Localize o elemento "Soluções" pelo texto "Soluções"
        solucoes_link = driver.find_element(By.XPATH, "//*[contains(text(),'Soluções')]")

        # Use ActionChains para clicar no elemento "Soluções" e manter o dropdown aberto
        action = ActionChains(driver)
        action.click(solucoes_link).perform()
        driver.find_element(By.XPATH, "//*[contains(text(),'Produtos Starta')]").click()
        
        # Verificar se a página de Produtos carregou
        assert driver.find_element(By.CLASS_NAME, "styles_title__NZDlk").is_displayed

