package apiutils;

import static io.restassured.RestAssured.given;

import java.util.Map;

import org.apache.log4j.Logger;

import io.restassured.builder.RequestSpecBuilder;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class RequestSpec {

	static Logger log = Logger.getLogger("RequestSpec");
	static Response apiResponse;

	public static Response getMethodWithParams(Map<String, String> apiHeaders, String url, Map<String, String> params) {
		RequestSpecBuilder reqSpec = new RequestSpecBuilder();
		if (apiHeaders != null) {
			reqSpec.addHeaders(apiHeaders);
		}

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

}
