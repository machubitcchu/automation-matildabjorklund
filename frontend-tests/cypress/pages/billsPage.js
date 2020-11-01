/// <reference types="cypress" />

//elements
const createBillBtn = 'h2 > .btn'
const oldBill = ':nth-child(1) > .action > img'
const editOption = '.menu > :nth-child(1)'

// functions
function createNewBill(cy, contentToConfirm) {
    cy.get(createBillBtn).click()
    cy.contains(contentToConfirm) 
}
function editBill(cy, contentToConfirm) {
    cy.get(oldBill).click()
    cy.get(editOption).click()
    cy.contains(contentToConfirm)
}

// exports
module.exports = {
    createNewBill,
    editBill
}