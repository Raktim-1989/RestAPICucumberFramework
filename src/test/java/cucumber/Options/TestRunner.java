package cucumber.Options;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features = "src/test/java/features",
		glue = "stepDefinitions",
		plugin = {"pretty","html:target/cucumber-reports", "json:target/jsonReports/cucumber-report.json"}
		//tags = {"@DeletePlace"}
		)

public class TestRunner {
	
}
