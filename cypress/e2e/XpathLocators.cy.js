//const cypress= require("cypress")
describe("XpathLocators", () =>{
it("find number of products", ()=>{
    cy.visit("https://www.jumia.com.ng/")
cy.xpath("//body/div[@id='jm']/main[@class='has-b2top']/div[@class='row -pvm']/div[2]/section[1]/div[1]/a").should('have.length',12)

})

//it("chained x-path", ()=>{
  //  cy.visit("https://www.jumia.com.ng/")
//cy.xpath("//body/div[@id='jm']/main[@class='has-b2top']/div[@class='row -pvm']/div[2]/section[1]/div[1]").xpath("/a").should('have.length',12)

//})
})
 