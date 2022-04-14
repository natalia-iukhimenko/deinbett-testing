import {Given} from "cypress-cucumber-preprocessor/steps";
import brandHeader from "../../elements/brand_header";
import loginPage from "../../pages/login_page";
import {getRandomValueFromArray} from "../../support/utils";
import registrationPage from "../../pages/registration_page";

const {faker} = require('@faker-js/faker');

Given('user opened login page', () => {
    openLoginPage();
})

Given('user logged in the system with {string}, {string}', (email, password) => {
    login(email, password);
})

Given('test user logged in the system', () => {
    login(Cypress.env('email'), Cypress.env('password'));
})

Given('user opened registration page', () => {
    cy.openMainPage();
    brandHeader.openLoginPage();
    loginPage.openRegistrationPage();
})

And('user registered with randomly generated data', () => {
    cy.fixture('userData').then(data => {
        let gender = getRandomValueFromArray(data.allowedGender);
        let password = faker.internet.password(10, true, /a-z/, 'A1?');
        registrationPage.selectSalutation(gender)
            .fillFirstName(faker.name.firstName(gender))
            .fillLastName(faker.name.lastName(gender))
            .fillEmail(faker.internet.exampleEmail())
            .fillPassword(password)
            .fillPasswordConfirmation(password)
            .checkAgbCheckbox();
    });
    registrationPage.confirmRegistration();
})

Then('user is logged in', () => {
    brandHeader.checkUserAccountIconDisplayed();
})

function login(email, password) {
    openLoginPage();
    loginPage.doLogin(email, password);
}

function openLoginPage() {
    cy.openMainPage();
    brandHeader.openLoginPage();
}