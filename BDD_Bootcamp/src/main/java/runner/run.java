package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features = "/Users/Selenium/eclipse-workspace/BDD_Bootcamp/src/main/java/features",
		glue = {"stepDefinition"}, //glue means where is your step definitions (which is the 
				//step definition package name)
		plugin = {"pretty","html:test-output/cucumber.html", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, //plug in is the replacement for "format" for "pretty" output
		monochrome= true,
		strict= true,
		dryRun=false
		//tags = {}
		
		
		)










public class run {

}
