/// <reference types="cypress" />

// elements
const overviewPageTitle = 'Testers Hotel'
const logoutBtn = '.user > .btn'
const clientView = '.blocks > :nth-child(2) > .btn'
const billView = ':nth-child(3) > .btn'
const roomView = ':nth-child(1) > .btn'
const reservationView = ':nth-child(4) > .btn'

// functions

function checkOverviewPageTitle(){
    cy.title().should('eq', overviewPageTitle )
}
function logoutFromApp(cy, contentToConfirm){
    cy.get(logoutBtn).click()
    cy.contains(contentToConfirm)  
}
function continueToClients(cy, contentToConfirm){
    cy.get(clientView).click()
    cy.contains(contentToConfirm)   
}
function continueToBills(cy, contentToConfirm){
    cy.get(billView).click()
    cy.contains(contentToConfirm)   
}
function continueToRooms(cy, contentToConfirm){
    cy.get(roomView).click()
    cy.contains(contentToConfirm) 
}
function continueToReservations(cy, contentToConfirm){
    cy.get(reservationView).click()
    cy.contains(contentToConfirm)
}

// exports
module.exports = { 
    checkOverviewPageTitle,
    logoutFromApp,
    continueToClients,
    continueToBills,
    continueToRooms,
    continueToReservations
}