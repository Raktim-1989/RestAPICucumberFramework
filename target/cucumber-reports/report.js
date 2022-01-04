$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("placeValidations.feature");
formatter.feature({
  "line": 1,
  "name": "Validating Place API\u0027s",
  "description": "",
  "id": "validating-place-api\u0027s",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": ": Verify if place is being successfully added using AddPlaceAPI",
  "id": "validating-place-api\u0027s;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@AddPlace"
    },
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Add Place Payload with \"\u003cname\u003e\" \"\u003clanguage\u003e\" \"\u003caddress\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user calls \"AddPlaceAPI\" with \"Post\" http request",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the API call got success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "\"scope\" in response body is \"APP\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify place_id created maps to \"\u003cname\u003e\" using \"getPlaceAPI\"",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "validating-place-api\u0027s;;",
  "rows": [
    {
      "cells": [
        "name",
        "language",
        "address"
      ],
      "line": 14,
      "id": "validating-place-api\u0027s;;;1"
    },
    {
      "cells": [
        "AAhouse",
        "English",
        "world cross center"
      ],
      "line": 15,
      "id": "validating-place-api\u0027s;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "",
  "description": ": Verify if place is being successfully added using AddPlaceAPI",
  "id": "validating-place-api\u0027s;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@AddPlace"
    },
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Add Place Payload with \"AAhouse\" \"English\" \"world cross center\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user calls \"AddPlaceAPI\" with \"Post\" http request",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the API call got success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "\"scope\" in response body is \"APP\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify place_id created maps to \"AAhouse\" using \"getPlaceAPI\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "AAhouse",
      "offset": 24
    },
    {
      "val": "English",
      "offset": 34
    },
    {
      "val": "world cross center",
      "offset": 44
    }
  ],
  "location": "StepDefination.add_Place_Payload_with(String,String,String)"
});
formatter.result({
  "duration": 1374129000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AddPlaceAPI",
      "offset": 12
    },
    {
      "val": "Post",
      "offset": 31
    }
  ],
  "location": "StepDefination.user_calls_with_http_request(String,String)"
});
formatter.result({
  "duration": 3224405900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 42
    }
  ],
  "location": "StepDefination.the_API_call_got_success_with_status_code(int)"
});
formatter.result({
  "duration": 3558700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "status",
      "offset": 1
    },
    {
      "val": "OK",
      "offset": 30
    }
  ],
  "location": "StepDefination.in_response_body_is(String,String)"
});
formatter.result({
  "duration": 751017600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "scope",
      "offset": 1
    },
    {
      "val": "APP",
      "offset": 29
    }
  ],
  "location": "StepDefination.in_response_body_is(String,String)"
});
formatter.result({
  "duration": 12380600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AAhouse",
      "offset": 33
    },
    {
      "val": "getPlaceAPI",
      "offset": 49
    }
  ],
  "location": "StepDefination.verify_place_id_created_maps_to_using(String,String)"
});
formatter.result({
  "duration": 2461791000,
  "status": "passed"
});
formatter.before({
  "duration": 75300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 16,
      "value": "#|BBhouse|IN-French |Sea cross center\t|"
    }
  ],
  "line": 19,
  "name": "Verify if Delete Place functionality is working",
  "description": "",
  "id": "validating-place-api\u0027s;verify-if-delete-place-functionality-is-working",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@DeletePlace"
    },
    {
      "line": 18,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "DeletePlace Payload",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user calls \"deletePlaceAPI\" with \"POST\" http request",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the API call got success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.deleteplace_Payload()"
});
formatter.result({
  "duration": 1291400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deletePlaceAPI",
      "offset": 12
    },
    {
      "val": "POST",
      "offset": 34
    }
  ],
  "location": "StepDefination.user_calls_with_http_request(String,String)"
});
formatter.result({
  "duration": 2734589700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 42
    }
  ],
  "location": "StepDefination.the_API_call_got_success_with_status_code(int)"
});
formatter.result({
  "duration": 106100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "status",
      "offset": 1
    },
    {
      "val": "OK",
      "offset": 30
    }
  ],
  "location": "StepDefination.in_response_body_is(String,String)"
});
formatter.result({
  "duration": 10384800,
  "status": "passed"
});
});