/// <reference types="cypress" />

//elements
const priceField = 'input'
const saveBtn = '.blue'

// functions
function createBill(cy, price, contentToConfirm){
    cy.get(priceField).type(price)
    cy.get(saveBtn).click()
    cy.contains(contentToConfirm)
}

// exports
module.exports = {
    createBill
}