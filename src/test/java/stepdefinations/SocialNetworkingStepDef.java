package stepdefinations;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.log4j.Logger;
import org.junit.Assert;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import apiutils.RequestResponseSpec;
import reusableclasses.Utils;

public class SocialNetworkingStepDef {
	static Logger log = Logger.getLogger("SocialNetworkingStepDef");
	String apiURL;

		@Given("^(post|comments|users) api URI$")
		public void apiURI(String string) throws Throwable {
			String baseUrl = Utils.getValueFromProp("baseurl").toString();
			String apiEndPoint = Utils.getValueFromProp(string).toString();
			apiURL = baseUrl + apiEndPoint;
			log.info("API URL is '" + apiURL + "'");
		}

		@When("^(post|comments|users) api is passed with \"([^\"]*)\"$")
		public void apiIsPassedWith(String resource, String params) throws Throwable {
			String[] parameterList = params.split(",");
			Map<String, String> paramList = new HashMap<>();
			for (String param : parameterList) {
				paramList.put(param.split("=")[0].trim(), param.split("=")[1].trim());
			}
			RequestResponseSpec.runAPIRequest(apiURL, paramList);
			log.info("Sent Request for '" + apiURL + "'");
		}

		@Then("^Verify (post|comments|users) api response code \"([^\"]*)\"$")
		public void verify_comments_api_response_code(String resource, String code) throws Throwable {
			int resCode = RequestResponseSpec.getAPIStatusCode();
			log.info("The '" + resource + "' API returned '" + resCode + "'");
			Assert.assertEquals(code, String.valueOf(resCode));
		}

		@Then("^Verify (post|comments|users) api response \"([^\"]*)\"$")
		public void verify_post_api_response(String resource, String noOfResponses) throws Throwable {
			String actualCount = String.valueOf(RequestResponseSpec.getObjectsFromResponse().size());
			Assert.assertEquals(actualCount, noOfResponses);
			log.info("The '" + resource + "' response returned are as expected");
		}

		@Then("^Verify (post|comments|users) response has with attributes$")
		public void verify_users_response_has_with_attributes(String resource, DataTable attributes) throws Throwable {
			List<String> keyValues = attributes.transpose().asList(String.class);
			Map<String, ?> postObject = RequestResponseSpec.getObjectsFromResponse().get(0);
			boolean isPresent = true;
			for (String key : keyValues) {
				if (!postObject.containsKey(key)) {
					log.info("'" + key + "' is not found in '" + resource + "' reponse");
					isPresent = false;
					break;
				}
			}
			Assert.assertTrue(isPresent);
			log.info("Keys are present in response");
		}
	

}
