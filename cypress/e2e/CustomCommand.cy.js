describe('Test Custome Command', ()=>{
    it ('handlingLink', ()=>{
        cy.visit('https://demo.nopcommerce.com/')
        //direct without custome commands
        cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)")
        .click()
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch')
   
   //using custome commands
   cy.clicklink('Apple MacBook Pro 13-inch')
   cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch')
    })
})