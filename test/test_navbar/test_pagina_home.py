from selenium.webdriver.common.by import By
import pytest
import conftest

class TestCT01:
    @pytest.mark.usefixtures('setup_teardown_navbar')
    @pytest.mark.nav_bar
    def test_ct01_home(self):
        # Obtém a instância do driver do conftest
        driver = conftest.driver

        # Verifica se a pagina carregou
        assert driver.find_element(By.CLASS_NAME, "styles_title__7QolF").is_displayed()
