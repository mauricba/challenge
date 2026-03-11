Gvien('the URL https://the-internet.herokuapp.com/login') => {
    // Navigate to the login page
    driver.goTo('https://the-internet.herokuapp.com/login');
}




Given('the $String credentials for the login ')(String credentials) => {
    if (credentials == 'valid') {
        // Set up valid credentials
        this.username.secret = 'tomsmith';
        this.password.secret = 'SuperSecretPassword!';
    } if (credentials == 'invalid') {
        // Set up invalid credentials
        this.username.secret = 'invalidUser';
        this.password.secret = 'invalidPassword';
    }
}


When('When I enter the credentials') => {
    // Enter the username and password
    // Consume the credentials from the context app file
    driver.findElement('#username').sendKeys(this.username.secret);
    driver.findElement('#password').sendKeys(this.password.secret);
    driver.findElement('button[type="submit"]').click();
}

Then('I see the Secure area page')=> {
    // Verify that the Secure area page is displayed
    driver.waitForElement(ByXpath('//h2[text()="Secure Area"]'), 5000);
    const flashMessage = driver.findElement('#flash').getText('Secure Area');
}

Then('I see the logged message') => {
    // Verify that the logged message is displayed
    const flashMessage = driver.findElement('#flash').getText('You logged into a secure area!');
}
