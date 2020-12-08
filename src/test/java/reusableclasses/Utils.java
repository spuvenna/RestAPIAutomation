package reusableclasses;

import java.io.File;
import java.io.FileReader;
import java.util.Properties;

import org.apache.log4j.Logger;

public class Utils {
	static Logger log = Logger.getLogger("Utils");

	// This method is used to get the value from properties file
	public static String getValueForKey(String key) {
		String value = null;
		try {
			String filePath = System.getProperty("user.dir") + "/resources/envProperties/env.properties";
			FileReader fileReader = new FileReader(new File(filePath));
			Properties props = new Properties();
			props.load(fileReader);
			value = props.getProperty(key);
			log.info("Received value '" + value + "' for '" + key + "'");
		} catch (Exception e) {
			log.error("Exception at retrieving the value for given key '" + key + "'--" + e.getMessage());
			e.printStackTrace();
		}
		return value;
	}
}
