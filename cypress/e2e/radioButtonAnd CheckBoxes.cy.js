///<reference types="Cypress"/>

describe("check UI Elements", ()=>{

    it.skip("checking Radio buttons", ()=>{
        cy.visit("https://www.w3schools.com/html/html_forms.asp")
        cy.get("#css"). should('be.visible')// locate the radio button and check if it exist on the page
        cy.get("#html"). should('be.visible')

        //selecting radio button
        cy.get('#navbtn_exercises').invoke('css', 'visibility', 'hidden')
        cy.get('.tnb-desktop-nav').invoke('css', 'visibility', 'hidden')
        cy.get('#pagetop').invoke('css', 'visibility', 'hidden')
        cy.get('#dropdown-nav-outer-wrapper').invoke('css', 'visibility', 'hidden')
        cy.get("#html").check().should('be.checked')// select radio button 
        cy.get("#css").should('not.be.checked')// other radio button is automatically unchecked
    }) 

     it("checking check buttons", ()=>{
        cy.visit("https://www.w3schools.com/html/html_forms.asp")
        cy.get("#vehicle1"). should('be.visible')// locate the checkbox and check if it exist on the page
       
        //selecting single check box-monday
        cy.get('.tnb-nav-btn').invoke('css', 'visibility', 'hidden')
        cy.get('.tnb-desktop-nav').invoke('css', 'visibility', 'hidden')
        cy.get('#pagetop').invoke('css', 'visibility', 'hidden')
        cy.get('#dropdown-nav-outer-wrapper').invoke('css', 'visibility', 'hidden')
        cy.get("#vehicle1").check().should('be.checked')// check the check box
        
        //unselecting single check box-monday
       
        cy.get("#vehicle1").uncheck().should('not.be.checked')// other radio button is automatically unchecked
        //selecting all the checkbox
        cy.get("[type='checkbox']").check().should('be.checked') 
          //unselecting all the checkbox
        cy.get("[type='checkbox']").uncheck().should('not.be.checked')

        
        //select first checkbox
        cy.get("[type='checkbox']").first().check().should('be.checked') 
         //select last checkbox
        cy.get("[type='checkbox']").last().check().should('be.checked') 


    }) 
})