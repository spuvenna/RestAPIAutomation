package testrunner;

import org.apache.log4j.Logger;
import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = { "html:output/HTML_Reports/", "json:target/cucumber.json" }, 
		features = ".", glue = {
		"stepdefinations" }, 
		monochrome = true,
		dryRun = false)

public class TestRunner {
	static Logger log = Logger.getLogger("TestRunner");
}
