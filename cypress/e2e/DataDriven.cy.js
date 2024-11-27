describe('MyTest', ()=>{
    it('Datadriven', ()=>{

            cy.fixture('MyTestSuite').then((data)=>{
                cy.visit("https://opensource-demo.orangehrmlive.com")
                data.foreach(userdata => {
                    cy.get("input[placeholder='Username']").type(userdata.username)
                    cy.get("input[placeholder='Password']").type(data.Password)
                    cy.get("button[type='submit']").click()
    
                    cy.get(".oxd-topbar-header-title"). should('have.text', data.expected)
                    
                });
               
            })
    }) 
})