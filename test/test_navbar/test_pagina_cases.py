from selenium.webdriver.common.by import By
import pytest
import conftest

@pytest.mark.usefixtures('setup_teardown_navbar')
@pytest.mark.nav_bar
class TestCT06:
    def test_ct06_cases(self):
        driver = conftest.driver
        # Clicar em "Cases"
        driver.find_element(By.LINK_TEXT, "Cases").click()
        # Verificar se a página de Cases carregou
        assert driver.find_element(By.TAG_NAME, "h1").is_displayed  

