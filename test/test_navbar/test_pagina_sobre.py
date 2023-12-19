from selenium.webdriver.common.by import By
import pytest
import conftest

@pytest.mark.usefixtures('setup_teardown')
class TestCT02:
    def test_ct02_sobre(self):
        driver = conftest.driver
        # Clicar em "Sobre"
        driver.find_element(By.LINK_TEXT, "Sobre").click()
        
        # Verificar se a página "Sobre" carregou
        assert driver.find_element(By.CLASS_NAME, "styles_title__rp8qE").is_displayed