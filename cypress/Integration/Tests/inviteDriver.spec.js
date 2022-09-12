/**
 * @author [Shweta Naik]
 * @create date 2022-08-30 
 * @modify date 2022-09-07 
 */

/// <reference types="Cypress" />
import data from '../../fixtures/Brightmile.json'
import DriverPageMethods from "../PageMethods/DriverPageMethods";
import LoginMethods from "../PageMethods/LoginMethods"
import DriverPage from "../PageObjects/DriverPage";

describe("Invite Driver Feature Test", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    var loginmethods = new LoginMethods();
    var driverPageMethods = new DriverPageMethods();
    var driverPage = new DriverPage()
    beforeEach('bypass login', () => {
        cy.visit(Cypress.env('base_url'), {
            auth: {
                username: Cypress.env('auth_username'),
                password: Cypress.env('auth_password'),
            },
        })

        loginmethods.verifyManagerDashBoard();//verify the manager dashbaord
        loginmethods.EnterManagerCredintial();//This method will enter manager email ,password and login
        loginmethods.VerifyDashBordTitle();//This method will verify the page title after login
    })
    after('Logout and verify Dashboard', () => {
        loginmethods.ClickOnProfile();//this method will click on profile
        loginmethods.SignOut(); //This method will click on SignOut
        loginmethods.verifyManagerDashBoard();//This method willverify page title after logout
    })
    it("Click on driver section and verify invite driver feature", () => {

        driverPageMethods.ClickOnInviteDriver();//This method clicks on driver then clicks on invite driver button
        driverPageMethods.EnterDriverEmail();//This method enter the email address and clicks on next button 
        driverPage.getFirstNameTextBox().type(data.FirstName);//This meyhod will enter firstname
        driverPageMethods.EnterDriverLastName();//This method will enter last name
        driverPage.getContinueButton().click();//This method click on continue button
        driverPageMethods.AssignGropuForDriver();//This method assign the group for driver and create the driver invite
    })
    it("Cancel Driver invite", () => {
        driverPageMethods.ClickOnDriver();//This method will click ond river
        driverPageMethods.EnterEmailAddressInTheSearchBar();//this method willenter driver email insearch bar and clicks on show filters
        driverPage.getModalClose().click();//This method will close the modal dailog
        driverPageMethods.CancelDriverInvite();//This method will cancel the invite and verify the same
        driverPageMethods.ClickOnClose();//this method will click on close button

    })


})