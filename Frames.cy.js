describe("handling frames", ()=>{

    it( 'approcach1',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")

        const iframe=cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)
        iframe.clear().type("bukunmi's corner {ctrl+a}")
        cy.get("[aria-label='Bold']").click()
    })
    
    it( 'approcach2-custom command',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.getIframe("#mce_0_ifr").clear().type("bukunmi's corner {ctrl+a}")
        cy.get("[aria-label='Bold']").click()
    })

    it( 'approcach3-cypress-iframe plugins',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.getIframe("#mce_0_ifr").clear().type("bukunmi's corner {ctrl+a}")
        cy.get("[aria-label='Bold']").click()
    })
})
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    