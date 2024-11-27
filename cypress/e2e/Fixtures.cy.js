describe('MyTestSuiteFixtures', ()=>{

    //direct access
        it('fixtureDemo', ()=>{
            cy.visit("https://opensource-demo.orangehrmlive.com")
            cy.get("input[placeholder='Username']").type("Admin")
            cy.get("input[placeholder='Password']").type("admin123")
            cy.get("button[type='submit']").click()

            cy.get(".oxd-topbar-header-title"). should('have.text', "Dashboard")
        })

        //Access from fixture file
        it("AccessValidFixture", ()=>{
            cy.visit("https://opensource-demo.orangehrmlive.com")

            cy.fixture('MyTestSuite').then((data)=>{
                cy.get("input[placeholder='Username']").type(data.Username)
                cy.get("input[placeholder='Password']").type(data.Password)
                cy.get("button[type='submit']").click()

                cy.get(".oxd-topbar-header-title"). should('have.text', data.expected)
            })

        })

        //Access through hook, multiple it blocks
        let userdata; //define as global variable
        before(()=>{
            cy.fixture('MyTestSuite').then ((data)=>{ userdata= data})
        })

        it('AccessInvalidFixture', ()=>{
            cy.visit("https://opensource-demo.orangehrmlive.com")
            cy.get("input[placeholder='Username']").type(data.InvalidUsername)
            cy.get("input[placeholder='Password']").type(data.InvalidPassword)
            cy.get("button[type='submit']").click()

            cy.get(".oxd-topbar-header-title"). should('have.text', "Dashboard")
        })

        // it('fixtureDemo', ()=>{
        //     cy.visit("https://opensource-demo.orangehrmlive.com")
        //     cy.get("input[placeholder='Username']").type("Admin")
        //     cy.get("input[placeholder='Password']").type("admin123")
        //     cy.get("button[type='submit']").click()

        //     cy.get(".oxd-topbar-header-title"). should('have.text', "Dashboard")
        // })

    }
)