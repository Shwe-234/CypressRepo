/**
 * @author [Shweta Naik]
 * @create date 2022-08-30 
 * @modify date 2022-09-07 
 */
/// <reference types="Cypress" />
import DriverPage from '../PageObjects/DriverPage'
var driverPage = new DriverPage();
let randomText = ""
let testEmail = ""
let lastName = ""
var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
for (var i = 0; i < 10; i++)
    randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
testEmail = randomText + '@gmail.com'

class DriverPageMethods {


    ClickOnInviteDriver() {
        driverPage.getDriver().should('be.visible').click();
        driverPage.getDriverPageHeader().should('be.visible')
        driverPage.getInviteDriverButton().should('be.visible').click();
        driverPage.getInviteManuallyButton().should('be.visible').click();
    }
    EnterDriverEmail() {

        driverPage.getEmailTextBox().should('be.visible').clear().type(testEmail)
        driverPage.getNextButton().should('be.visible').click();

    }
    EnterEmailAddressInTheSearchBar() {

        driverPage.getDriverSerachField().should('be.visible').clear().type(testEmail)
        driverPage.getFilterButton().should('be.visible').click();
        // driverPage.getClose().should('be.visible').click();
    }
    EnterDriverLastName() {
        var number = 0;
        var digits = '';

        for (var i = 0; i < 3; i++) {
            number = Math.floor(Math.random() * 10);
            digits = digits + number.toString();
        }
        driverPage.getLastNameTextBox().should('be.visible').clear().type(digits)
    }
    AssignGropuForDriver() {
        driverPage.getAssignToGroup().should('be.visible').click();
        driverPage.getSerachBar().type('fre')
        driverPage.getGroup().should('be.visible').click();
        driverPage.getInviteDriver().should('be.visible').click();
        driverPage.getDoneButton().should('be.visible').click();
    }
    CancelDriverInvite() {
        cy.scrollTo(0, 300)
        driverPage.getMenuDropDownButton().should('be.visible').click()
        driverPage.getCancelInvite().should('be.visible').click()
        driverPage.getConfirmButton().should('be.visible').click()
        driverPage.getSuccessModalDailogBox().should('be.visible')
        driverPage.getMessage().should('be.visible').then(($msg) => {
            const SuccessMessage = $msg.text();
            cy.log(SuccessMessage)
        })
        //driverPage.getCloseButton().click();
    }
    ClickOnContinueButton() {
        driverPage.getContinueButton().should('be.visible').click()
    }
    ClickOnDriver() {
        driverPage.getDriver().should('be.visible').click();
    }
    ClosePopup() {
        driverPage.getModalClose().should('be.visible').click();
    }
    VerifyDriverPage() {
        driverPage.getDriverPageHeader().should('be.visible')
    }
    ClickOnClose() {
        driverPage.getCloseButton().should('be.visible').click();
    }


}

export default DriverPageMethods;