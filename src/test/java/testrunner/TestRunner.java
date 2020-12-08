package testrunner;
import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = { "html:target/HTML_Reports/", "json:target/cucumber.json" }, 
		features = ".", glue = {"stepdefinations" }
		)

public class TestRunner {
}
