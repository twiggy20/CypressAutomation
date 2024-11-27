
describe ("My Test", ()=>{

    it('validate logo Aand title', ()=>{
        cy.visit("http://localhost:5173/")
        cy.get('.css-5lq2mi > .chakra-text').contains("Logo")
        cy.get('.chakra-heading').should('have.text',"Create account")
        cy.get('.css-tl3ftk > .chakra-text').should('have.text', "Get up and running and start booking appointments")
    })

    it('Validate Error Feedbacks',()=>{
        cy.visit("http://localhost:5173/")
        cy.get("button[type='submit']").click()
        cy.get('#firstName-feedback').should('have.text', 'Firs name is required')
        cy.get('#lastName-feedback').should('have.text', 'Last name is required')
       // cy.get('#email-feedback').invoke('val').should('match',  /^[^\s@]+@[^\s@]+\.[^\s@]+$/)
        cy.get('#email-feedback').should('have.text', 'Email is required')
        cy.get('#password-feedback').should('have.text', 'Password Confirmation is required')

    })

    it('Validate eamil address',()=>{
        cy.visit("http://localhost:5173/")
        cy.get('#email').type('email')
        cy.get("button[type='submit']").click()
        cy.get('#email-feedback').should('have.text', 'Must be a valid email address')
        //cy.get('#email-feedback').invoke('val').should('match',  /^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    })
    it('Validate Password Uppercase Condition',()=>{
        cy.visit("http://localhost:5173/")
        var Pass_Upper='P'
      //  var NumberOfConditions=5
      // for( var i=0; i<=NumberOfConditions; i++){}
        cy.get(':nth-child(3) > .chakra-input__group > #password').type(Pass_Upper)
        cy.get(':nth-child(3) > .chakra-input__group > #password').invoke('val').should('match', /.*[A-Z].*/);
        cy.get('.css-1wc3tdj > :nth-child(2)').should('have.css', 'color', 'rgb(255, 255, 255)')

    })

    it('Validate Password Lowercase Condition',()=>{
        cy.visit("http://localhost:5173/")
        var Pass_Lower='Pass'
        cy.get(':nth-child(3) > .chakra-input__group > #password').type(Pass_Lower)
        cy.get(':nth-child(3) > .chakra-input__group > #password').invoke('val').should('match', /.*[a-z].*/);
        cy.get('.css-1wc3tdj > :nth-child(2)').should('have.css', 'color', 'rgb(255, 255, 255)')

    })

    it('Validate Password Number Condition',()=>{
        cy.visit("http://localhost:5173/")
        var Pass_Number='Pass1'
        var Pass_Number='Password1@'
        cy.get(':nth-child(3) > .chakra-input__group > #password').type(Pass_Number)
        cy.get(':nth-child(3) > .chakra-input__group > #password').invoke('val').should('match', /.*\d.*/);
        cy.get('.css-1wc3tdj > :nth-child(4)').should('have.css', 'color', 'rgb(255, 255, 255)')

    })
    it('Validate Password special Symbol Condition',()=>{
        cy.visit("http://localhost:5173/")
        var Pass_Symbol='Pass1@'
        cy.get(':nth-child(3) > .chakra-input__group > #password').type(Pass_Symbol)
        cy.get(':nth-child(3) > .chakra-input__group > #password').invoke('val').should('match',  /.*[!@#$%^&*()_+{}|:;'"<>?`\-=[\]\\;',./].*/);
        cy.get('.css-1wc3tdj > :nth-child(5)').should('have.css', 'color', 'rgb(255, 255, 255)')

    })
    it('Validate Password 8 Character Condition',()=>{
        cy.visit("http://localhost:5173/")
        var Pass_Char8='Password1@'
        cy.get(':nth-child(3) > .chakra-input__group > #password').type(Pass_Char8)
        cy.get(':nth-child(3) > .chakra-input__group > #password').invoke('val').should('match', /.{8,}/);
        cy.get('.css-1wc3tdj > :nth-child(1)').should('have.css', 'color', 'rgb(255, 255, 255)')

    })

    it('Fill Entire form',()=>{
        cy.visit("http://localhost:5173/")
        cy.get('#firstName'). type("bukunmi")
        cy.get('#lastName').type('osinuga')
        cy.get(':nth-child(3) > .chakra-input__group > #password').type('bukunmi@gmail.com')
        cy.get(':nth-child(3) > .chakra-input__group > #password').clear()
        cy.get(':nth-child(3) > .chakra-input__group > #password').type('Password1@')
        cy.get(':nth-child(5) > .chakra-input__group > #password').type('P@ssword1')
        cy.get("button[type='submit']").click()
       // cy.get(':nth-child(3) > .chakra-input__group > #password').invoke('val').should('match', /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:"<>?`\-=[\]\\;',./]).{8,}$/); 
    })

      //  cy.get(':nth-child(3) > .chakra-input__group > #password').invoke('val').should('match', /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:"<>?`\-=[\]\\;',./]).{8,}$/);
    })
    
