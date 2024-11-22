

describe('handling tabs', ()=>{


    it('Approach-1', ()=>{
        cy.visit("https://the-internet.herokuapp.com/windows",{
            setTimeout:90000,
        })
   
    
        cy.get('.example>a').invoke('removeAttr', 'target').click()
        cy.url().should("include", "https://the-internet.herokuapp.com/windows/new")

        cy.wait(5000);

        cy.go('back'); //back to parent tab
    })

//Approach 2 works for only url that are of same domain
    it.skip
    ('Approach 2', ()=>{
        cy.visit("http://the-internet.herokuapp.com/windows")
        cy.get('.example>a').then((element)=>{
            let url=element.prop('href');
        cy.visit(url);
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000);

        cy.go('back'); //back to parent tab
        })

    })

})

