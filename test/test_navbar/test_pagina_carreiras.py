from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from time import sleep
import pytest
import conftest

@pytest.mark.usefixtures('setup_teardown')
@pytest.mark.nav_bar
class TestCT07:
    def test_ct07_carreiras(self):
        driver = conftest.driver
        # Clicar em "Carreiras" 
        driver.find_element(By.LINK_TEXT, "Carreiras").click()
        # Verificar se a página de Carreiras carregou
        assert driver.find_element(By.CLASS_NAME, "styles_title__g44m9").is_displayed     
