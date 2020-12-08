package apiutils;

import java.util.List;
import java.util.Map;
import org.apache.log4j.Logger;
import com.jayway.jsonpath.JsonPath;

/**
 * 
 * @author Sowmya
 * 
 *         Class to validate the response status code and Response
 *
 */
public class ResponseFromAPI {

	static Logger log = Logger.getLogger("ResponseFromAPI");

	public static int getAPIStatusCode() {
		int statusCode = 0;
		try {
			statusCode = RequestSpec.apiResponse.getStatusCode();
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
			jsonObjects = JsonPath.read(RequestSpec.apiResponse.asString(), "$");
		} catch (Exception e) {
			log.error("Exception while parsing the response : " + e.getMessage());
			e.printStackTrace();
		}
		return jsonObjects;
	}

}
