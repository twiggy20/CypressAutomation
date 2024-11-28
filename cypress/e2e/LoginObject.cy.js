import login from "../PageObjects/Login.js";
describe('object', ()=>{
    //general appropach
    it ('login', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        //cy.get('.oxd-button'). should('have.text', 'Dashboard')

    })
    //using page object model 
    it('login Class', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com")
       const UserLogin= new login() //create an instance of the class
       UserLogin.setUsername('Admin')
       UserLogin.setPassword('admin123')
       UserLogin.ClickSubmit()
       UserLogin.verifyLogin()

    })
    //using page object model with fixtures
    it.only('login Class with fixture', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com")
        
       cy.fixture('PositiveTest').then((data)=>{
       const UserLogin= new login() //create an instance of the class
       UserLogin.setUsername(data.username)
       UserLogin.setPassword(data.password)
       UserLogin.ClickSubmit()
       UserLogin.verifyLogin()
        })

    })

})