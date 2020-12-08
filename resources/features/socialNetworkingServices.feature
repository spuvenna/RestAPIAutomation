Feature: POST, GET APIs validation with paramenters passed and validate the response 

Scenario Outline: Verify post api with different parameters 
	Given post api URI 
	When post api is passed with "<params>" 
	Then Verify post api response code "<statusCode>" 
	And Verify post api response "<noOfResponses>" 
	And Verify post response has with attributes 
		|userId   |
		|id       |
		|title    |
		|body     |
		
	Examples: 
		|params    |statusCode|noOfResponses| 
		|id=59     |200       |1			|
		|userId=6  |200       |10           |
		
Scenario Outline: Verify comments api with different parameters 
	Given comments api URI 
	When comments api is passed with "<params>" 
	Then Verify comments api response code "<statusCode>" 
	And Verify comments api response "<noOfResponses>" 
	And Verify comments response has with attributes 
		|postId	  |
		|id       |
		|name     |
		|email    |
		|body     |
		
	Examples: 
		|params					      |statusCode|noOfResponses| 
		|email=Nikita@garfield.biz    |200       |1			   |
		|postId=3					  |200       |5            |
		
Scenario Outline: Verify users api with different parameters 
	Given users api URI 
	When users api is passed with "<params>" 
	Then Verify users api response code "<statusCode>" 
	And Verify users api response "<noOfResponses>" 
	And Verify users response has with attributes 
		|id       |
		|name     |
		|phone    |
		|email    |    
		|website  |
		|company  |
		|address  |
		
	Examples: 
		|params					      |statusCode|noOfResponses| 
		|website=anastasia.net		  |200       |1		       |
		|id=9						  |200       |1            |