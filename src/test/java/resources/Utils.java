package resources;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.Properties;

import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class Utils {
	public static RequestSpecification req;
	static Properties prop;
	
	public RequestSpecification requestSpecification() throws IOException
	{
		if(req == null)
		{
		PrintStream log = null;
		try {
			log = new PrintStream(new FileOutputStream("logging.txt"));
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		RestAssured.baseURI="https://rahulshettyacademy.com";
		req =new RequestSpecBuilder().setBaseUri(getGlobalValue("baseUrl")).addQueryParam("key", "qaclick123")
		        .addFilter(RequestLoggingFilter.logRequestTo(log))
		        .addFilter(ResponseLoggingFilter.logResponseTo(log))
				.setContentType(ContentType.JSON).build();
		
		return req;
		}
		
		return req;
	}
	
	public static String getGlobalValue(String key) throws IOException
	{
		 prop = new Properties();
		try {
			FileInputStream fis = new FileInputStream("C:\\Users\\USER\\eclipse-workspace\\APIFramework\\src\\test\\java\\resources\\global.properties");
		    prop.load(fis);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		

		return prop.getProperty(key);
	}
	
	public String getJsonPath(Response response, String key)
	{
		String resPath = response.asString();
		JsonPath js = new JsonPath(resPath);
		return js.get(key).toString();
		
	}
	

}
