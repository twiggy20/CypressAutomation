


describe('handle dropdowns', ()=>{


    it.skip('Dropdown with selects',()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get('#zcf_address_country')//locate the dropdown element
        .select('Zambia')//select an option from the dropdown element
        .should('have.value', 'Zambia')
    })

    it.skip('Dropdown without select',()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container')//locate the dropdown element
        .click()//select an option from the dropdown element
        cy.get('.select2-search__field').type('zambia').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text','Zambia')//locate the dropdown element
   
    })

    it.skip('Auto suggestion Dropdown',()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').type('Delhi')//locate the dropdown element
        cy.get( '.suggestion-title').contains('Delhi University').click()//locate a particular suggestion option
       // cy.get('#select2-billing_country-container').should('have.text','Zambia')//locate the dropdown element
   
    })

    it('Dynamic Dropdown',()=>{
        cy.visit("https://www.google.com/")
        cy.get("#APjFqb" ).type("cypress automation")//locate the dropdown element
        var count=cy.get('div.wM6W7d>span')
        count.length
        console.log('${count.length}')
    //    .should('have.length', 12)
       cy.get('div.wM6W7d>span').contains('cypress automation resume').click()
      // cy.wait(3000)
        // cy.get('div.wM6W7d>span').each( ($element, index, $list)=>{
        //     if ($element.text()==='cypress automation resume'){
        //         cy.wrap($element).click()
        //     }
        
        // } )
        cy.get("#APjFqb").should('have.value', 'cypress automation resume')
    })
})   
