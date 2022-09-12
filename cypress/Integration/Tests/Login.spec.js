/**
 * @author [Shweta Naik]
 * @create date 2022-08-30
 * @modify date 2022-09-07 
 */
/// <reference types="Cypress" />
import LoginMethods from '../PageMethods/LoginMethods'
describe("BrightMile Poc", () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  var loginmethods = new LoginMethods()
  beforeEach('bypass login', () => {
    cy.visit(Cypress.env('base_url'), {
      auth: {
        username: Cypress.env('auth_username'),
        password: Cypress.env('auth_password'),
      },
    })
    loginmethods.verifyManagerDashBoard(); //verify the manager dashbaord
    loginmethods.EnterManagerCredintial();//This method will enter manager email, password and login
    loginmethods.VerifyDashBordTitle();  //This method will verify the page title after login

  })
  afterEach('Logout and verify Dashboard', () => {

    loginmethods.ClickOnProfile();//this method will click on profile
    loginmethods.SignOut();//This method will click on SignOut
    loginmethods.verifyManagerDashBoard();//This method willverify page title after logout
  })
  it("Serach Options Test", () => {
    loginmethods.SelectAGroup();//This method will search a group and select it
    loginmethods.VerifySelectedGroup();//This method will verify the selected group page header

  })

})