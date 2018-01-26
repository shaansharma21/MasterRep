package util;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import org.apache.commons.io.FileUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Lib {

	public static WebElement findelement(WebDriver driver, String xpath) {

		WebElement a = driver.findElement(By.xpath(xpath));

		return a;
	}

	public static void sleep(WebDriver driver, int sec) throws InterruptedException {

		Thread.sleep(sec * 1000);
	}

	public static String printtl(WebDriver driver) {
		String a = driver.getTitle();

		return a;

	}

	public static String readproperties(WebDriver driver, String key) throws IOException {

		InputStream fs = new FileInputStream("/Users/Selenium/eclipse-workspace/BDD_Bootcamp/src/main/java/util/locator.properties/");
		Properties pro = new Properties();
		pro.load(fs);

		String value = pro.getProperty(key);

		return value;

	}

	public static void takescreenshot(WebDriver driver) throws IOException {

		File src = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);

		FileUtils.copyFile(src, new File("/Users/Selenium/Desktop/Selenium/error.png"));
	}

	/*public static String readexcel(WebDriver driver, int rownum, int colnum) throws IOException {
		FileInputStream fit = new FileInputStream("C:\\Users\\INSTRUCTOR\\eclipse-workspace\\maven2\\data.xlsx");
		Workbook wb = new XSSFWorkbook(fit);
		Sheet sh = wb.getSheetAt(0);
		Row rw = sh.getRow(rownum);
		Cell ce = rw.getCell(colnum);
		String a = ce.getStringCellValue();

		return a;

	}
*/
}


