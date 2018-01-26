package stepDefinition;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import util.Lib;

public class test extends Lib {
	
	WebDriver driver;
	
	
	@Before
	public void Initialize() {
		System.setProperty("webdriver.chrome.driver", "/Users/Selenium/Desktop/Selenium/Drivers/chromedriver/");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.edmunds.com/calculators/");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
	}
	
	//Checks to see If user was able to successfully navigate to the correct web page
	@Given("^User navigates to the Edmunds Calculator WebPage$")
	public void Calculator_WebPage_Verify() {
		String Title = driver.getTitle();
		String expectedTitle = "Auto Calculators";
		
		if (Title.equals(expectedTitle)) {
			System.out.println("Step 1: User Navigated to Webpage Successfully");
		}
		else {
			
			System.out.println("Step 1: User DID NOT Navigate to WebPage Successfully");
			Assert.assertEquals(Title, expectedTitle);
		}
		
	}

	//First clears text box then enters Affordable Monthly Payment in Text field
	@When("^User enters \"([^\"]*)\" in Monthly Payment Field$")
	public void user_enters_in_Monthly_Payment_Field(String Monthly_Payment) throws IOException {
		findelement(driver, readproperties(driver, "monthlyPayment")).clear();
		findelement(driver, readproperties(driver, "monthlyPayment")).sendKeys(Monthly_Payment);
	}

	@And("^User clicks Go Button$")
	public void Go_Button_Click() throws IOException, InterruptedException {
		findelement(driver, readproperties(driver, "goButton")).click();
		Thread.sleep(3000);
		
	}

	@Then("^User enters \"([^\"]*)\" in Zip Code Field$")
	public void user_enters_in_Zip_Code_Field(String arg1) {
		
		
	}

	@Then("^User selects \"([^\"]*)\" in Loan Term Drop Down Box$")
	public void user_selects_in_Loan_Term_Drop_Down_Box(String arg1) {
		
	}

	@Then("^User enters \"([^\"]*)\" in Finance Rate Field$")
	public void user_enters_in_Finance_Rate_Field(String arg1) {
		
	}

	@Then("^User enters \"([^\"]*)\" in Trade in Value Field$")
	public void user_enters_in_Trade_in_Value_Field(String arg1) {
		
	}

	@Then("^User enters \"([^\"]*)\" in Amounted Owed Field$")
	public void user_enters_in_Amounted_Owed_Field(String arg1) {
		
	}

	@Then("^User enters \"([^\"]*)\" in Cash Down Payment Field$")
	public void user_enters_in_Cash_Down_Payment_Field(String arg1) {
		
		
	}

	@Then("^User clicks Calculate Button$")
	public void user_clicks_Calculate_Button() {
			
	}
	
	
	@After
	public void Closing() {
		driver.manage().deleteAllCookies();
		driver.quit();
		
	}
}
