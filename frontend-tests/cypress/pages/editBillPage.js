/// <reference types="cypress" />

//elements
const idField = ':nth-child(1) > input'
const createdField = ':nth-child(2) > input'
const amountField = ':nth-child(3) > input'
const statusCheck = '.checkbox'
const saveBtn = '.blue'

//functions
function updateBill(cy, newPrice, contentToConfirm) {
    cy.get(amountField).clear().type(newPrice)
    cy.get(statusCheck).click()
    cy.get(saveBtn).click()
    cy.contains(contentToConfirm)
}

//exports
module.exports = {
    updateBill  
}

