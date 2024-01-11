//const { describe } = require("mocha");

describe('My First Test', () => {
    it('verify title-positive', () => {
     // expect(true).to.equal(false)
      cy.visit("https://billions-test.bankly.ng/dashboard")
      cy.title().should("eq","OrangeHRM")
    })


   // it('verify title-negative', () => {
      // expect(true).to.equal(false)
      // cy.visit("https://opensource-demo.orangehrmlive.com/")
       //cy.title().should("eq","OrangeHRM1")
     })
 // })