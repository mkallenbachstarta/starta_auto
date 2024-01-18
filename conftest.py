import pytest
from selenium import webdriver

@pytest.fixture
def setup_teardown():
    # Setup
    global driver
    # Inicializa o driver do Chrome
    driver = webdriver.Chrome()
    # Define um tempo de espera implícito para esperar por elementos
    driver.implicitly_wait(5)
    # Maximiza a janela do navegador
    driver.maximize_window()
    # Navega para a URL inicial
    driver.get('https://startaideia.com.br/')
    
    # Executa o teste
    yield 
    
    # Teardown
    # Fecha o navegador após a execução do teste
    driver.quit()

@pytest.fixture   
def setup_no_teardown():
    # Setup
    global driver
    # Inicializa o driver do Chrome
    driver = webdriver.Chrome()
    # Define um tempo de espera implícito para esperar por elementos
    driver.implicitly_wait(5)
    # Maximiza a janela do navegador
    driver.maximize_window()
    # Navega para a URL inicial
    driver.get('https://startaideia.com.br/')
    
    # Executa o teste
    yield
