import pytest
from selenium import webdriver

@pytest.fixture
def setup_teardown():
    #Setup
    global driver
    driver = webdriver.Chrome()
    driver.implicitly_wait(5)
    driver.maximize_window()
    driver.get('https://startaideia.com.br/')
    pytest.mark.nav_bar = pytest.mark.mark('nav_bar')
    
    # Run Test
    yield 
    
    #Teardown
    driver.quit()