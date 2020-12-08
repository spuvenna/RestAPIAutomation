package apiutils;

import static io.restassured.RestAssured.given;

import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import com.jayway.jsonpath.JsonPath;

import io.restassured.builder.RequestSpecBuilder;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

/* Class for Request and Response Spec Builder usage to get the request and process the response*/
public class RequestResponseSpec {
	static Logger log = Logger.getLogger("RequestResponseSpec");
	static Response apiResponse;

	public static Response runAPIRequest(String url, Map<String, String> params) {
		RequestSpecBuilder reqSpec = new RequestSpecBuilder();
		
		reqSpec.addQueryParams(params);
		RequestSpecification requestSpec = reqSpec.build();
		try {
			apiResponse = given().spec(requestSpec).relaxedHTTPSValidation().when().request("Get", url);
		} catch (Exception e) {
			log.error("Exception at GET call : " + e.getMessage());
			e.printStackTrace();
		}
		return apiResponse;
	}
	public static int getAPIStatusCode() {
		int statusCode = 0;
		try {
			statusCode = apiResponse.getStatusCode();
			log.info("Successfully received status code from API");
		} catch (NullPointerException e) {
			log.error("Exception in receiving status code : " + e.getMessage());
			e.printStackTrace();
		}
		return statusCode;
	}

	public static List<Map<String, ?>> getObjectsFromResponse() {
		List<Map<String, ?>> jsonObjects = null;
		try {
			jsonObjects = JsonPath.read(apiResponse.asString(), "$");
		} catch (Exception e) {
			log.error("Exception while parsing the response : " + e.getMessage());
			e.printStackTrace();
		}
		return jsonObjects;
	}

}
