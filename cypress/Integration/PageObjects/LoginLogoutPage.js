/**
 * @author [Shweta Naik]
 * @create date 2022-08-30 
 * @modify date 2022-09-07 
 */
/// <reference types="Cypress" />
class LoginLogoutPage{
    getManagerEmailTextBox()
    {
        return  cy.get('#email')
    }
    getManagerPasswordTextBox()
    {
        return cy.get('#password')
    }
    getSignInButton()
    {
        return cy.get('.Box > .Button > canvas')
    }
    getSelectGroupMenu()
    {
        return  cy.get('.Navigation__groups > .MenuTrigger > .Button > canvas')
    }
    getBrightMileGroup()
    {
        return cy.get('.MuiIconButton-label').eq(0)
    }
    
    getSelectedGroupHeaderTitle()
    {
        return cy.get('h2');
    }
    getProfileMenu()
    {
        return cy.get('.Navigation__user > .MenuTrigger > .Button > canvas')
    }
    getSignOutButton()
    {
    
        return cy.contains('Sign out')
    }
    getModalDailogBox()
    {
        return cy.get('.Modal__dialog --visible')
    }
    getDashBoardHeaderName()
    {
       return cy.get('h2')
    }
    getGroupBar()
    {
        return cy.get('.MenuTrigger > .Tooltip')
    }
    getSearchGroupValueBar()
    {
        return cy.get('.Field__input-container')
    }
    getGroupCheckBox()
    {
        return cy.get('.MuiIconButton-label').eq(0)
    }
}
export default LoginLogoutPage;