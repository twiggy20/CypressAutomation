describe("MyTest", ()=>{
    it ("Book Appointment", ()=>{
        cy.visit('https://dev.bookadoc.com')
        cy.get('.css-ws99ey > div.css-0 > .css-j2xuuv > .css-1n11jg3 > .chakra-button').click()
        /*cy.get('.css-1uw20nc')
         .eq(0)
        .contains('8:40 AM') // Find the element with the specific text
        .click()
        */
        cy.get(':nth-child(3) > .css-pyffwl > .css-0 > .css-16y3pk6 > :nth-child(1) > .css-1eynlow > .css-vw9h3m > .css-hoe9xz > .chakra-link').click() //view for all available item
        cy.get('.css-19tzdhs').find('.css-1ayopiu').first().click()

        cy.get('.css-jae4cd > .css-1c66ffr > .css-73qj6l > .css-1t7fjft > .css-70qvj9 > .chakra-image').click({ force: true })
        cy.get('#first_name > .chakra-input').type('John')
        cy.get('#last_name > .chakra-input').type('Doe')
        cy.get('.css-1art13b > .chakra-input__group > .chakra-input').type('tsanyaolo+bukm@alethain.com')
        cy.get('#birthdate > .chakra-form-control > .react-datepicker-wrapper > .react-datepicker__input-container > .custom-datepicker').click()
        cy.get('.react-datepicker__day--021').click(); // pick a day
        cy.get('.css-kt9pgy > .chakra-input__group > .chakra-input').type('8123456789')
        cy.get(':nth-child(1) > .css-1eurhn4 > .css-1ixqrih').click()
        cy.get(':nth-child(2) > .chakra-stack > .css-1vqzi8w').click()
        cy.get(':nth-child(3) > .chakra-stack > .css-1vqzi8w').click()
        cy.intercept('POST', 'https://dev-api.bookadoc.com/api/v1/auth/register/guest').as('apiCall');

        // Perform the action that triggers the API call
        cy.get('.css-1lggxi8 > .chakra-button').click()
       
        cy.wait('@apiCall').then((interception) => {
            //expect(interception.status).to.eq(201);
          
          cy.log('Intercepted Response:', interception.response.body);// Log the intercepted response
    
          // Use the response data
          const otp = interception.response.body.otp;
          cy.log('The OTP is:', otp);
          cy.get("input[placeholder='0'][aria-label='Please enter OTP character 1']").type(otp)
          cy.get('.css-1wwi5nt > .chakra-button').click()
         // cy.get('.chakra-stack.css-1yxzzu5').should('have.text', 'received')
        });

        //Alternate method for interception
         /*  cy.request('POST', 'https://dev-api.bookadoc.com/api/v1/appointment/customer/').then((response) => {
            
        // Use the response data in your test
            expect(response.status).to.eq(200);
            const data = response.body.data;
            cy.log('API Data:', data);
      
            // Perform an action with the data
            cy.get('#inputField').type(data.value);
        });*/

    })
})