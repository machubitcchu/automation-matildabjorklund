/// <reference types="cypress" />

import * as indexFuncs from "../pages/indexPage"
import * as overviewFuncs from "../pages/overviewPage"
import * as targets from "../targets/targets"
import * as clientFuncs from "../pages/clientsPage"
import * as createClientFuncs from "../pages/createClientPage"
import * as editClientFuncs from "../pages/editClientPage"
import * as billFuncs from "../pages/billsPage"
import * as createBillFuncs from "../pages/createBillPage"
import * as editBillFuncs from "../pages/editBillPage"

// This is a test suite
describe('Test suite', function(){ 

    beforeEach(() => {
        cy.visit(targets.base_url)
        indexFuncs.checkIndexPageTitle(cy)
        indexFuncs.loginToApp(cy, targets.username, targets.password, targets.assertion1)
    })

    afterEach(() => {
        overviewFuncs.logoutFromApp(cy, targets.assertion2)
    })

    // This is a test case
    it('Create client', function(){
        overviewFuncs.continueToClients(cy, targets.assertion3)
        clientFuncs.createNewClient(cy, targets.assertion4)
        createClientFuncs.createClient(cy, targets.clientname, targets.clientmail, targets.clientphone, targets.assertion5)
    })

    it('Edit client', function(){
        overviewFuncs.continueToClients(cy, targets.assertion3)
        clientFuncs.editClient(cy, targets.assertion7)
        editClientFuncs.updateClient(cy, targets.newname, targets.newmail, targets.newphone, targets.assertion6)
    })

    it('Delete client', function(){
        overviewFuncs.continueToClients(cy, targets.assertion3)
        clientFuncs.deleteOldClient(cy, targets.assertion3)

    })

    it('Create bill', function(){
        overviewFuncs.continueToBills(cy, targets.assertion8)
        billFuncs.createNewBill(cy, targets.assertion9)
        createBillFuncs.createBill(cy, targets.amount, targets.amount)
    })

    it('Edit bill', function(){
        overviewFuncs.continueToBills(cy, targets.assertion8)
        billFuncs.editBill(cy, targets.assertion7)
        editBillFuncs.updateBill(cy, targets.newamount, targets.newamount)  
    })
   
    
})