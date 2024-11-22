 describe ('Alerts',()=>{
    it ('Js alert',()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click();
        cy.on('wincydow:alert', (t)=>{
            expect(t).to.contains ('i am a JS Alert');

    })
    //alert window automatically closed by cypress
    cy.get('#result').should('have.text', 'you successfully clicked an alert')

    })

    //Javascript Confirm Alert: It will have some text with 'OK' and 'cancel' buttons
    it('Js Confirmation alert',()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click();
        cy.on('window:confirm', (t)=>{
            expect(t).to.contains ('I am a JS confirm');

    })
    cy.get('#result').should('have.text', 'you clicked: OK')
    cy.on('window:confirm', ()=>false)// cypress closed window with cancel button 
    cy.get('#result').should('have.text', 'you clicked: OK')

    })

    it ('Js Confirmation alert',()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('welcome')
        })
       
    cy.get("button[onclick='jsPrompt()']").click()
   // cy.on('window:prompt', ()=>false)// cypress closed window with cancel button 
    cy.get('#result').should('have.text', 'you  clicked: welcome')
   // cy.get('#result').should('have.text', 'you clicked: OK')

    })

    it.only ('Js Authenticated alert',()=>{

       // approach 1
        cy.visit('http://the-internet.herokuapp.com/basic_auth',{
            auth:
            {
                username:"admin",
                password:"admin"
            }
        });
        cy.get('p').should('have.contain', "congratulations")
       
        //approach 2
        cy.visit("http://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='exam ple']p").should('have.contain', "congratulations")

    })


 })