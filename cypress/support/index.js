import './commands'
import '@shelex/cypress-allure-plugin';

require("cypress-xpath");
require('@shelex/cypress-allure-plugin');

Cypress.Cookies.defaults({
    preserve: 'optOutAccepted',
})
