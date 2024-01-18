from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
import pytest
import conftest

@pytest.mark.usefixtures('setup_teardown')
@pytest.mark.nav_bar
class TestCT03:
    def test_ct03_produtos(self):
        # Obtém a instância do driver do conftest
        driver = conftest.driver

        # Localiza o elemento "Soluções" pelo texto "Soluções"
        solucoes_link = driver.find_element(By.XPATH, "//*[contains(text(),'Soluções')]")

        # Usa ActionChains para clicar no elemento "Soluções" e manter o dropdown aberto
        action = ActionChains(driver)
        action.click(solucoes_link).perform()

        # Clica no link "Produtos Starta" no dropdown
        driver.find_element(By.XPATH, "//*[contains(text(),'Produtos Starta')]").click()

        # Verifica se a página de Produtos carregou
        assert driver.find_element(By.CLASS_NAME, "styles_title__NZDlk").is_displayed()
