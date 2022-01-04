package stepDefinitions;

import java.util.ArrayList;
import java.util.List;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;

import pojo.AddPlace;
import pojo.Location;
import resources.APIResources;
import resources.TestDataBuild;
import resources.Utils;

public class StepDefination extends Utils {
	
	RequestSpecification res;
	ResponseSpecification resspec;
	Response response;
	TestDataBuild data = new TestDataBuild();
	static String place_id;
	JsonPath js;

	@Given("^Add Place Payload with \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void add_Place_Payload_with(String name, String language, String address) throws Throwable {

		res = given().spec(requestSpecification()).body(data.addPlacePayLoad(name, language, address));

	}
	
	@When("^user calls \"([^\"]*)\" with \"([^\"]*)\" http request$")
	public void user_calls_with_http_request(String APIResource, String httpMethod) throws Throwable {
	   
		APIResources resourceAPI = APIResources.valueOf(APIResource); //This is where the enum constructor will be invoked and the value will be retrieved
		System.out.println(resourceAPI.getResource());	
		resspec = new ResponseSpecBuilder().expectStatusCode(200).expectContentType(ContentType.JSON).build();
		
		if(httpMethod.equalsIgnoreCase("POST"))
		{
			response = res.when().post(resourceAPI.getResource());
		}
		else if(httpMethod.equalsIgnoreCase("GET"))
		{
			response = res.when().get(resourceAPI.getResource());
		}
		
	}

	@Then("^the API call got success with status code (\\d+)$")
	public void the_API_call_got_success_with_status_code(int arg1) throws Throwable {

		assertEquals(response.getStatusCode(), 200);

	}

	@Then("^\"([^\"]*)\" in response body is \"([^\"]*)\"$")
	public void in_response_body_is(String key, String expectedValue) throws Throwable {
		
		assertEquals(getJsonPath(response, key), expectedValue);

	}
	
	@Then("^verify place_id created maps to \"([^\"]*)\" using \"([^\"]*)\"$")
	public void verify_place_id_created_maps_to_using(String expectedName, String getPlaceAPI) throws Throwable {
	   
		place_id = getJsonPath(response, "place_id");
		res = given().spec(requestSpecification()).queryParam("place_id", place_id);
		user_calls_with_http_request(getPlaceAPI,"GET"); //This will hit the getAplaceAPI and the 'response' variable will now be loaded with GET response 
		String actualName = getJsonPath(response, "name");  
		assertEquals(actualName, expectedName);	
	}
	
	@Given("^DeletePlace Payload$")
	public void deleteplace_Payload() throws Throwable {
	    
		res = given().spec(requestSpecification()).body(data.deletePlacePayLoad(place_id));
		
	}

}
