import pytest
from selenium import webdriver

@pytest.fixture
def setup_teardown_navbar():
    #Setup
    global driver
    driver = webdriver.Chrome()
    driver.implicitly_wait(5)
    driver.maximize_window()
    driver.get('https://startaideia.com.br/')
    
    # Run Test
    yield 
    
    #Teardown
    driver.quit()

@pytest.fixture   
def setup_no_teardown():
        #Setup
    global driver
    driver = webdriver.Chrome()
    driver.implicitly_wait(5)
    driver.maximize_window()
    driver.get('https://startaideia.com.br/')
    
    # Run Test
    yield 