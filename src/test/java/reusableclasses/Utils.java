package reusableclasses;

import java.io.File;
import java.io.FileReader;
import java.util.Properties;

import org.apache.log4j.Logger;

/**
 * 
 * @author Sowmya 
 * 		Class to read property values and return String
 */

public class Utils {
	static Logger log = Logger.getLogger("Utils");

	public static String getValueFromProp(String key) {
		String value = null;
		try {
			String filePath = System.getProperty("user.dir") + "/resources/envproperties/env.properties";
			FileReader fileReader = new FileReader(new File(filePath));
			Properties props = new Properties();
			props.load(fileReader);
			value = props.getProperty(key);
			log.info("Property value is '" + value + "' for '" + key + "'");
		} catch (Exception e) {
			log.error("Exception while reading'" + key + "'-" + e.getMessage());
			e.printStackTrace();
		}
		return value;
	}
}
