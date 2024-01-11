
describe("CSSLoacators" ,()=>{
it("csslocators", ()=>{
    cy.visit("https://studentportal.unilag.edu.ng/login")
    cy.get("#email")  
})
})