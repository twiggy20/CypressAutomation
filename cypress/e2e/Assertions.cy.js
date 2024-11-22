
describe('Assertions demo', ()=>{
    it("Implicit assertions",()=>{
        cy.visit('https://merchant-test.bloommnow.com/')//launch the web app
        cy.url().should('include','test.bloommnow')//comfirm provided text is in url
            .and('eq','https://merchant-test.bloommnow.com/')
            .and('contain','test.bloommnow')
            .and('not.contain','test.blommnow')

            cy.title().should('include','Dashboard')//confirm text is included in title
            .and('eq','Bankly Dashboard')
            .and('contain','Bankly')

            cy.get('.content-area_imgDiv > img').should('be.visible').and('exist')//get and comfirm image is present 
            cy.get('.forgot-password').should('exist')

            cy.xpath('//a').should('have.length','4')//confirm lenght of links

           // cy.get('#usernameInput').type('hello@bankly.ng')//provide value in the input field
          // cy.get('#usernameInput').type('hello@bankly.ng').should('eq','hello@bankly.ng')
            cy.get('#usernameInput').type('hello@bankly.ng').should('have.value','hello@bankly.ng')

    } )


    it("Implicit negative assertions",()=>{
        cy.visit('https://merchant-test.bloommnow.com/')//launch the web app
        cy.get('#usernameInput').type('hello@bankly.ng')//input username
        cy.get('#passwordInput').type('Password1@.ng')//input password
        cy.get("button[type='submit']").click()//click the login button
        cy.get("div[class='alert-body'] p").should('contain', 'Invalid')//locate the error message
        cy.get("div[class='alert-body'] p").should('contain', 'Invalid')// assert the error msg
    } )
    it("Explicit assertions",()=>{
        cy.visit('https://merchant-test.bloommnow.com/')//launch the web app
         // cy.get('#usernameInput').type('hello@bankly.ng').should('eq','hello@bankly.ng')provide value in the input field and compare 
          // cy.get('#passwordInput').type('Password1@.ng').should('have.value','hello@bankly.ng')
        cy.get('#usernameInput').type('hello@bankly.ng')
      
        // cy.get('#passwordInput').type('Password1@')//locate password input field and type in it
        //  .then((password)=>{ const userPassword=/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/ // then create  expected value pattern
        //  //let myPassword=password.text()
        // expect (myPassword).to.match(userPassword)//compare value with expected pattern
        // })
      //let myPassword="Password1@"
        cy.get('#passwordInput').type("Password1@")
          expect("Password1@").to.not.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)
    
          // cy.get('#usernameInput').type("hello@bankly.ng")
          // expect("hello@bankly.ng").to.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
     

       /* cy.get('#usernameInput').type('hello@bankly.ng').then((email) => {
           const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
           let realEmail=email.text()
           expect(realEmail).to.match(emailPattern)
          })*/
          
       
        cy.get("button[type='submit']").click()
        
        //EXPLICIT ASERTIONS
        let expectedUser="hello@bankly.ng"
        cy.get('.profile-subtitle').then( (x)=>{
            let actualUser=x.text()

            //BDD STYLE
            expect(actualUser).to.equal(expectedUser)
           // expect(actualUser).to.not.equal(expectedUser)


            //TDD STYLE
             assert.equal(actualUser,expectedUser)
           //  assert.notEqual(actualUser,expectedUser)
        })
    } )
}) 