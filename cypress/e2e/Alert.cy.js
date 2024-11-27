 describe ('Alerts',()=>{
    it ('Js alert',()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts', )
        cy.get("button[onclick='jsAlert()']").click();
        cy.on('wincydow:alert', (t)=>{
            expect(t).to.contains ('i am a JS Alert');

    })
    //alert window automatically closed by cypress
    cy.get('#result').should('have.text', 'You successfully clicked an alert')

    })

    //Javascript Confirm Alert: It will have some text with 'OK' and 'cancel' buttons
    it('Js Confirmation alert',()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm', (text)=>{
            expect(text.toLowerCase()).to.contains('i am a js confirm');//ignore case
            expect(text).to.contains ('I am a JS Confirm');

    })
    cy.get('#result').should('have.text', 'You clicked: Ok')
   // cy.on('window:confirm', ()=>false)// cypress closed window with cancel button 
    //cy.get('#result').should('have.text', 'you clicked: Cancel')

    })

    it('Js Confirmation alert',()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('welcome')
        })
       
    cy.get("button[onclick='jsPrompt()']").click()
   // cy.on('window:prompt', ()=>false)// cypress closed window with cancel button 
    cy.get('#result').should('have.text', 'You entered: welcome')
   // cy.get('#result').should('have.text', 'you clicked: OK')

    })

    it('Js Authenticated alert',()=>{

       // approach 1
        cy.visit('http://the-internet.herokuapp.com/basic_auth',{
            auth:
            {
                username:"admin",
                password:"admin"
            }
        });
        cy.get('p').should('have.contain', "Congratulations")
       
        //approach 2
        cy.visit("http://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example'] p").should('have.contain', "Congratulations")

    })


 })