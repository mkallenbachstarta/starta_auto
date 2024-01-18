from selenium.webdriver.common.by import By
import pytest
import conftest

@pytest.mark.usefixtures('setup_teardown_navbar')
@pytest.mark.nav_bar
class TestCT06:
    def test_ct06_cases(self):
        # Obtém a instância do driver do conftest
        driver = conftest.driver

        # Clica no link "Cases"
        driver.find_element(By.LINK_TEXT, "Cases").click()

        # Verifica se a página de Cases carregou, usando a tag h1 como indicador
        assert driver.find_element(By.TAG_NAME, "h1").is_displayed()
