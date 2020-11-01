/// <reference types="cypress" />

//elements
const createClientBtn = 'h2 > .btn'
const oldClient = ':nth-child(1) > .action > img'
const newerClient = ':nth-child(2) > .action > img'
const editOption = '.menu > :nth-child(1)'
const deleteOption = '.menu > :nth-child(2)'

// functions
function createNewClient(cy, contentToConfirm){
    cy.get(createClientBtn).click()
    cy.contains(contentToConfirm) 
}
function editClient(cy, contentToConfirm){
    cy.get(newerClient).click()
    cy.get(editOption).click() 
    cy.contains(contentToConfirm)
}
function deleteOldClient(cy, contentToConfirm){
    cy.get(oldClient).click()
    cy.get(deleteOption).click()
    cy.contains(contentToConfirm)
}

// exports
module.exports = {
    createNewClient,
    editClient,
    deleteOldClient,
}