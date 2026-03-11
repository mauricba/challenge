##Test plan


## Title: Validate the valid login functionality
Scenario 1: Login valid

Gvien the URL https://the-internet.herokuapp.com/login
And the valid credentials for the login
When I enter the credentials
Then I see the Secure area page
And I see the logged message

## Title: Validate the invalid loginf functionality
Scenario 2: Login invalid

Gvien the URL https://the-internet.herokuapp.com/login
And the invalid credentials for the login
When I enter the credentials
Then I see the error layout message with invalid username


## Additional TEst Coverage:
1 - Validate blank input with the correct error message
2 - Validate the login of new users
3 - Validate the logout button functionality

## Bug Report
1 - The input of blank value in the login doesn't throw correct message error
Severity: Low
Steps: 
  - GO to the login page
  - Do not put any value in the inputs for username or password
  - Throw an error of invalid username and it should throw you cannot put blank values in the username or password

What would you automate first and why?
I should automate first risk-based features to validate and check the core functionality are working as expected

How would you run these tests in CI using GitHub Actions?
I would use Jenkins or AzureDevops to create the CI and link with the repository running the testing with the correct tagging of them and the correct webhooks.
