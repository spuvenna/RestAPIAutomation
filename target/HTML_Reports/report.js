$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("resources/features/socialNetworkingServices.feature");
formatter.feature({
  "line": 1,
  "name": "POST, GET APIs validation with paramenters passed and validate the response",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify post api with different parameters",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-post-api-with-different-parameters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "post api URI",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "post api is passed with \"\u003cparams\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Verify post api response code \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Verify post api response \"\u003cnoOfResponses\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify post response has with attributes",
  "rows": [
    {
      "cells": [
        "userId"
      ],
      "line": 9
    },
    {
      "cells": [
        "id"
      ],
      "line": 10
    },
    {
      "cells": [
        "title"
      ],
      "line": 11
    },
    {
      "cells": [
        "body"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-post-api-with-different-parameters;",
  "rows": [
    {
      "cells": [
        "params",
        "statusCode",
        "noOfResponses"
      ],
      "line": 15,
      "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-post-api-with-different-parameters;;1"
    },
    {
      "cells": [
        "id\u003d59",
        "200",
        "1"
      ],
      "line": 16,
      "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-post-api-with-different-parameters;;2"
    },
    {
      "cells": [
        "userId\u003d6",
        "200",
        "10"
      ],
      "line": 17,
      "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-post-api-with-different-parameters;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Verify post api with different parameters",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-post-api-with-different-parameters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "post api URI",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "post api is passed with \"id\u003d59\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Verify post api response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Verify post api response \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify post response has with attributes",
  "rows": [
    {
      "cells": [
        "userId"
      ],
      "line": 9
    },
    {
      "cells": [
        "id"
      ],
      "line": 10
    },
    {
      "cells": [
        "title"
      ],
      "line": 11
    },
    {
      "cells": [
        "body"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 0
    }
  ],
  "location": "SocialNetworkingStepDef.apiURI(String)"
});
formatter.result({
  "duration": 271592100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 0
    },
    {
      "val": "id\u003d59",
      "offset": 25
    }
  ],
  "location": "SocialNetworkingStepDef.apiIsPassedWith(String,String)"
});
formatter.result({
  "duration": 1739861600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 7
    },
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "SocialNetworkingStepDef.verify_comments_api_response_code(String,String)"
});
formatter.result({
  "duration": 1761600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 7
    },
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "SocialNetworkingStepDef.verify_post_api_response(String,String)"
});
formatter.result({
  "duration": 42569800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 7
    }
  ],
  "location": "SocialNetworkingStepDef.verify_users_response_has_with_attributes(String,DataTable)"
});
formatter.result({
  "duration": 1203400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify post api with different parameters",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-post-api-with-different-parameters;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "post api URI",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "post api is passed with \"userId\u003d6\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Verify post api response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Verify post api response \"10\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify post response has with attributes",
  "rows": [
    {
      "cells": [
        "userId"
      ],
      "line": 9
    },
    {
      "cells": [
        "id"
      ],
      "line": 10
    },
    {
      "cells": [
        "title"
      ],
      "line": 11
    },
    {
      "cells": [
        "body"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 0
    }
  ],
  "location": "SocialNetworkingStepDef.apiURI(String)"
});
formatter.result({
  "duration": 1025800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 0
    },
    {
      "val": "userId\u003d6",
      "offset": 25
    }
  ],
  "location": "SocialNetworkingStepDef.apiIsPassedWith(String,String)"
});
formatter.result({
  "duration": 654178600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 7
    },
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "SocialNetworkingStepDef.verify_comments_api_response_code(String,String)"
});
formatter.result({
  "duration": 337800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 7
    },
    {
      "val": "10",
      "offset": 26
    }
  ],
  "location": "SocialNetworkingStepDef.verify_post_api_response(String,String)"
});
formatter.result({
  "duration": 582500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 7
    }
  ],
  "location": "SocialNetworkingStepDef.verify_users_response_has_with_attributes(String,DataTable)"
});
formatter.result({
  "duration": 897500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Verify comments api with different parameters",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-comments-api-with-different-parameters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "comments api URI",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "comments api is passed with \"\u003cparams\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Verify comments api response code \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Verify comments api response \"\u003cnoOfResponses\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify comments response has with attributes",
  "rows": [
    {
      "cells": [
        "postId"
      ],
      "line": 25
    },
    {
      "cells": [
        "id"
      ],
      "line": 26
    },
    {
      "cells": [
        "name"
      ],
      "line": 27
    },
    {
      "cells": [
        "email"
      ],
      "line": 28
    },
    {
      "cells": [
        "body"
      ],
      "line": 29
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-comments-api-with-different-parameters;",
  "rows": [
    {
      "cells": [
        "params",
        "statusCode",
        "noOfResponses"
      ],
      "line": 32,
      "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-comments-api-with-different-parameters;;1"
    },
    {
      "cells": [
        "email\u003dNikita@garfield.biz",
        "200",
        "1"
      ],
      "line": 33,
      "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-comments-api-with-different-parameters;;2"
    },
    {
      "cells": [
        "postId\u003d3",
        "200",
        "5"
      ],
      "line": 34,
      "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-comments-api-with-different-parameters;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 33,
  "name": "Verify comments api with different parameters",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-comments-api-with-different-parameters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "comments api URI",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "comments api is passed with \"email\u003dNikita@garfield.biz\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Verify comments api response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Verify comments api response \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify comments response has with attributes",
  "rows": [
    {
      "cells": [
        "postId"
      ],
      "line": 25
    },
    {
      "cells": [
        "id"
      ],
      "line": 26
    },
    {
      "cells": [
        "name"
      ],
      "line": 27
    },
    {
      "cells": [
        "email"
      ],
      "line": 28
    },
    {
      "cells": [
        "body"
      ],
      "line": 29
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 0
    }
  ],
  "location": "SocialNetworkingStepDef.apiURI(String)"
});
formatter.result({
  "duration": 866000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 0
    },
    {
      "val": "email\u003dNikita@garfield.biz",
      "offset": 29
    }
  ],
  "location": "SocialNetworkingStepDef.apiIsPassedWith(String,String)"
});
formatter.result({
  "duration": 606353500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 7
    },
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "SocialNetworkingStepDef.verify_comments_api_response_code(String,String)"
});
formatter.result({
  "duration": 283300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 7
    },
    {
      "val": "1",
      "offset": 30
    }
  ],
  "location": "SocialNetworkingStepDef.verify_post_api_response(String,String)"
});
formatter.result({
  "duration": 407100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 7
    }
  ],
  "location": "SocialNetworkingStepDef.verify_users_response_has_with_attributes(String,DataTable)"
});
formatter.result({
  "duration": 325400,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify comments api with different parameters",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-comments-api-with-different-parameters;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "comments api URI",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "comments api is passed with \"postId\u003d3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Verify comments api response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Verify comments api response \"5\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify comments response has with attributes",
  "rows": [
    {
      "cells": [
        "postId"
      ],
      "line": 25
    },
    {
      "cells": [
        "id"
      ],
      "line": 26
    },
    {
      "cells": [
        "name"
      ],
      "line": 27
    },
    {
      "cells": [
        "email"
      ],
      "line": 28
    },
    {
      "cells": [
        "body"
      ],
      "line": 29
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 0
    }
  ],
  "location": "SocialNetworkingStepDef.apiURI(String)"
});
formatter.result({
  "duration": 651700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 0
    },
    {
      "val": "postId\u003d3",
      "offset": 29
    }
  ],
  "location": "SocialNetworkingStepDef.apiIsPassedWith(String,String)"
});
formatter.result({
  "duration": 1019735100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 7
    },
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "SocialNetworkingStepDef.verify_comments_api_response_code(String,String)"
});
formatter.result({
  "duration": 400800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 7
    },
    {
      "val": "5",
      "offset": 30
    }
  ],
  "location": "SocialNetworkingStepDef.verify_post_api_response(String,String)"
});
formatter.result({
  "duration": 516000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 7
    }
  ],
  "location": "SocialNetworkingStepDef.verify_users_response_has_with_attributes(String,DataTable)"
});
formatter.result({
  "duration": 571700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 36,
  "name": "Verify users api with different parameters",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-users-api-with-different-parameters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 37,
  "name": "users api URI",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "users api is passed with \"\u003cparams\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Verify users api response code \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Verify users api response \"\u003cnoOfResponses\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Verify users response has with attributes",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 42
    },
    {
      "cells": [
        "name"
      ],
      "line": 43
    },
    {
      "cells": [
        "phone"
      ],
      "line": 44
    },
    {
      "cells": [
        "email"
      ],
      "line": 45
    },
    {
      "cells": [
        "website"
      ],
      "line": 46
    },
    {
      "cells": [
        "company"
      ],
      "line": 47
    },
    {
      "cells": [
        "address"
      ],
      "line": 48
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 50,
  "name": "",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-users-api-with-different-parameters;",
  "rows": [
    {
      "cells": [
        "params",
        "statusCode",
        "noOfResponses"
      ],
      "line": 51,
      "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-users-api-with-different-parameters;;1"
    },
    {
      "cells": [
        "website\u003danastasia.net",
        "200",
        "1"
      ],
      "line": 52,
      "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-users-api-with-different-parameters;;2"
    },
    {
      "cells": [
        "id\u003d9",
        "200",
        "1"
      ],
      "line": 53,
      "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-users-api-with-different-parameters;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 52,
  "name": "Verify users api with different parameters",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-users-api-with-different-parameters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 37,
  "name": "users api URI",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "users api is passed with \"website\u003danastasia.net\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Verify users api response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Verify users api response \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Verify users response has with attributes",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 42
    },
    {
      "cells": [
        "name"
      ],
      "line": 43
    },
    {
      "cells": [
        "phone"
      ],
      "line": 44
    },
    {
      "cells": [
        "email"
      ],
      "line": 45
    },
    {
      "cells": [
        "website"
      ],
      "line": 46
    },
    {
      "cells": [
        "company"
      ],
      "line": 47
    },
    {
      "cells": [
        "address"
      ],
      "line": 48
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 0
    }
  ],
  "location": "SocialNetworkingStepDef.apiURI(String)"
});
formatter.result({
  "duration": 681700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 0
    },
    {
      "val": "website\u003danastasia.net",
      "offset": 26
    }
  ],
  "location": "SocialNetworkingStepDef.apiIsPassedWith(String,String)"
});
formatter.result({
  "duration": 607487700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 7
    },
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "SocialNetworkingStepDef.verify_comments_api_response_code(String,String)"
});
formatter.result({
  "duration": 367100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 7
    },
    {
      "val": "1",
      "offset": 27
    }
  ],
  "location": "SocialNetworkingStepDef.verify_post_api_response(String,String)"
});
formatter.result({
  "duration": 369000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 7
    }
  ],
  "location": "SocialNetworkingStepDef.verify_users_response_has_with_attributes(String,DataTable)"
});
formatter.result({
  "duration": 258800,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Verify users api with different parameters",
  "description": "",
  "id": "post,-get-apis-validation-with-paramenters-passed-and-validate-the-response;verify-users-api-with-different-parameters;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 37,
  "name": "users api URI",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "users api is passed with \"id\u003d9\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Verify users api response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Verify users api response \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Verify users response has with attributes",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 42
    },
    {
      "cells": [
        "name"
      ],
      "line": 43
    },
    {
      "cells": [
        "phone"
      ],
      "line": 44
    },
    {
      "cells": [
        "email"
      ],
      "line": 45
    },
    {
      "cells": [
        "website"
      ],
      "line": 46
    },
    {
      "cells": [
        "company"
      ],
      "line": 47
    },
    {
      "cells": [
        "address"
      ],
      "line": 48
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 0
    }
  ],
  "location": "SocialNetworkingStepDef.apiURI(String)"
});
formatter.result({
  "duration": 647700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 0
    },
    {
      "val": "id\u003d9",
      "offset": 26
    }
  ],
  "location": "SocialNetworkingStepDef.apiIsPassedWith(String,String)"
});
formatter.result({
  "duration": 1019848400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 7
    },
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "SocialNetworkingStepDef.verify_comments_api_response_code(String,String)"
});
formatter.result({
  "duration": 277300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 7
    },
    {
      "val": "1",
      "offset": 27
    }
  ],
  "location": "SocialNetworkingStepDef.verify_post_api_response(String,String)"
});
formatter.result({
  "duration": 459200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 7
    }
  ],
  "location": "SocialNetworkingStepDef.verify_users_response_has_with_attributes(String,DataTable)"
});
formatter.result({
  "duration": 293600,
  "status": "passed"
});
});