import time
from selenium.webdriver.common.by import By
import pytest
import conftest

class TestCT01_1_button_contact:
    @pytest.mark.button_contact 
    @pytest.mark.usefixtures('setup_no_teardown')
    def test_ct01_1_button_contact_displayed(self):
        driver = conftest.driver
        driver.find_element(By.CLASS_NAME, "styles_container__inRQn").click()
        assert driver.find_element(By.CLASS_NAME, "styles_title__WWrGG").is_displayed()
       
    
    def test_ct01_1_button_contact(self):
        driver = conftest.driver
        driver.find_element(By.NAME, "name").send_keys("Teste - Desconsiderar")
        driver.find_element(By.NAME, "email").send_keys("matheus.kallenbach@startaideia.com.br")
        driver.find_element(By.NAME, "phone").send_keys("51995087130")
        driver.find_element(By.NAME, "message").send_keys("Esse contato foi gerado por teste, desconsiderar.")
        driver.find_element(By.XPATH, "//*[@id='contact']/div/form/button").click()
        

        # Necessário adicionar caso de teste infeliz e um feedback de contato feito
        # Necessário ver com o front como é gerado o elemento de alerta quando algum campo não é preenchido
        
@pytest.mark.buttons_pages
class TestCT01_2_buttons_pages:
    @pytest.mark.usefixtures('setup_no_teardown')
    def test_ct01_2_buttons_pages_fabric(self):
        driver = conftest.driver
        driver.find_element(By.XPATH, "//*[@id='root']/main/section[3]/div/div[1]/button").click()
        assert driver.find_element(By.CLASS_NAME, "styles_wrapper__X9Gnz").is_displayed()
        driver.back()
        
    def test_ct01_2_buttons_pages_out(self):
        driver = conftest.driver
        driver.find_element(By.XPATH, "//*[@id='root']/main/section[3]/div/div[2]/button").click()
        assert driver.find_element(By.CLASS_NAME, "styles_description__7RRYl").is_displayed()
        driver.back()     
 
 
    def test_ct01_2_buttons_pages_prod(self):
        driver = conftest.driver
        driver.find_element(By.XPATH, "//*[@id='root']/main/section[3]/div/div[3]/button").click()
        assert driver.find_element(By.CLASS_NAME, "styles_title__NZDlk").is_displayed()
        driver.quit()

    
@pytest.mark.customers
class TestCT01_3_customers:
    @pytest.mark.usefixtures('setup_no_teardown')
    def test_ct01_3_customers_not_enabled(self):
        driver = conftest.driver
        arrow = conftest.driver.find_element(By.XPATH, "//*[@id='root']/main/section[4]/div/div[1]/div/button[1]")
        assert arrow.get_attribute("disabled") == 'true'
               
    def test_ct01_3_customers_enabled(self):
        driver = conftest.driver
        arrow = conftest.driver.find_element(By.XPATH, "//*[@id='root']/main/section[4]/div/div[1]/div/button[1]")
        arrow.click()
        assert "disabled" not in arrow.get_attribute("class")
        