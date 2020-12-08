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
import apiutils.RequestSpec;
import apiutils.ResponseFromAPI;
import reusableclasses.Utils;

public class StepDefination {
	static Logger log = Logger.getLogger("StepDefination");
	String apiURL;

	@Given("^(post|comments|users) api URI$")
	public void apiURI(String string) throws Throwable {
		String baseUrl = Utils.getValueForKey("baseurl").toString();
		String apiEndPoint = Utils.getValueForKey(string).toString();
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
		RequestSpec.getMethodWithParams(null, apiURL, paramList);
		log.info("Sent Request for '" + apiURL + "'");
	}

	@Then("^Verify (post|comments|users) api response code \"([^\"]*)\"$")
	public void verify_comments_api_response_code(String resource, String code) throws Throwable {
		int resCode = ResponseFromAPI.getAPIStatusCode();
		log.info("The '" + resource + "' API returned '" + resCode + "'");
		Assert.assertEquals(code, String.valueOf(resCode));
	}

	@Then("^Verify (post|comments|users) api response \"([^\"]*)\"$")
	public void verify_post_api_response(String resource, String noOfResponses) throws Throwable {
		String actualCount = String.valueOf(ResponseFromAPI.getObjectsFromResponse().size());
		Assert.assertEquals(actualCount, noOfResponses);
		log.info("The '" + resource + "' response returned are as expected");
	}

	@Then("^Verify (post|comments|users) response with attributes$")
	public void verify_users_response_with_attributes(String resource, DataTable attributes) throws Throwable {
		List<String> attributesList = attributes.transpose().asList(String.class);
		Map<?, ?> postObject = ResponseFromAPI.getObjectsFromResponse().get(0);
		boolean attributeNotFound = false;
		for (String key : attributesList) {
			if (!postObject.containsKey(key)) {
				log.info("'" + key + "' is not found in '" + resource + "' reponse");
				attributeNotFound = true;
				break;
			}
		}
		Assert.assertTrue(!attributeNotFound);
		log.info("Attributes are present in response");
	}
}
