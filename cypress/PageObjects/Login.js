class login {
    usernameElement=':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    passwordElement= ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    buttonElement='.oxd-button'
    sucessText=".oxd-topbar-header-title"

    setUsername(username){
        cy.get(this.usernameElement).type(username)
    }

    setPassword(password){
        cy.get(this.passwordElement).type(password)
    }
    

    ClickSubmit(){
        cy.get(this.buttonElement).click()
    }

    verifyLogin(){
        cy.get(this.sucessText). should('have.text', 'Dashboard')
    }
}
export default login