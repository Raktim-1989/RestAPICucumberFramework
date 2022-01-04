package stepDefinitions;

import cucumber.api.java.Before;

public class Hooks {

	@Before("@DeletePlace")
	public void beforeScenario() throws Throwable {
		// This code will only be executed when @DeletePlace scenario is independently
		// executing i.e before executing @DeletePlace scenario this will be executed
		// Also, we will bring some intelligence in this code so that, so place_id is
		// not null, this code will not be executed

		StepDefination s = new StepDefination();
		if (StepDefination.place_id == null) {

			s.add_Place_Payload_with("Raktim", "English", "Charlotte");
			s.user_calls_with_http_request("AddPlaceAPI", "POST");
			s.verify_place_id_created_maps_to_using("Raktim", "getPlaceAPI");

		}

	}

}
