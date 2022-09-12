/**
 * @author [Shweta Naik]
 * @create date 2022-08-30 
 * @modify date 2022-09-07 
 */
/// <reference types="Cypress" />
class DriverPage{
    getDriver()
    {
        return cy.get('.MuiTab-wrapper > .Tooltip > .Text')
    }
    getInviteDriverButton()
    {
        return cy.get('.Drivers__actions-wrapper > :nth-child(1) > canvas')
    }
    getInviteManuallyButton()
    {
        return cy.get('.Button.--outlined > canvas')
    }
    getEmailTextBox()
    {
        return cy.get('#businessEmails')
    }
    getNextButton()
    {
        return cy.get('.InviteDriversForm__buttons > .Button > canvas')
    }
    getFirstNameTextBox()
    {
        return cy.get('#firstName')
    }
    getLastNameTextBox()
    {
        return cy.get('#lastName')
    }
    getContinueButton()
    {
        return cy.get('.InviteDriversForm__buttons > .Button > canvas')
    }
    getAssignToGroup()
    {
        return cy.get('.CheckboxList__wrapper > .MenuTrigger')
    }
    getGroup()
    {
        return  cy.get('.MuiIconButton-label').eq(1)
    }
    getInviteDriver()
    {
        return cy.get('.InviteDriversForm__buttons > .Button > canvas')
    }
    getDoneButton()
    {
        return cy.get('.Button.--outlined > canvas')
    }
    getDriverSerachField()
    {
        return cy.get(".Field__input-container")
    }
    getShowFilterButton()
    {
        return cy.get('.Button --skeletonIgnore AdvancedSearchFilter__advanced-button')
        

    }
    getFilterButton()
    {
        return cy.get('.AdvancedSearchFilter__controls > .Button > canvas')
    }
    getMenuDropDownButton()
    {
        return cy.get('.MenuDropdown > .Button > canvas')
    }
    getCancelInvite()
    {
        return cy.get('.-warning > canvas')
    }
    getSerachBar()
    {
        return cy.get('.Field__input-container').eq(1);
    }
    getConfirmButton()
    {
        return cy.get('.ConfirmModal__actions > :nth-child(1) > canvas')
    }
    getSuccessModalDailogBox()
    {
        return  cy.get('.Modal__dialog')
    }
    getMessage()
    {
        return  cy.get('.Modal__dialog > .--p')
    }
      getModalClose()
      {
        return cy.get('.Modal__dialog > .Button > canvas')
      }
      getDriverPageHeader()
      {
        return cy.get('h1')
        //return cy.get('.Text Hero__heading --h1')
      }
      getCloseButton()
      {
        return  cy.contains('Close')

      }
}
export default DriverPage;