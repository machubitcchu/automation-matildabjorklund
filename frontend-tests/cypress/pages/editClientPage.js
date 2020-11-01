// elements
const nameField = ':nth-child(3) > input'
const mailField = ':nth-child(4) > input'
const phoneField = ':nth-child(5) > input'
const saveBtn = '.blue'

// functions
function updateClient(cy, newName, newMail, newPhone, contentToConfirm){
    cy.get(nameField).clear().type(newName) 
    cy.get(mailField).clear().type(newMail) 
    cy.get(phoneField).clear().type(newPhone)
    cy.get(saveBtn).click() 
    cy.contains(contentToConfirm)
}

// exports
module.exports = {
    updateClient  
}