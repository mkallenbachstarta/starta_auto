from selenium.webdriver.common.by import By
import pytest
import conftest

@pytest.mark.usefixtures('setup_teardown_navbar')
@pytest.mark.nav_bar
class TestCT01:
    def test_ct01_home(self):
        driver = conftest.driver
        assert driver.find_element(By.CLASS_NAME, "styles_title__7QolF").is_displayed
            
            

        