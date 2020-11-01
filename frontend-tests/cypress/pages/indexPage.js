/// <reference types="cypress" />

// elements

const indexPageTitle = 'Testers Hotel'
const usernameTextField = ':nth-child(1) > input'
const passwordTextField = ':nth-child(2) > input'
const loginBtn = '.btn'

// functions

function checkIndexPageTitle(){
    cy.title().should('eq', indexPageTitle )
}
function loginToApp(cy, username, password, contentToConfirm){
    cy.get(usernameTextField).type(username)
    cy.get(passwordTextField).type(password)
    cy.get(loginBtn).click()
    cy.contains(contentToConfirm)
}

// exports
module.exports = { 
    checkIndexPageTitle,
    loginToApp
}

