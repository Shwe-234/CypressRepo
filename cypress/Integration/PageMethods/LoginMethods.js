/**
 * @author [Shweta Naik]
 * @create date 2022-08-30 
 * @modify date 2022-09-07 
 */
/// <reference types="Cypress" />
import LoginLogoutPage from '../PageObjects/LoginLogoutPage'
import data from '../../fixtures/Brightmile.json'
import { should } from 'chai'
var loginlogoutpage = new LoginLogoutPage()
class LoginMethods {
    EnterManagerCredintial() {
        loginlogoutpage.getManagerEmailTextBox().should('be.visible').clear().type(data.Email).should('have.value', data.Email)
        loginlogoutpage.getSignInButton().should('be.visible').click()
        loginlogoutpage.getManagerPasswordTextBox().should('be.visible').clear().type(data.Password)
        loginlogoutpage.getSignInButton().should('be.visible').click()

    }
    SelectAGroup() {
        loginlogoutpage.getGroupBar().should('be.visible').click()
        loginlogoutpage.getSearchGroupValueBar().should('be.visible').type(data.Groupname);
        loginlogoutpage.getGroupCheckBox().should('be.visible').click();
    }
    VerifySelectedGroup() {
        loginlogoutpage.getSelectedGroupHeaderTitle().should('be.visible')
    }
    verifyManagerDashBoard() {
        cy.title().should('eq', data.ManagerDashBoardTitle)
    }

    SignOut() {
        cy.wait(2000)
        loginlogoutpage.getSignOutButton().trigger('mouseover').click()
        //loginlogoutpage.getSignOutButton().should('be.visible').click()
    }
    ClickOnProfile() {
        loginlogoutpage.getProfileMenu().should('be.visible').click()
    }
    VerifyDashBordTitle() {
        loginlogoutpage.getDashBoardHeaderName().should('be.visible')
    }
    EnterGroupName() {
        loginlogoutpage.getSerachGroupBar();
    }
}
export default LoginMethods;