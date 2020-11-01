/// <reference types="cypress" />

//elements

const nameField = ':nth-child(1) > input'
const mailField = ':nth-child(2) > input'
const phoneField = ':nth-child(3) > input'
const saveBtn = '.blue'

// functions
function createClient(cy, name, email, phone, contentToConfirm){
    cy.get(nameField).type(name)
    cy.get(mailField).type(email)
    cy.get(phoneField).type(phone)
    cy.get(saveBtn).click()
    cy.contains(contentToConfirm)
}

// exports

module.exports = {
    createClient
}