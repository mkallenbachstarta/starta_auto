from selenium.webdriver.common.by import By
import pytest
import conftest

@pytest.mark.usefixtures('setup_teardown')
@pytest.mark.nav_bar
class TestCT02:
    def test_ct02_sobre(self):
        # Obtém a instância do driver do conftest
        driver = conftest.driver

        # Clica no link "Sobre"
        driver.find_element(By.LINK_TEXT, "Sobre").click()
        
        # Verifica se a página "Sobre" carregou
        assert driver.find_element(By.CLASS_NAME, "styles_title__rp8qE").is_displayed()
